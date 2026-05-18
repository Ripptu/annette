import { Facebook, Twitter, Instagram, Linkedin, Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-24 pb-8 overflow-hidden relative border-t-[6px] border-accent">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          
          {/* Col 1 */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-6">
              <img src="https://s1.directupload.eu/images/260518/xo6y4a25.webp" alt="Annette Lachmann Logo" className="h-16 w-auto" />
            </a>
            <p className="text-white/60 leading-relaxed mb-8 max-w-sm">
              Rainbow Shaman • Heilung, Zusammenkunft und Energetische Medizin. 
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-dark transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-dark transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col">
            <h4 className="font-serif tracking-widest text-lg font-bold mb-6 text-white uppercase">Menü</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#about" className="hover:text-accent transition-colors">Über mich</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Angebote</a></li>
              <li><a href="#portfolio" className="hover:text-accent transition-colors">Impressionen</a></li>
              <li><a href="#aktuelles" className="hover:text-accent transition-colors">Aktuelles</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col">
            <h4 className="font-serif tracking-widest text-lg font-bold mb-6 text-white uppercase">Rechtliches</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-accent transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Impressum</a></li>
              <li><a href="#cta" className="hover:text-accent transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col">
            <h4 className="font-serif tracking-widest text-lg font-bold mb-6 text-white uppercase">Impressum</h4>
            <ul className="space-y-2 text-white/60">
              <li>Naturheilpraxis</li>
              <li>Annette Lachmann</li>
              <li>Holsteiner Chaussee 337</li>
              <li>22457 Hamburg</li>
              <li className="pt-2"><a href="mailto:annette@lachmann-co.de" className="hover:text-accent transition-colors">annette@lachmann-co.de</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col items-center">
          <div className="text-white/40 text-sm mb-12">
            &copy; {new Date().getFullYear()} Annette Lachmann. Alle Rechte vorbehalten.
          </div>
          
          <div className="w-full text-center overflow-hidden">
            <h1 
              className="font-serif font-black text-white/[0.03] uppercase tracking-tighter leading-none select-none"
              style={{ fontSize: "clamp(3rem, 10vw, 12rem)" }}
            >
              Annette Lachmann
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
}
