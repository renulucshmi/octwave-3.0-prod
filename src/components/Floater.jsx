const badges = [
  { label: "ML Model", icon: "🧠", side: "left", top: "28%", delay: 600, floatDur: "5s", floatDir: "normal" },
  { label: "AI/ML", icon: "🤖", side: "left", top: "50%", delay: 750, floatDur: "6s", floatDir: "reverse" },
  { label: "Kaggle", icon: "📊", side: "left", top: "72%", delay: 900, floatDur: "5.5s", floatDir: "normal" },
  { label: "PyTorch", icon: "⚡", side: "right", top: "22%", delay: 650, floatDur: "5.5s", floatDir: "reverse" },
  { label: "IEEE IAS", icon: "🏆", side: "right", top: "46%", delay: 800, floatDur: "6s", floatDir: "normal" },
  { label: "Data Science", icon: "📈", side: "right", top: "68%", delay: 950, floatDur: "5s", floatDir: "reverse" },
];

export default function Floater({ visible = true }) {
  return (
    <>
      {badges.map((b) => {
        const isLeft = b.side === "left";

        return (
          <div
            key={b.label}
            style={{
              position: "absolute",
              [b.side]: "clamp(12px, 3vw, 55px)",
              top: b.top,
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 14px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(139,92,246,0.22)",
              borderRadius: "999px",
              backdropFilter: "blur(10px)",
              whiteSpace: "nowrap",
              pointerEvents: "none",
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateX(0)"
                : `translateX(${isLeft ? "-40px" : "40px"})`,
              transition: `opacity 0.7s cubic-bezier(.16,1,.3,1) ${b.delay}ms,
                           transform 0.7s cubic-bezier(.16,1,.3,1) ${b.delay}ms`,
              animation: visible
                ? `floatY ${b.floatDur} ease-in-out ${b.delay / 1000 + 0.7}s infinite ${b.floatDir}`
                : "none",
            }}
          >
            <span style={{ fontSize: "0.75rem" }}>{b.icon}</span>
            <span
              style={{
                fontSize: "0.68rem",
                color: "#cbd5e1",
                fontWeight: 500,
              }}
            >
              {b.label}
            </span>
          </div>
        );
      })}
    </>
  );
}