import Link from 'next/link';
export default function NotFound() {
  return <main id="main" className="frame section">
    <h1>Page Not Found.</h1>
    <p>Explore Bowman Construction’s services and work, or contact our family crew.</p>
    <Link className="button button-primary" href="/">Back To Home</Link>
  </main>;
}
