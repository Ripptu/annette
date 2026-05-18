import { motion } from "motion/react";
import { Calendar, CheckCircle, Leaf, Users } from "lucide-react";
import { FadeUp, CountUp } from "./Animations";

export function StatsBar() {
  const stats = [
    { num: 4, prefix: "", suffix: "", label: "Himmelsrichtungen" },
    { num: 3, prefix: "", suffix: "", label: "Schamanische Welten" },
    { num: 7, prefix: "", suffix: "", label: "Chakren" },
    { num: 1, prefix: "", suffix: "", label: "Ganzheitlicher Weg" },
  ];

  return (
    <section className="bg-dark py-16 px-6 relative z-30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 lg:divide-white/10 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center pt-8 md:pt-0">
              <div className="text-4xl md:text-5xl font-serif text-accent font-bold mb-3">
                <CountUp end={stat.num} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted text-white/60 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Images */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative px-4 pb-12"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto group">
              <img 
                src="https://www.annettelachmann.earth/.cm4all/uproc.php/0/_Design/Content/content_Foto%20fu%CC%88r%20U%CC%88ber%20mich.jpg" 
                alt="Annette Lachmann" 
                className="object-cover w-full h-full rounded-[2rem] shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-[2rem] border-2 border-accent/20 scale-105 transition-transform duration-700 group-hover:scale-100" />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            <div className="text-accent text-sm tracking-widest font-semibold mb-4 uppercase flex items-center gap-2">
              <span className="w-8 h-[2px] bg-accent"></span>
              Rainbow Shaman
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-mid font-bold leading-tight mb-8">
              Chakaruna – <br />
              <span className="italic font-normal text-accent">Brückenbauerin zwischen den Welten.</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-6 max-w-xl">
              "Rainbow Shaman" ist mein Rufname auf diesem Weg. Als <strong className="font-semibold text-dark">Chakaruna</strong> (Quechua für Brückenbauerin) verwebe ich meine tiefen Wurzeln im peruanischen Schamanismus mit den kraftvollen Traditionen des Nordens, insbesondere aus Island, sowie den Wegen der Cherokee.
            </p>
            <p className="text-muted text-lg leading-relaxed mb-10 max-w-xl">
              Meine Berufung ist es, Menschen auf ihrem Weg der Heilung zu begleiten. Durch die Arbeit mit Energiemedizin können wir gemeinsam energetische Abdrücke lösen, eigene Kräfte erwecken und Heilung in die Welt tragen.
            </p>
            <a 
              href="#services" 
              className="bg-dark text-white rounded-full px-8 py-3.5 hover:bg-accent hover:text-dark transition-colors duration-300 font-medium tracking-wide flex items-center gap-3"
            >
              Meine Angebote ansehen <span className="text-xl">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const services = [
    {
      title: "Schamanische Heilung",
      img: "https://www.annettelachmann.earth/.cm4all/uproc.php/0/_Design/Content/content_Foto%20fu%CC%88r%20Schamanische%20Heilung%20Startseite_.jpg",
      desc: "Lösung von energetischen Abdrücken und Traumata zur Aktivierung der Selbstheilungskräfte."
    },
    {
      title: "Seminare & Workshops",
      img: "https://www.annettelachmann.earth/.cm4all/uproc.php/0/shamanic%20journeys/Olivia%20und%20Annette%20am%20Steg.jpeg",
      desc: "Gemeinsam auf die Reise gehen und lernen, sich mit der Quelle und Mutter Erde zu verbinden."
    },
    {
      title: "Energetische Arbeit",
      img: "https://www.annettelachmann.earth/.cm4all/uproc.php/0/_Design/Content/content_Foto%20fu%CC%88r%20Angebote.jpg",
      desc: "Harmonisierung des Energiefeldes, Räuchern und individuelle schamanische Sitzungen."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <FadeUp className="flex justify-between items-end mb-16 border-b border-gray-200 pb-8">
          <div>
            <div className="text-accent text-sm tracking-widest font-semibold mb-2 uppercase">
              // Ausgewähltes
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-mid font-bold">Meine Angebote</h2>
          </div>
          <a href="#" className="hidden md:inline-flex text-dark hover:text-accent font-semibold tracking-wide transition-colors">
            Alle Angebote →
          </a>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <FadeUp key={i} delay={i * 0.15}>
              <div className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer shadow-lg">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent transition-opacity" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-1/2">
                  <div className="text-accent text-xs tracking-widest uppercase mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Angebot
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-white font-medium mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {service.title}
                  </h3>
                  <p className="text-white/80 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 flex-grow">
                    {service.desc}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VideoBreak() {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 hidden md:block pointer-events-none">
        <iframe
          src="https://streamable.com/e/3r3zn7?autoplay=1&loop=1&muted=1"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[60vh] min-w-[177.77vw] -translate-x-1/2 -translate-y-1/2"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Background Video"
        ></iframe>
      </div>
      {/* Fallback frame/image on mobile or just standard cover */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 md:hidden"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549421263-606013a29026?w=1080&q=80')" }}
      />
      
      <div className="absolute inset-0 bg-dark/65 z-10" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-20 text-center px-6 max-w-4xl"
      >
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-medium italic leading-tight mb-8 drop-shadow-lg">
          "Fang nie an aufzuhören, hör nie auf anzufangen!"
        </h2>
        <div className="text-accent text-sm md:text-base tracking-[0.2em] font-medium uppercase">
          // Marcus Tullius Cicero
        </div>
      </motion.div>
    </section>
  );
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-[#e8e0d0] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <FadeUp className="flex justify-between items-end mb-16 relative">
          <div>
            <div className="text-accent text-sm tracking-widest font-semibold mb-2 uppercase text-mid">
              // Einblicke
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-mid font-bold relative z-10">Impressionen</h2>
          </div>
          
          <div className="absolute -top-12 -right-12 md:right-0 text-[8rem] md:text-[12rem] font-serif text-dark/5 font-black uppercase leading-none select-none pointer-events-none transform rotate-12">
            //2024
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          <FadeUp delay={0} className="lg:col-span-2 lg:row-span-2 group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg w-full h-[624px]">
            <img src="https://www.annettelachmann.earth/.cm4all/uproc.php/0/shamanic%20journeys/Olivia%20und%20Annette%20am%20Steg.jpeg" alt="Shamanic Journey" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" />
            <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/40 transition-colors duration-300" />
            <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-accent text-sm font-bold tracking-widest uppercase mb-1 block">Gemeinsam</span>
              <h3 className="font-serif text-3xl">Shamanic Journeys</h3>
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg w-full h-full">
            <img src="https://www.annettelachmann.earth/.cm4all/uproc.php/0/Annette%20Feuer1.jpg" alt="Feuer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" />
            <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/40 transition-colors duration-300" />
            <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-accent text-xs font-bold tracking-widest uppercase mb-1 block">Rituale</span>
              <h3 className="font-serif text-2xl">Feuerzeremonie</h3>
            </div>
          </FadeUp>

          <FadeUp delay={0.4} className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg w-full h-full">
            <img src="https://www.annettelachmann.earth/.cm4all/uproc.php/0/_Design/Content/content_hogar-munay-cusco-2.jpg" alt="Munay-Ki" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" />
            <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/40 transition-colors duration-300" />
            <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-accent text-xs font-bold tracking-widest uppercase mb-1 block">Cusco, Peru</span>
              <h3 className="font-serif text-2xl">Munay-Ki Home</h3>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

export function EventSection() {
  return (
    <section id="aktuelles" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <FadeUp>
          <div className="rounded-[24px] overflow-hidden shadow-2xl flex flex-col md:flex-row bg-dark">
            <div className="w-full md:w-1/2 relative h-[300px] md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80" 
                alt="Event field" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-10 lg:p-16 flex flex-col justify-center bg-dark text-white relative">
              <div className="text-accent text-sm tracking-widest font-semibold mb-6 uppercase">
                // Auszeit
              </div>
              <h3 className="font-serif text-3xl lg:text-4xl font-bold leading-tight mb-6">
                Aktuelle Termine pausiert
              </h3>
              <p className="text-white/60 mb-10 max-w-md leading-relaxed">
                Wegen Veränderung meiner Wohnsituation habe ich mir eine Auszeit genommen, um nicht nur ein neues Zuhause zu finden, sondern auch um mir Zeit zu nehmen, mein Wissen und meine Erfahrung in neue Workshops und Seminare fließen zu lassen.
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
                <a 
                  href="#cta" 
                  className="bg-accent text-dark font-bold px-8 py-3.5 rounded hover:bg-white hover:text-dark transition-colors tracking-wide flex items-center gap-2"
                >
                  In Kontakt bleiben <span className="text-xl">→</span>
                </a>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

export function BlogSection() {
  const blogs = [
    {
      img: "https://www.annettelachmann.earth/.cm4all/uproc.php/0/_Design/Content/content_Foto%20fu%CC%88r%20meinen%20Podcast.jpg",
      cat: "Podcast",
      title: "Aktiviere deine Selbstheilungskräfte",
      excerpt: "Höre dir meine neueste Podcast-Reise an, um dich wieder mit deiner inneren Stärke zu verbinden.",
      date: "Schamanische Reise",
      link: "https://www.annettelachmann.earth/startseite/"
    },
    {
      img: "https://www.annettelachmann.earth/.cm4all/uproc.php/0/_Design/Content/content_hogar-munay-cusco-2.jpg",
      cat: "Projekt",
      title: "Verein Wohnheim Munay-Ki Home",
      excerpt: "Ein Projekt in Cusco/Peru, wo minderjährige Opfer von Gewalt eine sichere Zuflucht finden, das mir sehr am Herzen liegt.",
      date: "Cusco, Peru",
      link: "https://munay-ki-home.org/en/home"
    }
  ];

  return (
    <section id="insights" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <FadeUp className="flex justify-between items-end mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-mid font-bold">Schamanische Tools <br/>& Insights</h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={blog.img} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white text-dark text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-sm shadow">
                    {blog.cat}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-serif text-2xl text-dark font-bold mb-3 group-hover:text-mid transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-6 flex-grow">
                    {blog.excerpt}
                  </p>
                  <div className="flex justify-between items-center border-t border-gray-100 pt-6 mt-auto">
                    <span className="text-sm font-semibold tracking-wide text-muted/60">{blog.date}</span>
                    <a href={blog.link} target="_blank" rel="noreferrer" className="text-mid font-bold text-sm tracking-wide hover:text-accent transition-colors">
                      Mehr erfahren →
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const cards = [
    {
      icon: <CheckCircle size={32} className="text-accent mb-6" />,
      title: "Energetische Abdrücke",
      desc: "Auflösen von Mustern und Programmierungen im Energiefeld."
    },
    {
      icon: <Leaf size={32} className="text-accent mb-6" />,
      title: "Schamanische Wege",
      desc: "Mit schamanischer Energiemedizin zurück in die persönliche Kraft finden."
    },
    {
      icon: <Users size={32} className="text-accent mb-6" />,
      title: "Begleitung in Gemeinschaft",
      desc: "Zusammenkommen in Feuerzeremonien und Workshops auf dem Rainbow Shaman Path."
    }
  ];

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <FadeUp className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold leading-tight">
            Mein Ansatz auf dem Weg <br/> der Heilung
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <FadeUp key={i} delay={i * 0.15}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-10 hover:bg-white/10 hover:border-accent/40 transition-all duration-300 hover:-translate-y-2 group shadow-2xl backdrop-blur-sm">
                <div className="transform group-hover:scale-110 transition-transform duration-300 origin-left">
                  {card.icon}
                </div>
                <h3 className="font-serif text-2xl text-white font-medium mb-4">{card.title}</h3>
                <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                  {card.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section id="cta" className="relative py-32 bg-dark flex flex-col items-center justify-center overflow-hidden">
      {/* Background blend */}
      <img 
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80" 
        alt="Nature background" 
        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent" />

      {/* Floating Leafs using generic simple icons/CSS floating */}
      <Leaf className="absolute top-[20%] left-[15%] text-accent/20 animate-float" size={64} style={{ animationDelay: "0s" }} />
      <Leaf className="absolute bottom-[20%] right-[15%] text-accent/20 animate-float" size={80} style={{ animationDelay: "2s", transform: "scaleX(-1)" }} />
      <Leaf className="absolute top-[40%] right-[30%] text-gold/20 animate-float" size={48} style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeUp>
          <h2 className="font-serif text-5xl md:text-7xl text-white font-bold mb-8">
            Bleiben wir in <span className="italic text-accent font-normal drop-shadow-xl">Verbindung</span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Wenn Ihr weiterhin informiert bleiben möchtet, schreibt mir gern eine Mail oder schaut hier auf die Seite.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="mailto:kontakt@annettelachmann.earth" className="bg-accent text-dark font-bold text-lg px-10 py-4 rounded-full hover:bg-gold transition-colors tracking-wide shadow-lg shadow-accent/20 w-full sm:w-auto">
              E-Mail schreiben
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
