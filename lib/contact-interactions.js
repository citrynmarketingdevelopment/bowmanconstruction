export function initializeContact() {
  const cleanups = [];
  function on(target, event, handler, options) {
    if (!target) return;
    target.addEventListener(event, handler, options);
    cleanups.push(() => target.removeEventListener(event, handler, options));
  }
  function observe(callback, options) {
    const observer = new IntersectionObserver(callback, options);
    cleanups.push(() => observer.disconnect());
    return observer;
  }
const config = { endpoint: process.env.NEXT_PUBLIC_INQUIRY_ENDPOINT || null };

const form = document.querySelector('#inquiry-form');
if (!form) return () => {};
const status = document.querySelector('#inquiry-status');
const summary = document.querySelector('#inquiry-errors');
const submit = form.querySelector('[type="submit"]');
const fields = ['name', 'replyTo', 'project'];
let pending = false;

function validReply(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
    (/^[+\d\s().-]+(?:\s*(?:x|ext\.?)[\s\d]+)?$/i.test(value) && value.replace(/\D/g, '').length >= 7 && value.replace(/\D/g, '').length <= 20);
}
function errorFor(name) {
  const value = form.elements[name].value.trim();
  if (!value) return {name:'Please Enter Your Name.', replyTo:'Please Enter An Email Address Or Phone Number.', project:'Please Tell Us A Little About Your Project.'}[name];
  if (name === 'replyTo' && !validReply(value)) return 'Please Enter A Valid Email Address Or Phone Number.';
  return '';
}
function showError(name, message) {
  const field = form.elements[name];
  field.setAttribute('aria-invalid', String(Boolean(message)));
  const error = document.getElementById(name + '-error');
  error.textContent = message;
  error.hidden = !message;
}
function validate() {
  const errors = fields.map(name => ({name, message:errorFor(name)})).filter(e => e.message);
  fields.forEach(name => showError(name, errorFor(name)));
  summary.replaceChildren();
  summary.hidden = !errors.length;
  if (errors.length) {
    const lead = document.createElement('p'); lead.textContent = 'Please Check These Details:'; summary.append(lead);
    const list = document.createElement('ul');
    errors.forEach(({name,message}) => { const item=document.createElement('li'),link=document.createElement('a'); link.href='#'+form.elements[name].id;link.textContent=message;item.append(link);list.append(item); });
    summary.append(list); summary.focus();
  }
  return !errors.length;
}
on(form, 'input', event => {
  const field=event.target;
  if (fields.includes(field.name) && field.getAttribute('aria-invalid') === 'true') showError(field.name,errorFor(field.name));
});

if (config.endpoint) status.textContent = 'We’ll Use Your Contact Details To Reply About Your Project.';
on(form, 'submit', async event => {
  event.preventDefault();
  if (pending || !validate()) return;
  if (!config.endpoint) {
    status.textContent = 'Your Inquiry Has Not Been Sent. Online Inquiries Are Coming Soon. Please Call (661) 361-7840.';
    return;
  }
  pending = true; submit.disabled = true; submit.textContent = 'Sending…';form.setAttribute('aria-busy','true');
  status.textContent = 'Sending Your Inquiry…';
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    const values=Object.fromEntries(new FormData(form));
    const response=await fetch(config.endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(values),signal:controller.signal});
    if (!response.ok) throw new Error('Inquiry Was Not Accepted');
    form.reset(); summary.hidden=true;fields.forEach(name=>form.elements[name].removeAttribute('aria-invalid'));
    status.textContent='Thank You. Your Inquiry Has Been Sent. We’ll Be In Touch About Your Project.';
  } catch {
    status.textContent='We Could Not Confirm Your Inquiry Was Sent. Your Details Are Still Here. Please Try Again Or Call (661) 361-7840.';
  } finally {
    clearTimeout(timer);pending=false;submit.disabled=false;submit.textContent='Send Inquiry';form.removeAttribute('aria-busy');
  }
});

return () => { cleanups.reverse().forEach(cleanup => cleanup());
};
}
