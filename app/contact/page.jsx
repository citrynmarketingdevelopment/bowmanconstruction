import SiteHeader from '../../components/site-header';
import SiteFooter from '../../components/site-footer';
import Interactions from '../../components/interactions';
import StructuredData from '../../components/structured-data';
import { pageMetadata } from '../../lib/seo';

export const metadata = pageMetadata("/contact", "Contact Bowman Construction | Start Your Project", "Contact Bowman Construction About Grading, Paving, Concrete, Asphalt Maintenance, Seal Coating, Or Striping. Share Your Project Details Or Call (661) 361-7840.");

export default function Page() {
  return (<div className="inner-page contact-page-body">
    <a className="skip-link" href="#main">Skip To Content</a>
    <SiteHeader currentPath="/contact" />
    {/* Static content is rendered by Next.js on the server. */}
    <main id="main" className="contact-page frame">
    <section className="inquiry-intro" aria-labelledby="inquiry-title">
      <h1 id="inquiry-title">Let’s Get<br /> To Work.</h1>
      <p>Tell Us A Little About Your Project. We’ll Take It From There.</p>
      <a className="text-link inquiry-call" href="tel:+16613617840">Prefer A Call? (661) 361-7840</a>
    </section>
    <form id="inquiry-form" className="inquiry-form" noValidate={true}>
      <p className="form-guide">Just Three Required Fields. Everything Else Is Optional.</p>
      <div id="inquiry-errors" className="form-errors" role="alert" tabIndex="-1" hidden={true}></div>
      <div className="inquiry-fields">
        <div className="inquiry-field">
          <label htmlFor="inquiry-name">Your Name <span>(Required)</span></label>
          <input id="inquiry-name" name="name" autoComplete="name" required={true} maxLength="120" aria-describedby="name-error" />
          <p id="name-error" className="field-error" hidden={true}></p>
        </div>
        <div className="inquiry-field">
          <label htmlFor="inquiry-reply">Email Or Phone <span>(Required)</span></label>
          <input id="inquiry-reply" name="replyTo" type="text" autoComplete="email" required={true} maxLength="200" aria-describedby="reply-help replyTo-error" />
          <p id="reply-help" className="field-help">Whichever You Prefer Us To Use.</p>
          <p id="replyTo-error" className="field-error" hidden={true}></p>
        </div>
        <div className="inquiry-field">
          <label htmlFor="inquiry-location">Project Location <span>(Optional)</span></label>
          <input id="inquiry-location" name="location" autoComplete="address-level2" placeholder="City Or ZIP Code" maxLength="160" />
        </div>
        <div className="inquiry-field">
          <label htmlFor="inquiry-service">What Do You Need? <span>(Optional)</span></label>
          <select id="inquiry-service" name="service">
            <option value="">Not Sure Yet</option>
            <option>Grading</option><option>Paving And Concrete</option><option>Asphalt Maintenance</option><option>Seal Coating And Striping</option><option>More Than One Service</option>
          </select>
        </div>
        <div className="inquiry-field inquiry-field-wide">
          <label htmlFor="inquiry-project">About Your Project <span>(Required)</span></label>
          <textarea id="inquiry-project" name="project" rows="4" required={true} maxLength="5000" placeholder="What Would You Like Done? A Few Sentences Are Plenty." aria-describedby="project-error"></textarea>
          <p id="project-error" className="field-error" hidden={true}></p>
        </div>
      </div>
      <div className="inquiry-submit">
        <button className="button button-primary" type="submit">Send Inquiry</button>
        <p id="inquiry-status" className="inquiry-status" role="status" aria-live="polite">Online Inquiries Are Coming Soon. For Now, Please Call (661) 361-7840.</p>
      </div>
      <noscript><p className="field-help">Please Call <a href="tel:+16613617840">(661) 361-7840</a> To Discuss Your Project.</p></noscript>
    </form>
  </main>
    <SiteFooter currentPath="/contact" />
    <StructuredData path="/contact" title="Contact Bowman Construction | Start Your Project" description="Contact Bowman Construction About Grading, Paving, Concrete, Asphalt Maintenance, Seal Coating, Or Striping. Share Your Project Details Or Call (661) 361-7840." />
    <Interactions />
  </div>);
}
