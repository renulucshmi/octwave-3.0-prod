import { useEffect, useState } from "react";

const TARGET = new Date("2026-08-01T00:00:00");

function pad(n) {
  return String(Math.max(0, n)).padStart(2, "0");
}

function getTimeLeft() {
  const diff = TARGET - Date.now();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { d, h, m, s };
}

const units = [
  { key: "d", label: "DAYS" },
  { key: "h", label: "HOURS" },
  { key: "m", label: "MINS" },
  { key: "s", label: "SECS" },
];

export default function Countdown() {
  const [t, setT] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setT(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
      <div className="countdown-wrapper">
        <div className="countdown-label">REGISTRATION<br />CLOSES IN</div>

        <div className="countdown-digits">
          {units.map((u, i) => (
              <div key={u.key} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span className="countdown-num">{pad(t[u.key])}</span>
                  <span className="countdown-unit-label">{u.label}</span>
                </div>
                {i < units.length - 1 && (
                    <span className="countdown-sep" style={{ marginBottom: 18 }}>:</span>
                )}
              </div>
          ))}
        </div>

        <div className="countdown-deadline">August<br />2026</div>
      </div>
  );
}