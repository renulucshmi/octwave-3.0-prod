import { useEffect, useState } from "react";

export default function Loader({ onDone }) {
  const [p, setP] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => {
      setP((prev) => {
        const next = prev + Math.random() * 15;
        if (next >= 100) {
          clearInterval(iv);
          setTimeout(onDone, 500);
          return 100;
        }
        return next;
      });
    }, 80);

    return () => clearInterval(iv);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[999]">
      <div className="text-purple-400 font-mono mb-4">{Math.round(p)}%</div>
      <div className="w-[220px] h-[2px] bg-gray-900 overflow-hidden rounded">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all"
          style={{ width: `${p}%` }}
        />
      </div>
    </div>
  );
}