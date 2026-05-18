import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-dark">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://cdn.pixabay.com/video/2025/01/22/254016_large.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to top, rgba(13,31,14,0.95) 0%, rgba(13,31,14,0.45) 60%, transparent 100%)"
        }}
      />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-end h-full container mx-auto px-6 lg:px-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-end">
          
          {/* Left Column */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-accent text-sm md:text-base tracking-[0.2em] font-semibold mb-4 uppercase"
            >
              // Schamanische Energiemedizin
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="font-serif font-black text-white leading-[0.95]"
              style={{ fontSize: "clamp(4rem, 8vw, 7rem)" }}
            >
              Annette<br />Lachmann
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              className="text-accent font-serif text-3xl mt-4 italic drop-shadow-md"
            >
              Rainbow Shaman
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="text-white/80 font-sans text-xl mt-2 tracking-wide"
            >
              Chakaruna – Brückenbauerin zwischen den Welten
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col lg:items-end lg:text-right">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.55 }}
              className="mb-8"
            >
              <p className="text-white/90 font-serif italic text-2xl max-w-lg mb-3">
                "Wie du beginnst auf dem Weg hinaus zu laufen, erscheint der Weg."
              </p>
              <p className="text-white/50 text-sm uppercase tracking-[0.3em] font-semibold">— Rumi</p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.65 }}
              className="text-white/75 text-base md:text-lg max-w-lg mb-10 mt-2 leading-relaxed"
            >
              Als Chakaruna verbinde ich die Weisheit der Anden Perus mit traditionellem Wissen des Nordens und der Cherokee. Erwecke deine eigenen Heilerkräfte durch schamanische Energiemedizin.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              className="flex flex-wrap gap-4 lg:justify-end"
            >
              <a href="#services" className="bg-gold text-dark font-bold px-8 py-3 rounded-full shadow-xl tracking-wide flex items-center border border-gold/50 hover:bg-white hover:text-dark transition-colors">
                Energie<span className="font-normal ml-2 text-xs opacity-75 uppercase">Medizin</span>
              </a>
              <a href="#aktuelles" className="bg-white/10 backdrop-blur-md text-white font-bold px-8 py-3 rounded-full border border-white/20 shadow-xl flex items-center tracking-wide hover:bg-white/20 transition-colors">
                Seminare &<span className="font-normal ml-2 text-xs opacity-75 uppercase">Retreats</span>
              </a>
            </motion.div>
          </div>
          
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pb-8">
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent animate-pulse-line" />
      </div>
    </section>
  );
}
