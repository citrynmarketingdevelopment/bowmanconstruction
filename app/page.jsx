import Link from 'next/link';
import SiteHeader from './../components/site-header';
import SiteFooter from './../components/site-footer';
import Interactions from './../components/interactions';
import StructuredData from './../components/structured-data';
import { pageMetadata } from './../lib/seo';

export const metadata = pageMetadata("/", "Bowman Construction | Grading, Asphalt Paving & Concrete", "Bowman Construction Offers Grading, Asphalt Paving, Concrete, Asphalt Maintenance, Seal Coating, And Striping. Call (661) 361-7840 To Discuss Your Project.");

export default function Page() {
  return (<div className="">
    <a className="skip-link" href="#main">Skip To Content</a>
    <SiteHeader currentPath="/" />
    {/* Static content is rendered by Next.js on the server. */}
    <main id="main">
    <section className="hero" aria-labelledby="hero-title">
      <img className="hero-photo" src="/assets/photos/bowman-construction-pneumatic-tire-roller-compacting-asphalt-road.webp" width="2048" height="1365" alt="Bowman Construction Operator Compacting Fresh Asphalt With A Pneumatic Tire Roller" fetchPriority="high" />
      <video className="hero-photo hero-video" muted={true} loop={true} playsInline={true} preload="none" poster="/assets/photos/bowman-construction-pneumatic-tire-roller-compacting-asphalt-road.webp" aria-hidden="true" tabIndex="-1">
        <source data-src="/assets/video/bowman-construction-header.webm" type="video/webm" />
      </video>
      <div className="hero-shade"></div>
      <button className="hero-video-toggle" type="button" hidden={true}>Pause Video</button>
      <div className="hero-content frame">
        <h1 id="hero-title">Built On<br />Solid Ground.</h1>
        <div className="hero-bottom">
          <p>Grading, Asphalt Paving, And Concrete.<br />A Family Name Behind Every Job.</p>
          <Link className="button button-primary" href="/contact">Let’s Talk About Your Project</Link>
        </div>
      </div>
    </section>

    <div className="service-ribbon" aria-label="Construction Services">
      <div className="frame ribbon-inner"><span>Grading</span><span>Paving &amp; Concrete</span><span>Asphalt Maintenance</span><span>Seal Coating &amp; Striping</span></div>
    </div>

    <section id="services" className="services section frame" aria-labelledby="services-title">
      <div className="section-heading reveal">
        <h2 id="services-title">From The Ground Up.</h2>
        <p>Prepare It Right. Build It Well. Keep It Working.<br />One Crew For The Work Your Property Needs.</p>
      </div>
      <div className="service-panels" aria-label="Explore Bowman Construction Services">
        <article id="grading" className="service-panel is-active">
          <img className="service-panel-photo" src="/assets/photos/bowman-construction-asphalt-paving-machine-on-road.webp" width="2048" height="1365" alt="Bowman Paving Equipment On A Prepared Road Construction Site" loading="lazy" />
          <div className="service-panel-shade" aria-hidden="true"></div>
          <div className="service-panel-content">
            <h3 id="grading-title">Grading</h3>
            <p id="grading-description" className="service-panel-description">Site Grading And Base Preparation. A Solid Foundation For The Work Ahead.</p>
          </div>
        <button className="service-trigger" type="button" aria-labelledby="grading-title" aria-expanded="true" aria-controls="grading-description"><span className="visually-hidden">Explore This Service</span></button>
        </article>
        <article id="paving-concrete" className="service-panel">
          <img className="service-panel-photo" src="/assets/photos/bowman-construction-crew-raking-asphalt-behind-paver.webp" width="2048" height="1365" alt="Bowman Crew Placing And Hand Finishing New Asphalt Pavement" loading="lazy" />
          <div className="service-panel-shade" aria-hidden="true"></div>
          <div className="service-panel-content">
            <h3 id="paving-concrete-title">Paving &amp;<br />Concrete</h3>
            <p id="paving-concrete-description" className="service-panel-description">Asphalt Paving And Concrete Work, Planned Around Your Property And Finished With Care.</p>
          </div>
        <button className="service-trigger" type="button" aria-labelledby="paving-concrete-title" aria-expanded="false" aria-controls="paving-concrete-description"><span className="visually-hidden">Explore This Service</span></button>
        </article>
        <article id="asphalt-maintenance" className="service-panel">
          <img className="service-panel-photo" src="/assets/photos/bowman-construction-worker-hand-raking-hot-asphalt-at-screed.webp" width="2048" height="1365" alt="Bowman Worker Hand Finishing Asphalt Beside The Paving Machine" loading="lazy" />
          <div className="service-panel-shade" aria-hidden="true"></div>
          <div className="service-panel-content">
            <h3 id="asphalt-maintenance-title">Asphalt<br />Maintenance</h3>
            <p id="asphalt-maintenance-description" className="service-panel-description">Keep Your Pavement Working. Care And Maintenance Suited To The Condition Of Your Surface.</p>
          </div>
        <button className="service-trigger" type="button" aria-labelledby="asphalt-maintenance-title" aria-expanded="false" aria-controls="asphalt-maintenance-description"><span className="visually-hidden">Explore This Service</span></button>
        </article>
        <article id="seal-coating-striping" className="service-panel">
          <img className="service-panel-photo" src="/assets/photos/bowman-construction-tandem-roller-compacting-new-road-pavement.webp" width="2048" height="1365" alt="Bowman Roller Working Across A New Asphalt Surface" loading="lazy" />
          <div className="service-panel-shade" aria-hidden="true"></div>
          <div className="service-panel-content">
            <h3 id="seal-coating-striping-title">Seal Coating<br />&amp; Striping</h3>
            <p id="seal-coating-striping-description" className="service-panel-description">Protect The Surface. Bring Definition Back With Seal Coating And Clear Pavement Markings.</p>
          </div>
        <button className="service-trigger" type="button" aria-labelledby="seal-coating-striping-title" aria-expanded="false" aria-controls="seal-coating-striping-description"><span className="visually-hidden">Explore This Service</span></button>
        </article>
      </div>
      <Link className="text-link services-contact-link" href="/services">Explore Our Services</Link>
    </section>

    <section className="work-section section frame" aria-labelledby="work-title">
      <div className="section-heading reveal"><h2 id="work-title">Our Work.</h2><div><p>Out On The Job. Down To The Details.<br />Take A Closer Look At The Bowman Crew In Action.</p><Link className="text-link" href="/work">Explore Our Work</Link></div></div>
      <div className="featured-work">
        <Link className="work-image reveal" href="/work#paving">
          <div className="image-wrap"><img src="/assets/photos/bowman-construction-crew-raking-asphalt-behind-paver.webp" width="2048" height="1365" alt="Bowman Crew Hand Raking Fresh Asphalt Behind A Paving Machine" loading="lazy" /></div>
          <div className="image-caption"><h3>Every Layer Matters.</h3><span>Asphalt Paving</span></div>
        </Link>
        <Link className="work-image reveal" href="/work#compaction">
          <div className="image-wrap"><img src="/assets/photos/bowman-construction-tandem-roller-compacting-asphalt-with-water-spray.webp" width="1365" height="2048" alt="Tandem Drum Roller Compacting Fresh Asphalt With Water Spray" loading="lazy" /></div>
          <div className="image-caption"><h3>Built In. Rolled Smooth.</h3><span>Compaction</span></div>
        </Link>
        <Link className="work-image reveal" href="/work#crew">
          <div className="image-wrap"><img src="/assets/photos/bowman-construction-workers-using-asphalt-lutes-to-level-pavement.webp" width="2048" height="1365" alt="Two Bowman Workers Leveling Hot Asphalt With Hand Tools" loading="lazy" /></div>
          <div className="image-caption"><h3>A Hands-On Approach.</h3><span>Our Crew</span></div>
        </Link>
      </div>
    </section>

    <section id="about" className="about-section section" aria-labelledby="about-title">
      <div className="about-layout frame">
        <div className="about-image reveal"><img src="/assets/photos/bowman-construction-asphalt-paving-worker-in-bowman-company-shirt.webp" width="2048" height="1365" alt="Bowman Construction Team Member Wearing The Company Shirt On A Paving Job" loading="lazy" /></div>
        <div className="about-copy reveal">
          <h2 id="about-title">Our Name.<br />Our Standards.</h2>
          <p>Bowman Construction Is A Family Operation, Built On A Father’s 35 Years In Asphalt Construction And Carried Forward With His Sons.</p>
          <p>That Experience Lives On The Jobsite: In The Preparation, The Equipment, And The Attention Given To The Finish. When Our Name Is On The Work, We Take It Personally.</p>
          <div className="experience"><strong>35</strong><p>Years Of Asphalt Experience<br />Behind The Family.</p></div>
          <Link className="text-link" href="/our-story">Meet Bowman Construction</Link>
        </div>
      </div>
    </section>

    <section id="questions" className="faq-section section frame" aria-labelledby="questions-title">
      <div className="section-heading reveal"><h2 id="questions-title">Project Questions</h2></div>
      <div className="faq-list">
        <details className="faq-item" name="project-questions">
          <summary id="project-question-1"><span>What Services Do You Offer?</span><span className="faq-indicator" aria-hidden="true"></span></summary>
          <div className="faq-answer"><p>Bowman Construction Offers Grading, Asphalt Paving And Concrete, Asphalt Maintenance, Seal Coating, And Striping. Tell Us About Your Property And The Work You Have In Mind.</p></div>
        </details>
        <details className="faq-item" name="project-questions">
          <summary id="project-question-2"><span>Can You Help With Existing Asphalt?</span><span className="faq-indicator" aria-hidden="true"></span></summary>
          <div className="faq-answer"><p>Yes. Our Services Include Asphalt Maintenance, Seal Coating, And Striping. We’ll Discuss The Condition Of Your Pavement And The Work It Needs.</p></div>
        </details>
        <details className="faq-item" name="project-questions">
          <summary id="project-question-3"><span>How Do I Start A Project?</span><span className="faq-indicator" aria-hidden="true"></span></summary>
          <div className="faq-answer"><p>Call Bowman Construction At (661) 361-7840. Share Your Project Location, The Work Needed, And Your Ideal Timeline So We Can Discuss The Next Steps.</p></div>
        </details>
        <details className="faq-item" name="project-questions">
          <summary id="project-question-4"><span>What Should I Have Ready For Our First Call?</span><span className="faq-indicator" aria-hidden="true"></span></summary>
          <div className="faq-answer"><p>Your Project Location, A Description Of The Work, Approximate Dimensions, And Your Preferred Timeline Are A Helpful Starting Point. Photos Can Help Explain The Current Surface And Site Conditions.</p></div>
        </details>
        <details className="faq-item" name="project-questions">
          <summary id="project-question-5"><span>Is Bowman Construction A Family Business?</span><span className="faq-indicator" aria-hidden="true"></span></summary>
          <div className="faq-answer"><p>Yes. Bowman Construction Is A Family Operation, Built On A Father’s 35 Years In Asphalt Construction And Carried Forward With His Sons.</p></div>
        </details>
      </div>
    </section>

    <section id="contact" className="contact-section section frame" aria-labelledby="contact-title">
      <div className="contact-heading reveal"><h2 id="contact-title">Let’s Get<br /> To Work.</h2><img className="contact-heading-photo" src="/assets/photos/bowman-construction-asphalt-paver-control-panel-and-operators.webp" width="2048" height="1365" alt="Bowman Crew Working Together At The Paver Controls" loading="lazy" /></div>
      <div className="contact-panel reveal">
        <div><h3>Talk To Bowman.</h3><p>Give Us A Call To Discuss The Job And The Next Steps.</p><a className="contact-phone" href="tel:+16613617840">(661) 361-7840</a></div>
        <div className="contact-action"><a className="button button-primary" href="tel:+16613617840">Call About Your Project</a></div>
      </div>
      <p className="contact-note">Have Your Project Location, The Work Needed, And Your Ideal Timeline Ready. We’ll Take It From There.</p>
    </section>
  </main>
    <SiteFooter currentPath="/" />
    <StructuredData path="/" title="Bowman Construction | Grading, Asphalt Paving & Concrete" description="Bowman Construction Offers Grading, Asphalt Paving, Concrete, Asphalt Maintenance, Seal Coating, And Striping. Call (661) 361-7840 To Discuss Your Project." />
    <Interactions />
  </div>);
}
