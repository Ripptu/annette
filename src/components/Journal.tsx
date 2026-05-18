import { FadeUp } from "./Animations";

export default function Journal() {
  const posts = [
    {
      id: 1,
      tag: "Wissen",
      title: "Die Kraft der Ahnen: Wie wir alte Wurzeln heilen",
      excerpt: "Unsere Vorfahren hinterlassen nicht nur physische Merkmale, sondern auch energetische Abdrücke. Eine Reise zur Ahnenheilung.",
      date: "14. März 2024",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800"
    },
    {
      id: 2,
      tag: "Praxis",
      title: "Die transformative Kraft der Feuerzeremonie",
      excerpt: "Feuer transformiert schwere Energie in Licht. Erfahre, weshalb Rituale am Feuer eine so tiefgreifende Wirkung haben.",
      date: "02. Februar 2024",
      image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=800"
    },
    {
      id: 3,
      tag: "Grundlagen",
      title: "Die 4 Himmelsrichtungen im Schamanismus",
      excerpt: "Ein grundlegender Einblick in das Medizinrad und die Qualitäten von Süden, Westen, Norden und Osten.",
      date: "18. Januar 2024",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <FadeUp className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-gray-200 pb-8">
          <div>
            <div className="text-accent text-sm tracking-widest font-semibold mb-2 uppercase">
              // Journal
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-dark font-bold">Mein Blog</h2>
          </div>
          <a href="#" className="hidden md:inline-flex text-dark hover:text-accent font-semibold tracking-wide transition-colors mt-6 md:mt-0">
            Alle Beiträge lesen →
          </a>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <FadeUp key={post.id} delay={i * 0.15}>
              <a href="#" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-dark text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-sm shadow-sm">
                    {post.tag}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-muted/80 text-sm font-semibold tracking-wide mb-3">
                  <time>{post.date}</time>
                  <span className="w-1 h-1 rounded-full bg-accent"></span>
                  <span>5 Min. Lesezeit</span>
                </div>
                <h3 className="font-serif text-2xl text-dark font-bold mb-3 group-hover:text-accent transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {post.excerpt}
                </p>
              </a>
            </FadeUp>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#" className="inline-flex text-dark hover:text-accent font-semibold tracking-wide transition-colors">
            Alle Beiträge lesen →
          </a>
        </div>
      </div>
    </section>
  );
}
