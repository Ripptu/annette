import { FadeUp } from "./Animations";
import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white/40 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <FadeUp>
          <div className="bg-dark text-white rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Soft glowing orb in background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-16 flex flex-col justify-center relative z-10">
                <div className="inline-flex items-center gap-3 mb-6 bg-white/5 border border-white/10 w-fit px-4 py-2 rounded-full">
                  <Mail size={16} className="text-accent" />
                  <span className="text-xs font-semibold tracking-widest uppercase text-white/80">Newsletter</span>
                </div>
                
                <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Neuigkeiten auf dem <br/>
                  <span className="italic text-accent font-normal">Rainbow Path</span>
                </h2>
                
                <p className="text-white/60 text-lg mb-10 max-w-md leading-relaxed">
                  Trage dich ein, um Termine für neue Seminare, schamanische Weisheiten und exklusive Einblicke direkt in dein Postfach zu erhalten.
                </p>

                <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex-grow">
                    <label htmlFor="email" className="sr-only">E-Mail Adresse</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Deine E-Mail Adresse"
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-accent text-dark font-bold px-8 py-4 rounded-xl hover:bg-gold transition-colors whitespace-nowrap tracking-wide"
                  >
                    Abonnieren
                  </button>
                </form>
                <p className="text-white/40 text-xs mt-4">
                  Mit der Anmeldung akzeptierst du die <a href="#" className="underline hover:text-white transition-colors">Datenschutzerklärung</a>. Abmeldung jederzeit möglich.
                </p>
              </div>

              {/* Minimal Image Side */}
              <div className="relative hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000" 
                  alt="Nature detail" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/40 to-transparent" />
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
