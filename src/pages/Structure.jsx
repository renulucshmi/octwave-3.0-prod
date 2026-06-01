export default function Structure() {
  const steps = [
    "Intro session",
    "Workshops",
    "Online Kaggle round",
    "Final stage at UOM",
  ];

  return (
    <section id="structure" className="py-24 px-6">
      <h2 className="text-3xl font-bold text-white mb-6">Structure</h2>

      <div className="space-y-3">
        {steps.map((s, i) => (
          <div key={s} className="p-4 border border-purple-500/10 rounded-lg bg-white/5">
            <span className="text-purple-300 font-bold mr-2">{i + 1}</span>
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}