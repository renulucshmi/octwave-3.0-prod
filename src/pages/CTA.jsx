import Button from "../components/Button";

export default function CTA() {
  return (
    <section className="py-24 text-center px-6">
      <h2 className="text-4xl font-bold text-white">Join OctWave 3.0</h2>
      <p className="text-slate-400 mt-3">Open registration for all undergrads</p>

      <div className="flex justify-center gap-3 mt-6">
        <Button>Register</Button>
        <Button variant="outline">Contact</Button>
      </div>
    </section>
  );
}