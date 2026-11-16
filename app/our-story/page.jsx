import Link from 'next/link';
import SiteHeader from '../../components/site-header';
import SiteFooter from '../../components/site-footer';
import Interactions from '../../components/interactions';
import StructuredData from '../../components/structured-data';
import { pageMetadata } from '../../lib/seo';

export const metadata = pageMetadata("/our-story", "Our Family Story | Bowman Construction", "Meet The Family Operation Behind Bowman Construction, Built On A Father’s 35 Years In Asphalt Construction And Carried Forward With His Sons.");

export default function Page() {
  return (<div className="inner-page">
    <a className="skip-link" href="#main">Skip To Content</a>
    <SiteHeader currentPath="/our-story" />
    {/* Static content is rendered by Next.js on the server. */}
    <main id="main" className="story-page">
    <section className="page-intro frame" aria-labelledby="page-title">
      <div className="page-intro-copy"><h1 id="page-title">Our Name.<br />Our Standards.</h1><p>A Family Name Behind Every Job. Bowman Construction Brings A Father’s Asphalt Experience And His Sons Together On The Jobsite.</p><Link className="text-link" href="/contact">Talk To Bowman</Link></div>
      <img className="story-intro-photo" src="/assets/photos/bowman-construction-asphalt-paving-worker-in-bowman-company-shirt.webp" width="2048" height="1365" alt="Bowman Construction Team Member Wearing The Family Name On The Jobsite" fetchPriority="high" />
    </section>
    <section className="story-content frame" aria-labelledby="experience-title">
      <div className="story-experience"><strong>35</strong><p>Years Of A Father’s<br />Asphalt Experience.</p></div>
      <div className="story-copy"><h2 id="experience-title">Experience Passed Forward.</h2><p>Bowman Construction Is A Family Operation, Built On A Father’s 35 Years In Asphalt Construction And Carried Forward With His Sons.</p><p>That Experience Lives On The Jobsite: In The Preparation, The Equipment, And The Attention Given To The Finish. When Our Name Is On The Work, We Take It Personally.</p></div>
    </section>
    <section className="story-work frame" aria-labelledby="story-work-title">
      <img src="/assets/photos/bowman-construction-workers-using-asphalt-lutes-to-level-pavement.webp" width="2048" height="1365" alt="Bowman Crew Working Together To Level Fresh Asphalt With Hand Tools" loading="lazy" />
      <div><h2 id="story-work-title">A Hands-On Approach.</h2><p>From Preparing The Ground To Finishing The Surface, The Details Matter. Our Work Includes Grading, Asphalt Paving And Concrete, Asphalt Maintenance, Seal Coating, And Striping.</p><Link className="text-link" href="/work">See Our Crew At Work</Link></div>
    </section>
    <section className="page-cta frame"><h2>Put Our Name Behind Your Job.</h2><Link className="button button-primary" href="/contact">Discuss Your Project</Link></section>
  </main>
    <SiteFooter currentPath="/our-story" />
    <StructuredData path="/our-story" title="Our Family Story | Bowman Construction" description="Meet The Family Operation Behind Bowman Construction, Built On A Father’s 35 Years In Asphalt Construction And Carried Forward With His Sons." />
    <Interactions />
  </div>);
}
