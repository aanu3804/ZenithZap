import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (id) => {
    if (location.pathname !== "/") {
      // Navigate to home first
      navigate("/");
      // Delay to allow Home to load, then scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left Column */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
            <li><Link to="/products" className="hover:text-yellow-300">Products</Link></li>
            <li><Link to="/blog" className="hover:text-yellow-300">Blog</Link></li>
            <li><Link to="/whatsapp" className="hover:text-yellow-300">WhatsApp</Link></li>
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h4 className="font-semibold mb-3">Explore More</h4>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => handleScrollTo("our-story")} className="hover:text-yellow-300">Our Story</button></li>
            <li><button onClick={() => handleScrollTo("about-company")} className="hover:text-yellow-300">About</button></li>
            <li><button onClick={() => handleScrollTo("team-section")} className="hover:text-yellow-300">Team</button></li>
          </ul>
        </div>

        {/* Bottom Copyright */}
        <div className="md:col-span-3 text-center text-sm text-gray-200 mt-6">
          © {new Date().getFullYear()} Zenith Zap. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
