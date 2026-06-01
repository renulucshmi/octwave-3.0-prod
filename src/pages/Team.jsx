export default function Team() {
  return (
    <section id="team" className="py-24 px-6">
      <h2 className="text-3xl font-bold text-white mb-6">Team</h2>

      <div className="grid md:grid-cols-3 gap-4 text-slate-300">
        <div className="p-4 border border-purple-500/10 rounded">Chairperson</div>
        <div className="p-4 border border-purple-500/10 rounded">Co-Chairs</div>
        <div className="p-4 border border-purple-500/10 rounded">Organizers</div>
      </div>
    </section>
  );
}