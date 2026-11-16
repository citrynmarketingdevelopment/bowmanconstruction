import Link from 'next/link';
export default function SiteFooter({ currentPath }) { return (
<footer className="site-footer frame">
    <div className="footer-columns">
      <div className="footer-brand-column">
        <Link className="brand" href="/" aria-current={currentPath === "/" ? "page" : undefined} aria-label="Bowman Construction Home"><img src="/assets/bowman-logo-reversed.svg" width="64" height="64" alt="" /><span className="brand-name">Bowman<span>Construction LLC</span></span></Link>
        <p>A Family Name Behind Every Job.<br />Grading, Paving, Concrete, And Care For The Surface.</p>
      </div>
      <nav className="footer-column" aria-label="Explore Bowman">
        <h2>Explore</h2>
        <Link href="/" aria-current={currentPath === "/" ? "page" : undefined}>Home</Link><Link href="/services" aria-current={currentPath === "/services" ? "page" : undefined}>Services</Link><Link href="/work" aria-current={currentPath === "/work" ? "page" : undefined}>Our Work</Link><Link href="/our-story" aria-current={currentPath === "/our-story" ? "page" : undefined}>Our Story</Link><Link href="/#questions">Questions</Link><Link href="/contact" aria-current={currentPath === "/contact" ? "page" : undefined}>Contact</Link>
      </nav>
      <nav className="footer-column" aria-label="Construction Services">
        <h2>Our Services</h2>
        <Link href="/services#grading">Grading</Link><Link href="/services#paving-concrete">Paving &amp; Concrete</Link><Link href="/services#asphalt-maintenance">Asphalt Maintenance</Link><Link href="/services#seal-coating-striping">Seal Coating &amp; Striping</Link>
      </nav>
      <div className="footer-column footer-contact">
        <h2>Let’s Talk</h2>
        <a href="tel:+16613617840">(661) 361-7840</a>
        <p>Tell Us About Your Project.<br />We’ll Discuss The Next Steps.</p>
        <p>California Contractor<br />License #988135</p>
      </div>
    </div>
    <div className="footer-bottom"><span>© <span>{new Date().getFullYear()}</span> Bowman Construction LLC</span></div>
  </footer>
); }
