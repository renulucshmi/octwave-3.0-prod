import { useEffect, useState } from "react";

export default function Countdown() {
  const target = new Date("2026-08-01T00:00:00");

  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = target - new Date();
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };

    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="flex gap-6 text-center">
      {Object.entries(t).map(([k, v]) => (
        <div key={k}>
          <div className="text-2xl font-bold text-white">{String(v).padStart(2, "0")}</div>
          <div className="text-xs text-slate-500 uppercase">{k}</div>
        </div>
      ))}
    </div>
  );
}