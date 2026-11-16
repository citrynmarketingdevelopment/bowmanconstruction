import Link from 'next/link';
export default function SiteHeader({ currentPath }) { return (
<header className="site-header">
    <Link className="brand" href="/" aria-current={currentPath === "/" ? "page" : undefined} aria-label="Bowman Construction Home">
      <img src="/assets/bowman-logo-reversed.svg" width="60" height="60" alt="" />
      <span className="brand-name">Bowman<span>Construction LLC</span></span>
    </Link>
    <nav className="desktop-nav" aria-label="Main Navigation">
      <Link href="/services" aria-current={currentPath === "/services" ? "page" : undefined}>Services</Link><Link href="/work" aria-current={currentPath === "/work" ? "page" : undefined}>Our Work</Link><Link href="/our-story" aria-current={currentPath === "/our-story" ? "page" : undefined}>Our Story</Link><Link href="/contact" aria-current={currentPath === "/contact" ? "page" : undefined}>Contact</Link>
    </nav>
    <a className="header-phone" href="tel:+16613617840" aria-label="Call Bowman Construction At (661) 361-7840"><span>Call</span><span className="header-phone-number"> (661) 361-7840</span></a>
    <button className="menu-toggle" aria-expanded="false" aria-controls="mobile-nav">Menu <span className="menu-icon" aria-hidden="true"></span></button>
    <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile Navigation" hidden={true}>
      <Link href="/services" aria-current={currentPath === "/services" ? "page" : undefined}>Services</Link><Link href="/work" aria-current={currentPath === "/work" ? "page" : undefined}>Our Work</Link><Link href="/our-story" aria-current={currentPath === "/our-story" ? "page" : undefined}>Our Story</Link><Link href="/contact" aria-current={currentPath === "/contact" ? "page" : undefined}>Contact</Link><a href="tel:+16613617840">(661) 361-7840</a>
    </nav>
  </header>
); }
