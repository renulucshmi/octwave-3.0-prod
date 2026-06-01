import Button from "../components/Button";
import Countdown from "../components/Countdown";

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="text-xs text-purple-300 mb-4">IEEE IAS · University of Moratuwa</div>

      <h1 className="text-5xl font-grotesk font-bold text-white leading-tight">
        Where Data <br />
        <span className="text-transparent stroke text-purple-400">Meets</span> <br />
        Intelligence
      </h1>

      <p className="text-slate-400 max-w-xl mt-6">
        Sri Lanka’s AI & ML competition for undergraduates.
      </p>

      <div className="flex gap-3 mt-8">
        <Button>Register Team</Button>
        <Button variant="outline">Explore</Button>
      </div>

      <div className="mt-10">
        <Countdown />
      </div>
    </section>
  );
}