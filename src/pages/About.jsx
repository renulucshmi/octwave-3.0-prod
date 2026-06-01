export default function About() {
  const cards = [
    ["Industry Learning", "Workshops with real tools"],
    ["Competition", "Kaggle + final stage"],
    ["Open", "All Sri Lankan universities"],
    ["Awards", "Certificates and recognition"],
  ];

  return (
    <section id="about" className="py-24 px-6">
      <h2 className="text-3xl font-bold text-white mb-6">About</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {cards.map(([t, d]) => (
          <div key={t} className="p-5 border border-purple-500/10 rounded-xl bg-white/5">
            <div className="text-purple-300 font-semibold">{t}</div>
            <div className="text-slate-400 text-sm mt-2">{d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}