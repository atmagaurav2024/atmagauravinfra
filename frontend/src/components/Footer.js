import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      className="bg-zinc-950 text-white"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1706697887737-66e34286e05f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwyfHxhc3BoYWx0JTIwcm9hZCUyMHRleHR1cmV8ZW58MHx8fHwxNzc1OTMwNTAxfDA&ixlib=rb-4.1.0&q=85)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(24, 24, 27, 0.95)'
      }}
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 border-t border-zinc-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-black tracking-tighter uppercase mb-4">
              <span className="text-white">ATMAGAURAV</span>
              <span className="text-amber-500 ml-2">INFRA</span>
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Building India's infrastructure with precision, quality, and commitment to excellence.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-500 mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <Link to="/" className="block text-zinc-400 hover:text-amber-500 transition-colors" data-testid="footer-link-home">Home</Link>
              <Link to="/about" className="block text-zinc-400 hover:text-amber-500 transition-colors" data-testid="footer-link-about">About Us</Link>
              <Link to="/services" className="block text-zinc-400 hover:text-amber-500 transition-colors" data-testid="footer-link-services">Services</Link>
              <Link to="/projects" className="block text-zinc-400 hover:text-amber-500 transition-colors" data-testid="footer-link-projects">Projects</Link>
              <Link to="/contact" className="block text-zinc-400 hover:text-amber-500 transition-colors" data-testid="footer-link-contact">Contact</Link>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-500 mb-4">CONTACT INFO</h4>
            <ul className="space-y-2 text-zinc-400">
              <li data-testid="footer-address">Pune, Maharashtra, India</li>
              <li data-testid="footer-phone">+91 98765 43210</li>
              <li data-testid="footer-email">info@atmagauravinfra.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-700 text-center text-zinc-500 text-sm">
          <p data-testid="footer-copyright">© {new Date().getFullYear()} Atmagaurav Infra Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;