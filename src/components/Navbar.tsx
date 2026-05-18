import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-dark/95 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex-shrink-0 flex items-center gap-4">
          <img src="https://s1.directupload.eu/images/260518/xo6y4a25.webp" alt="Annette Lachmann - Rainbow Shaman Logo" className="h-10 w-auto" />
          <span className="font-serif text-2xl font-bold text-white tracking-widest uppercase">
            Rainbow <span className="text-accent italic lowercase">Shaman</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest text-white/90">
          <a href="#about" className="hover:text-accent transition-colors">Über mich</a>
          <a href="#services" className="hover:text-accent transition-colors">Angebote</a>
          <a href="#aktuelles" className="hover:text-accent transition-colors">Aktuelles</a>
          <a href="#insights" className="hover:text-accent transition-colors">Insights</a>
          <a href="#blog" className="hover:text-accent transition-colors">Blog</a>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#cta"
            className="bg-accent text-dark font-bold px-6 py-2.5 rounded hover:bg-gold hover:text-dark transition-colors duration-300 tracking-wide text-sm uppercase"
          >
            Kontakt
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark border-t border-white/10 shadow-xl">
          <div className="flex flex-col px-6 py-4 space-y-4 shadow-inner">
            <a href="#about" onClick={() => setMobileOpen(false)} className="text-white hover:text-accent tracking-widest">Über mich</a>
            <a href="#services" onClick={() => setMobileOpen(false)} className="text-white hover:text-accent tracking-widest">Angebote</a>
            <a href="#aktuelles" onClick={() => setMobileOpen(false)} className="text-white hover:text-accent tracking-widest">Aktuelles</a>
            <a href="#insights" onClick={() => setMobileOpen(false)} className="text-white hover:text-accent tracking-widest">Insights</a>
            <a href="#blog" onClick={() => setMobileOpen(false)} className="text-white hover:text-accent tracking-widest">Blog</a>
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="bg-accent text-dark font-bold text-center px-6 py-3 rounded mt-4"
            >
              Kontakt
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
