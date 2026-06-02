const badges = [
    { label: "ML Model",     icon: "🧠", side: "left",  top: "28%", delay: 600  },
    { label: "AI/ML",        icon: "🤖", side: "left",  top: "50%", delay: 750  },
    { label: "Kaggle",       icon: "📊", side: "left",  top: "72%", delay: 900  },
    { label: "PyTorch",      icon: "⚡", side: "right", top: "22%", delay: 650  },
    { label: "IEEE IAS",     icon: "🏆", side: "right", top: "46%", delay: 800  },
    { label: "Data Science", icon: "📈", side: "right", top: "68%", delay: 950  },
];

const codeSnippets = [
    { text: "df.groupby('label').mean()",   x: "7%",  y: "38%", delay: 0,   duration: 14 },
    { text: "model.fit(X_train, y_train)",  x: "6%",  y: "60%", delay: 3,   duration: 16 },
    { text: "X = df.drop('target',axis=1)", x: "7%",  y: "50%", delay: 6,   duration: 13 },
    { text: "torch.cuda.is_available()",    x: "68%", y: "30%", delay: 1.5, duration: 15 },
    { text: "import tensorflow as tf",      x: "69%", y: "56%", delay: 4,   duration: 14 },
    { text: "torch.cuda.is_available()",    x: "67%", y: "70%", delay: 8,   duration: 16 },
    { text: "model.fit(X_train, y_train)",  x: "70%", y: "80%", delay: 2.5, duration: 13 },
];

const floatingDots = [
    { color: "#f472b6", x: "38%",  y: "26%", size: 3, dur: 11, delay: 0    },
    { color: "#60a5fa", x: "52%",  y: "57%", size: 2, dur: 14, delay: 1.5  },
    { color: "#34d399", x: "44%",  y: "70%", size: 3, dur: 12, delay: 0.8  },
    { color: "#a78bfa", x: "62%",  y: "43%", size: 2, dur: 15, delay: 2.2  },
    { color: "#f472b6", x: "30%",  y: "60%", size: 2, dur: 13, delay: 3.1  },
    { color: "#60a5fa", x: "57%",  y: "80%", size: 3, dur: 11, delay: 0.4  },
    { color: "#34d399", x: "74%",  y: "35%", size: 2, dur: 14, delay: 1.9  },
    { color: "#a78bfa", x: "22%",  y: "46%", size: 2, dur: 16, delay: 2.7  },
    { color: "#f472b6", x: "48%",  y: "88%", size: 3, dur: 12, delay: 0.6  },
    { color: "#60a5fa", x: "82%",  y: "64%", size: 2, dur: 15, delay: 3.5  },
    { color: "#34d399", x: "16%",  y: "33%", size: 2, dur: 11, delay: 1.2  },
    { color: "#f472b6", x: "90%",  y: "50%", size: 3, dur: 14, delay: 4.0  },
    { color: "#60a5fa", x: "35%",  y: "82%", size: 2, dur: 13, delay: 5.0  },
    { color: "#a78bfa", x: "78%",  y: "72%", size: 2, dur: 12, delay: 1.8  },
];

export default function Floater({ visible = true }) {
    return (
        <>
            {/* ── Floating tech badges — slide in from sides ── */}
            {badges.map((b) => {
                const isLeft = b.side === "left";
                return (
                    <div
                        key={b.label}
                        style={{
                            position: "fixed",
                            [b.side]: "clamp(12px, 3vw, 55px)",
                            top: b.top,
                            zIndex: 10,
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "6px 12px",
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(139,92,246,0.22)",
                            borderRadius: "999px",
                            backdropFilter: "blur(10px)",
                            whiteSpace: "nowrap",
                            pointerEvents: "none",
                            // Slide in from side, then float
                            opacity: visible ? 1 : 0,
                            transform: visible
                                ? "translateX(0)"
                                : `translateX(${isLeft ? "-30px" : "30px"})`,
                            transition: `opacity 0.7s cubic-bezier(.16,1,.3,1) ${b.delay}ms,
                           transform 0.7s cubic-bezier(.16,1,.3,1) ${b.delay}ms`,
                            // Float animation added after entrance via CSS
                            animation: visible
                                ? `floatY ${isLeft ? "5s" : "5.5s"} ease-in-out ${b.delay / 1000 + 0.7}s infinite`
                                : "none",
                        }}
                    >
                        <span style={{ fontSize: "0.75rem" }}>{b.icon}</span>
                        <span style={{ fontSize: "0.68rem", color: "#cbd5e1", fontWeight: 500 }}>
              {b.label}
            </span>
                    </div>
                );
            })}

            {/* ── Drifting code snippets ── */}
            {codeSnippets.map((c, i) => (
                <div
                    key={i}
                    style={{
                        position: "absolute",
                        left: c.x, top: c.y,
                        fontFamily: "'Fira Code','Courier New',monospace",
                        fontSize: "0.6rem",
                        color: "rgba(139,92,246,0.14)",
                        whiteSpace: "nowrap",
                        pointerEvents: "none",
                        userSelect: "none",
                        zIndex: 1,
                        animation: `codeFloat ${c.duration}s ease-in-out ${c.delay}s infinite`,
                    }}
                >
                    {c.text}
                </div>
            ))}

            {/* ── Small glowing drifting dots ── */}
            {floatingDots.map((d, i) => (
                <div
                    key={`dot-${i}`}
                    style={{
                        position: "absolute",
                        left: d.x, top: d.y,
                        width: d.size, height: d.size,
                        borderRadius: "50%",
                        background: d.color,
                        boxShadow: `0 0 ${d.size * 2}px ${d.color}88`,
                        pointerEvents: "none",
                        zIndex: 2,
                        animation: `dotDrift ${d.dur}s ease-in-out ${d.delay}s infinite`,
                    }}
                />
            ))}

            {/* ── Ambient glow orbs ── */}
            <div style={{
                position: "absolute", borderRadius: "50%", pointerEvents: "none",
                width: 380, height: 380,
                background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
                top: "8%", left: "50%", transform: "translateX(-50%)",
                filter: "blur(70px)",
                animation: "glowOrb 10s ease-in-out infinite",
                zIndex: 0,
            }} />
            <div style={{
                position: "absolute", borderRadius: "50%", pointerEvents: "none",
                width: 260, height: 260,
                background: "radial-gradient(circle, rgba(244,114,182,0.08) 0%, transparent 70%)",
                bottom: "6%", right: "5%",
                filter: "blur(60px)",
                animation: "glowOrb2 10s ease-in-out 3.5s infinite",
                zIndex: 0,
            }} />
        </>
    );
}