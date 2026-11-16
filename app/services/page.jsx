import Link from 'next/link';
import SiteHeader from '../../components/site-header';
import SiteFooter from '../../components/site-footer';
import Interactions from '../../components/interactions';
import StructuredData from '../../components/structured-data';
import { pageMetadata } from '../../lib/seo';

export const metadata = pageMetadata("/services", "Grading, Paving, Concrete & Asphalt Services | Bowman Construction", "Explore Bowman Construction Services: Grading, Asphalt Paving And Concrete, Asphalt Maintenance, Seal Coating, And Striping.");

export default function Page() {
  return (<div className="inner-page">
    <a className="skip-link" href="#main">Skip To Content</a>
    <SiteHeader currentPath="/services" />
    {/* Static content is rendered by Next.js on the server. */}
    <main id="main" className="services-page">
    <section className="page-intro frame" aria-labelledby="page-title">
      <div className="page-intro-copy"><h1 id="page-title">From The<br />Ground Up.</h1><p>Grading, Paving, Concrete, And Care For The Surface. One Crew To Talk Through The Work Your Property Needs.</p><Link className="text-link" href="/contact">Discuss Your Project</Link></div>
      <img src="/assets/photos/bowman-construction-leeboy-asphalt-paver-on-jobsite.webp" width="2048" height="1365" alt="Bowman Construction Paving Equipment At The Jobsite" fetchPriority="high" />
    </section>
    <section id="services" className="services section frame" aria-label="Explore Our Construction Services">
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

    </section>
    <section className="service-details frame" aria-label="Service Details">
      <article className="service-detail"><h2>Grading</h2><div><p>A Good Surface Starts With The Ground Beneath It. Talk To Bowman About Site Grading And Base Preparation For Your Project.</p><p className="service-detail-note">Tell Us About The Site, The Existing Ground, And What You Plan To Build.</p></div></article>
      <article className="service-detail"><h2>Paving And Concrete</h2><div><p>Asphalt Paving And Concrete Work, Planned Around Your Property And Finished With Care. We’ll Discuss The Area, How It Will Be Used, And The Work Needed.</p><p className="service-detail-note">An Approximate Size And A Few Site Photos Are A Helpful Starting Point.</p></div></article>
      <article className="service-detail"><h2>Asphalt Maintenance</h2><div><p>Existing Pavement Needs Attention Too. We’ll Talk Through The Condition Of Your Asphalt And The Maintenance Your Surface Needs.</p><p className="service-detail-note">Share What You’re Seeing And Which Areas Need Attention.</p></div></article>
      <article className="service-detail"><h2>Seal Coating And Striping</h2><div><p>Care For Your Existing Asphalt With Seal Coating And Clear Pavement Markings. Tell Us About Your Surface And The Striping Work You Have In Mind.</p><p className="service-detail-note">Let Us Know Whether You Need Seal Coating, Striping, Or Both.</p></div></article>
    </section>
    <section className="page-cta frame"><h2>Let’s Talk About The Work.</h2><Link className="button button-primary" href="/contact">Start Your Project</Link></section>
  </main>
    <SiteFooter currentPath="/services" />
    <StructuredData path="/services" title="Grading, Paving, Concrete & Asphalt Services | Bowman Construction" description="Explore Bowman Construction Services: Grading, Asphalt Paving And Concrete, Asphalt Maintenance, Seal Coating, And Striping." />
    <Interactions />
  </div>);
}
