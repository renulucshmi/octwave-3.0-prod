import Button from "./Button";

const links = ["home", "about", "structure", "timeline", "prizes", "team"];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 h-[60px] bg-black/40 backdrop-blur border-b border-purple-500/10">
      <div className="font-grotesk font-bold text-white">
        OCT<span className="text-purple-400">WAVE</span> 3.0
      </div>

      <div className="hidden md:flex gap-2">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l}`}
            className="text-xs text-slate-400 px-3 py-1 rounded-md hover:bg-purple-500/10 hover:text-purple-300"
          >
            {l.toUpperCase()}
          </a>
        ))}
      </div>

      <Button>Register</Button>
    </nav>
  );
}