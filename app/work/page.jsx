import Link from 'next/link';
import SiteHeader from '../../components/site-header';
import SiteFooter from '../../components/site-footer';
import Interactions from '../../components/interactions';
import StructuredData from '../../components/structured-data';
import { pageMetadata } from '../../lib/seo';

export const metadata = pageMetadata("/work", "Asphalt Paving Project Photos | Bowman Construction", "Explore Bowman Construction’s Asphalt Paving, Compaction, And Hand-Finishing Photos. See The Family Crew And Equipment At Work.");

export default function Page() {
  return (<div className="inner-page">
    <a className="skip-link" href="#main">Skip To Content</a>
    <SiteHeader currentPath="/work" />
    {/* Static content is rendered by Next.js on the server. */}
    <main id="main">
    <section className="work-intro frame" aria-labelledby="work-title">
      <h1 id="work-title">Out On<br />The Job.</h1>
      <p>From The First Load To The Final Pass. A Closer Look At The People, Equipment, And Hands-On Work Behind A Bowman Paving Job.</p>
    </section>
    <div className="gallery-section frame">
      <div className="gallery-controls" role="group" aria-label="Filter Work Photos">
        <button className="gallery-filter" data-filter="all" aria-pressed="true">All Work</button>
        <button className="gallery-filter" data-filter="paving" aria-pressed="false">Paving</button>
        <button className="gallery-filter" data-filter="compaction" aria-pressed="false">Compaction</button>
        <button className="gallery-filter" data-filter="crew" aria-pressed="false">Our Crew</button>
        <button className="gallery-filter" data-filter="equipment" aria-pressed="false">Equipment</button>
      </div>
      <div className="gallery-grid">
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-asphalt-paver-and-road-construction-crew.webp" data-category="crew" data-caption="Asphalt Paver And Road Construction Crew" aria-label="View Photo: Asphalt Paver And Road Construction Crew">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-asphalt-paver-and-road-construction-crew.webp" width="667" height="1000" alt="Asphalt Paver And Road Construction Crew" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-asphalt-paver-control-panel-and-operators.webp" data-category="crew" data-caption="Asphalt Paver Control Panel And Operators" aria-label="View Photo: Asphalt Paver Control Panel And Operators">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-asphalt-paver-control-panel-and-operators.webp" width="800" height="533" alt="Asphalt Paver Control Panel And Operators" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-asphalt-paver-hopper-closeup.webp" data-category="equipment" data-caption="Asphalt Paver Hopper Closeup" aria-label="View Photo: Asphalt Paver Hopper Closeup">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-asphalt-paver-hopper-closeup.webp" width="667" height="1000" alt="Asphalt Paver Hopper Closeup" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-asphalt-paver-laying-new-road-surface.webp" data-category="paving" data-caption="Asphalt Paver Laying New Road Surface" aria-label="View Photo: Asphalt Paver Laying New Road Surface">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-asphalt-paver-laying-new-road-surface.webp" width="800" height="533" alt="Asphalt Paver Laying New Road Surface" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-asphalt-paver-operator-and-crew.webp" data-category="crew" data-caption="Asphalt Paver Operator And Crew" aria-label="View Photo: Asphalt Paver Operator And Crew">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-asphalt-paver-operator-and-crew.webp" width="667" height="1000" alt="Asphalt Paver Operator And Crew" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-asphalt-paver-operator-and-screed-worker.webp" data-category="crew" data-caption="Asphalt Paver Operator And Screed Worker" aria-label="View Photo: Asphalt Paver Operator And Screed Worker">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-asphalt-paver-operator-and-screed-worker.webp" width="667" height="1000" alt="Asphalt Paver Operator And Screed Worker" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-asphalt-paver-screed-and-operator-platform.webp" data-category="equipment" data-caption="Asphalt Paver Screed And Operator Platform" aria-label="View Photo: Asphalt Paver Screed And Operator Platform">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-asphalt-paver-screed-and-operator-platform.webp" width="667" height="1000" alt="Asphalt Paver Screed And Operator Platform" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-asphalt-paving-crew-working-beside-sidewalk.webp" data-category="crew" data-caption="Asphalt Paving Crew Working Beside Sidewalk" aria-label="View Photo: Asphalt Paving Crew Working Beside Sidewalk">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-asphalt-paving-crew-working-beside-sidewalk.webp" width="667" height="1000" alt="Asphalt Paving Crew Working Beside Sidewalk" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-asphalt-paving-machine-and-ground-crew.webp" data-category="crew" data-caption="Asphalt Paving Machine And Ground Crew" aria-label="View Photo: Asphalt Paving Machine And Ground Crew">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-asphalt-paving-machine-and-ground-crew.webp" width="667" height="1000" alt="Asphalt Paving Machine And Ground Crew" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-asphalt-paving-machine-and-jobsite-crew.webp" data-category="crew" data-caption="Asphalt Paving Machine And Jobsite Crew" aria-label="View Photo: Asphalt Paving Machine And Jobsite Crew">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-asphalt-paving-machine-and-jobsite-crew.webp" width="800" height="533" alt="Asphalt Paving Machine And Jobsite Crew" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-asphalt-paving-machine-on-road.webp" data-category="equipment" data-caption="Asphalt Paving Machine On Road" aria-label="View Photo: Asphalt Paving Machine On Road">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-asphalt-paving-machine-on-road.webp" width="667" height="1000" alt="Asphalt Paving Machine On Road" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-asphalt-paving-machine-rear-screed-view.webp" data-category="equipment" data-caption="Asphalt Paving Machine Rear Screed View" aria-label="View Photo: Asphalt Paving Machine Rear Screed View">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-asphalt-paving-machine-rear-screed-view.webp" width="800" height="533" alt="Asphalt Paving Machine Rear Screed View" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-asphalt-paving-worker-in-bowman-company-shirt.webp" data-category="crew" data-caption="Asphalt Paving Worker In Bowman Company Shirt" aria-label="View Photo: Asphalt Paving Worker In Bowman Company Shirt">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-asphalt-paving-worker-in-bowman-company-shirt.webp" width="800" height="533" alt="Asphalt Paving Worker In Bowman Company Shirt" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-asphalt-roller-compacting-curved-road-edge.webp" data-category="compaction" data-caption="Asphalt Roller Compacting Curved Road Edge" aria-label="View Photo: Asphalt Roller Compacting Curved Road Edge">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-asphalt-roller-compacting-curved-road-edge.webp" width="800" height="1000" alt="Asphalt Roller Compacting Curved Road Edge" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-asphalt-roller-compacting-roadside-pavement.webp" data-category="compaction" data-caption="Asphalt Roller Compacting Roadside Pavement" aria-label="View Photo: Asphalt Roller Compacting Roadside Pavement">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-asphalt-roller-compacting-roadside-pavement.webp" width="800" height="1000" alt="Asphalt Roller Compacting Roadside Pavement" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-bowman-asphalt-paving-worker-with-hand-tool.webp" data-category="crew" data-caption="Bowman Asphalt Paving Worker With Hand Tool" aria-label="View Photo: Bowman Asphalt Paving Worker With Hand Tool">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-bowman-asphalt-paving-worker-with-hand-tool.webp" width="800" height="533" alt="Bowman Asphalt Paving Worker With Hand Tool" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-crew-distributing-asphalt-with-hand-rakes.webp" data-category="crew" data-caption="Crew Distributing Asphalt With Hand Rakes" aria-label="View Photo: Crew Distributing Asphalt With Hand Rakes">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-crew-distributing-asphalt-with-hand-rakes.webp" width="800" height="533" alt="Crew Distributing Asphalt With Hand Rakes" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-crew-finishing-asphalt-behind-paving-machine.webp" data-category="crew" data-caption="Crew Finishing Asphalt Behind Paving Machine" aria-label="View Photo: Crew Finishing Asphalt Behind Paving Machine">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-crew-finishing-asphalt-behind-paving-machine.webp" width="800" height="533" alt="Crew Finishing Asphalt Behind Paving Machine" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-crew-hand-raking-and-shoveling-asphalt.webp" data-category="crew" data-caption="Crew Hand Raking And Shoveling Asphalt" aria-label="View Photo: Crew Hand Raking And Shoveling Asphalt">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-crew-hand-raking-and-shoveling-asphalt.webp" width="800" height="533" alt="Crew Hand Raking And Shoveling Asphalt" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-crew-operating-paver-during-asphalt-delivery.webp" data-category="crew" data-caption="Crew Operating Paver During Asphalt Delivery" aria-label="View Photo: Crew Operating Paver During Asphalt Delivery">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-crew-operating-paver-during-asphalt-delivery.webp" width="800" height="533" alt="Crew Operating Paver During Asphalt Delivery" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-crew-raking-asphalt-along-concrete-curb.webp" data-category="crew" data-caption="Crew Raking Asphalt Along Concrete Curb" aria-label="View Photo: Crew Raking Asphalt Along Concrete Curb">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-crew-raking-asphalt-along-concrete-curb.webp" width="800" height="533" alt="Crew Raking Asphalt Along Concrete Curb" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-crew-raking-asphalt-behind-paver.webp" data-category="crew" data-caption="Crew Raking Asphalt Behind Paver" aria-label="View Photo: Crew Raking Asphalt Behind Paver">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-crew-raking-asphalt-behind-paver.webp" width="800" height="533" alt="Crew Raking Asphalt Behind Paver" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-crew-spreading-asphalt-behind-paver-and-truck.webp" data-category="crew" data-caption="Crew Spreading Asphalt Behind Paver And Truck" aria-label="View Photo: Crew Spreading Asphalt Behind Paver And Truck">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-crew-spreading-asphalt-behind-paver-and-truck.webp" width="667" height="1000" alt="Crew Spreading Asphalt Behind Paver And Truck" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-crew-spreading-asphalt-beside-paver.webp" data-category="crew" data-caption="Crew Spreading Asphalt Beside Paver" aria-label="View Photo: Crew Spreading Asphalt Beside Paver">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-crew-spreading-asphalt-beside-paver.webp" width="800" height="533" alt="Crew Spreading Asphalt Beside Paver" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-dump-truck-delivering-asphalt-to-paver.webp" data-category="equipment" data-caption="Dump Truck Delivering Asphalt To Paver" aria-label="View Photo: Dump Truck Delivering Asphalt To Paver">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-dump-truck-delivering-asphalt-to-paver.webp" width="800" height="533" alt="Dump Truck Delivering Asphalt To Paver" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-dump-truck-feeding-asphalt-paver.webp" data-category="equipment" data-caption="Dump Truck Feeding Asphalt Paver" aria-label="View Photo: Dump Truck Feeding Asphalt Paver">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-dump-truck-feeding-asphalt-paver.webp" width="800" height="533" alt="Dump Truck Feeding Asphalt Paver" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-leeboy-asphalt-paver-on-jobsite.webp" data-category="equipment" data-caption="Leeboy Asphalt Paver On Jobsite" aria-label="View Photo: Leeboy Asphalt Paver On Jobsite">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-leeboy-asphalt-paver-on-jobsite.webp" width="667" height="1000" alt="Leeboy Asphalt Paver On Jobsite" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-leeboy-asphalt-paver-operators-at-controls.webp" data-category="crew" data-caption="Leeboy Asphalt Paver Operators At Controls" aria-label="View Photo: Leeboy Asphalt Paver Operators At Controls">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-leeboy-asphalt-paver-operators-at-controls.webp" width="800" height="533" alt="Leeboy Asphalt Paver Operators At Controls" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-operator-driving-asphalt-paving-machine.webp" data-category="paving" data-caption="Operator Driving Asphalt Paving Machine" aria-label="View Photo: Operator Driving Asphalt Paving Machine">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-operator-driving-asphalt-paving-machine.webp" width="800" height="533" alt="Operator Driving Asphalt Paving Machine" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-operators-adjusting-asphalt-paver-controls.webp" data-category="crew" data-caption="Operators Adjusting Asphalt Paver Controls" aria-label="View Photo: Operators Adjusting Asphalt Paver Controls">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-operators-adjusting-asphalt-paver-controls.webp" width="800" height="533" alt="Operators Adjusting Asphalt Paver Controls" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-operators-on-asphalt-paver-rear-platform.webp" data-category="crew" data-caption="Operators On Asphalt Paver Rear Platform" aria-label="View Photo: Operators On Asphalt Paver Rear Platform">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-operators-on-asphalt-paver-rear-platform.webp" width="800" height="533" alt="Operators On Asphalt Paver Rear Platform" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-paving-crew-finishing-asphalt-along-curb.webp" data-category="crew" data-caption="Paving Crew Finishing Asphalt Along Curb" aria-label="View Photo: Paving Crew Finishing Asphalt Along Curb">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-paving-crew-finishing-asphalt-along-curb.webp" width="800" height="533" alt="Paving Crew Finishing Asphalt Along Curb" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-paving-crew-operating-leeboy-asphalt-paver.webp" data-category="crew" data-caption="Paving Crew Operating Leeboy Asphalt Paver" aria-label="View Photo: Paving Crew Operating Leeboy Asphalt Paver">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-paving-crew-operating-leeboy-asphalt-paver.webp" width="800" height="533" alt="Paving Crew Operating Leeboy Asphalt Paver" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-paving-workers-raking-asphalt-near-curb.webp" data-category="crew" data-caption="Paving Workers Raking Asphalt Near Curb" aria-label="View Photo: Paving Workers Raking Asphalt Near Curb">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-paving-workers-raking-asphalt-near-curb.webp" width="667" height="1000" alt="Paving Workers Raking Asphalt Near Curb" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-pneumatic-and-steel-drum-rollers-compacting-asphalt.webp" data-category="compaction" data-caption="Pneumatic And Steel Drum Rollers Compacting Asphalt" aria-label="View Photo: Pneumatic And Steel Drum Rollers Compacting Asphalt">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-pneumatic-and-steel-drum-rollers-compacting-asphalt.webp" width="800" height="533" alt="Pneumatic And Steel Drum Rollers Compacting Asphalt" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-pneumatic-roller-tires-compacting-road-surface.webp" data-category="compaction" data-caption="Pneumatic Roller Tires Compacting Road Surface" aria-label="View Photo: Pneumatic Roller Tires Compacting Road Surface">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-pneumatic-roller-tires-compacting-road-surface.webp" width="800" height="533" alt="Pneumatic Roller Tires Compacting Road Surface" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-pneumatic-tire-roller-compacting-asphalt-road.webp" data-category="compaction" data-caption="Pneumatic Tire Roller Compacting Asphalt Road" aria-label="View Photo: Pneumatic Tire Roller Compacting Asphalt Road">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-pneumatic-tire-roller-compacting-asphalt-road.webp" width="800" height="533" alt="Pneumatic Tire Roller Compacting Asphalt Road" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-pneumatic-tire-roller-on-fresh-asphalt.webp" data-category="compaction" data-caption="Pneumatic Tire Roller On Fresh Asphalt" aria-label="View Photo: Pneumatic Tire Roller On Fresh Asphalt">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-pneumatic-tire-roller-on-fresh-asphalt.webp" width="800" height="533" alt="Pneumatic Tire Roller On Fresh Asphalt" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-road-paving-crew-on-fresh-asphalt.webp" data-category="crew" data-caption="Road Paving Crew On Fresh Asphalt" aria-label="View Photo: Road Paving Crew On Fresh Asphalt">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-road-paving-crew-on-fresh-asphalt.webp" width="667" height="1000" alt="Road Paving Crew On Fresh Asphalt" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-road-paving-crew-operating-asphalt-paver.webp" data-category="crew" data-caption="Road Paving Crew Operating Asphalt Paver" aria-label="View Photo: Road Paving Crew Operating Asphalt Paver">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-road-paving-crew-operating-asphalt-paver.webp" width="800" height="533" alt="Road Paving Crew Operating Asphalt Paver" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-roller-compacting-asphalt-across-roadway.webp" data-category="compaction" data-caption="Roller Compacting Asphalt Across Roadway" aria-label="View Photo: Roller Compacting Asphalt Across Roadway">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-roller-compacting-asphalt-across-roadway.webp" width="800" height="533" alt="Roller Compacting Asphalt Across Roadway" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-roller-operator-compacting-asphalt-near-curb.webp" data-category="compaction" data-caption="Roller Operator Compacting Asphalt Near Curb" aria-label="View Photo: Roller Operator Compacting Asphalt Near Curb">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-roller-operator-compacting-asphalt-near-curb.webp" width="667" height="1000" alt="Roller Operator Compacting Asphalt Near Curb" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-roller-operator-compacting-fresh-road-surface.webp" data-category="compaction" data-caption="Roller Operator Compacting Fresh Road Surface" aria-label="View Photo: Roller Operator Compacting Fresh Road Surface">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-roller-operator-compacting-fresh-road-surface.webp" width="800" height="1000" alt="Roller Operator Compacting Fresh Road Surface" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-steel-drum-roller-compacting-fresh-pavement.webp" data-category="compaction" data-caption="Steel Drum Roller Compacting Fresh Pavement" aria-label="View Photo: Steel Drum Roller Compacting Fresh Pavement">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-steel-drum-roller-compacting-fresh-pavement.webp" width="800" height="533" alt="Steel Drum Roller Compacting Fresh Pavement" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-tandem-drum-roller-compacting-fresh-asphalt.webp" data-category="compaction" data-caption="Tandem Drum Roller Compacting Fresh Asphalt" aria-label="View Photo: Tandem Drum Roller Compacting Fresh Asphalt">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-tandem-drum-roller-compacting-fresh-asphalt.webp" width="667" height="1000" alt="Tandem Drum Roller Compacting Fresh Asphalt" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-tandem-roller-compacting-asphalt-with-water-spray.webp" data-category="compaction" data-caption="Tandem Roller Compacting Asphalt With Water Spray" aria-label="View Photo: Tandem Roller Compacting Asphalt With Water Spray">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-tandem-roller-compacting-asphalt-with-water-spray.webp" width="800" height="1000" alt="Tandem Roller Compacting Asphalt With Water Spray" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-tandem-roller-compacting-new-road-pavement.webp" data-category="compaction" data-caption="Tandem Roller Compacting New Road Pavement" aria-label="View Photo: Tandem Roller Compacting New Road Pavement">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-tandem-roller-compacting-new-road-pavement.webp" width="800" height="533" alt="Tandem Roller Compacting New Road Pavement" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-tandem-roller-compacting-road-edge.webp" data-category="compaction" data-caption="Tandem Roller Compacting Road Edge" aria-label="View Photo: Tandem Roller Compacting Road Edge">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-tandem-roller-compacting-road-edge.webp" width="667" height="1000" alt="Tandem Roller Compacting Road Edge" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-water-tanker-truck-on-asphalt-road.webp" data-category="equipment" data-caption="Water Tanker Truck On Asphalt Road" aria-label="View Photo: Water Tanker Truck On Asphalt Road">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-water-tanker-truck-on-asphalt-road.webp" width="667" height="1000" alt="Water Tanker Truck On Asphalt Road" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-water-truck-at-road-paving-jobsite.webp" data-category="equipment" data-caption="Water Truck At Road Paving Jobsite" aria-label="View Photo: Water Truck At Road Paving Jobsite">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-water-truck-at-road-paving-jobsite.webp" width="667" height="1000" alt="Water Truck At Road Paving Jobsite" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-worker-hand-raking-hot-asphalt-at-screed.webp" data-category="crew" data-caption="Worker Hand Raking Hot Asphalt At Screed" aria-label="View Photo: Worker Hand Raking Hot Asphalt At Screed">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-worker-hand-raking-hot-asphalt-at-screed.webp" width="800" height="533" alt="Worker Hand Raking Hot Asphalt At Screed" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-worker-leveling-asphalt-behind-paver-screed.webp" data-category="crew" data-caption="Worker Leveling Asphalt Behind Paver Screed" aria-label="View Photo: Worker Leveling Asphalt Behind Paver Screed">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-worker-leveling-asphalt-behind-paver-screed.webp" width="800" height="533" alt="Worker Leveling Asphalt Behind Paver Screed" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-worker-raking-asphalt-beside-dump-truck.webp" data-category="crew" data-caption="Worker Raking Asphalt Beside Dump Truck" aria-label="View Photo: Worker Raking Asphalt Beside Dump Truck">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-worker-raking-asphalt-beside-dump-truck.webp" width="800" height="533" alt="Worker Raking Asphalt Beside Dump Truck" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-worker-shoveling-asphalt-along-curb.webp" data-category="crew" data-caption="Worker Shoveling Asphalt Along Curb" aria-label="View Photo: Worker Shoveling Asphalt Along Curb">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-worker-shoveling-asphalt-along-curb.webp" width="800" height="533" alt="Worker Shoveling Asphalt Along Curb" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-worker-spreading-asphalt-with-paving-lute.webp" data-category="crew" data-caption="Worker Spreading Asphalt With Paving Lute" aria-label="View Photo: Worker Spreading Asphalt With Paving Lute">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-worker-spreading-asphalt-with-paving-lute.webp" width="800" height="533" alt="Worker Spreading Asphalt With Paving Lute" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-workers-hand-finishing-new-asphalt-road.webp" data-category="crew" data-caption="Workers Hand Finishing New Asphalt Road" aria-label="View Photo: Workers Hand Finishing New Asphalt Road">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-workers-hand-finishing-new-asphalt-road.webp" width="800" height="533" alt="Workers Hand Finishing New Asphalt Road" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-workers-leveling-asphalt-along-road-edge.webp" data-category="crew" data-caption="Workers Leveling Asphalt Along Road Edge" aria-label="View Photo: Workers Leveling Asphalt Along Road Edge">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-workers-leveling-asphalt-along-road-edge.webp" width="667" height="1000" alt="Workers Leveling Asphalt Along Road Edge" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-workers-raking-asphalt-behind-leeboy-paver.webp" data-category="crew" data-caption="Workers Raking Asphalt Behind Leeboy Paver" aria-label="View Photo: Workers Raking Asphalt Behind Leeboy Paver">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-workers-raking-asphalt-behind-leeboy-paver.webp" width="800" height="533" alt="Workers Raking Asphalt Behind Leeboy Paver" loading="lazy" /></div>
        </a>
        <a className="gallery-card reveal" href="/assets/photos/bowman-construction-workers-using-asphalt-lutes-to-level-pavement.webp" data-category="crew" data-caption="Workers Using Asphalt Lutes To Level Pavement" aria-label="View Photo: Workers Using Asphalt Lutes To Level Pavement">
          <div className="image-wrap"><img src="/assets/thumbs/bowman-construction-workers-using-asphalt-lutes-to-level-pavement.webp" width="800" height="533" alt="Workers Using Asphalt Lutes To Level Pavement" loading="lazy" /></div>
        </a>
      </div>
    </div>
    <section className="gallery-cta frame" aria-labelledby="work-cta-title"><h2 id="work-cta-title">Your Project.<br />Our Next Job.</h2><Link className="button button-primary" href="/contact">Let’s Talk About Your Project</Link></section>
  </main><dialog className="photo-dialog" aria-label="Jobsite Photo Viewer">
    <div className="dialog-toolbar"><p>Bowman Jobsite Photography</p><button className="dialog-close" aria-label="Close Photo Viewer">Close ×</button></div>
    <img className="dialog-image" alt="" />
    <div className="dialog-controls"><button data-prev="" aria-label="Previous Photo">Previous</button><p className="dialog-caption"></p><button data-next="" aria-label="Next Photo">Next</button></div>
  </dialog>
    <SiteFooter currentPath="/work" />
    <StructuredData path="/work" title="Asphalt Paving Project Photos | Bowman Construction" description="Explore Bowman Construction’s Asphalt Paving, Compaction, And Hand-Finishing Photos. See The Family Crew And Equipment At Work." />
    <Interactions />
  </div>);
}
