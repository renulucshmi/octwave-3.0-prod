import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import Countdown from "../components/Countdown";
import Floater from "../components/Floater";
import TokenRibbonBackground from "../components/TokenRibbonBackground"

const stats = [
    { value: "04", label: "WORKSHOPS" },
    { value: "10", label: "FINALISTS" },
    { value: "06", label: "WEEKS"     },
    { value: "SL",  label: "ALL UNIS" },
];

export default function Home() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    const base = {
        transition: "opacity 0.8s cubic-bezier(.16,1,.3,1), transform 0.8s cubic-bezier(.16,1,.3,1)",
        willChange: "opacity, transform",
    };

    const hidden  = { opacity: 0, transform: "translateY(24px)" };
    const shown   = { opacity: 1, transform: "translateY(0)" };

    const item = (extraDelay = 0) => ({
        ...base,
        ...(visible ? shown : hidden),
        transitionDelay: `${extraDelay}ms`,
    });

    return (
        <section
            id="home"
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "80px 24px 36px",
                overflow: "hidden",
            }}
        >
            
            <VectorSphereBackground />
            <Floater visible={visible} />

            {/* Pill badge */}
            <div style={{
                ...base,
                ...(visible
                    ? { opacity: 1, transform: "translateY(0)" }
                    : { opacity: 0, transform: "translateY(-12px)" }),
                transitionDelay: "0ms",
                display: "inline-flex", alignItems: "center", gap: 8,
                fontSize: "0.7rem", color: "#c4b5fd",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(139,92,246,0.3)",
                borderRadius: 999, padding: "5px 16px",
                marginBottom: 20,
                letterSpacing: "0.02em",
                zIndex: 5, position: "relative",
                backdropFilter: "blur(8px)",
            }}>
                <span style={{
                    width: 5, height: 5, borderRadius: "50%",
                    background: "#a78bfa", display: "inline-block",
                    flexShrink: 0,
                    boxShadow: "0 0 6px #a78bfa",
                    animation: "pulseDot 2s ease-in-out infinite",
                }} />
                IEEE IAS · University of Moratuwa · 2026
            </div>

            {/* Hero text block */}
            <div style={{ position: "relative", zIndex: 5, lineHeight: 1.08 }}>

                {/* "Where Data" */}
                <div style={{
                    ...base,
                    ...(visible ? shown : hidden),
                    transitionDelay: "150ms",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(2.4rem, 4.8vw, 4.2rem)",
                    letterSpacing: "-0.03em",
                    color: "#fff",
                    marginBottom: "0.05em",
                }}>
                    Where Data
                </div>

                {/* "Meets" — outlined stroke + shimmer */}
                <div style={{
                    ...base,
                    ...(visible ? shown : hidden),
                    transitionDelay: "280ms",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(2.4rem, 4.8vw, 4.2rem)",
                    letterSpacing: "-0.03em",
                    color: "transparent",
                    WebkitTextStroke: "1.5px #a78bfa",
                    marginBottom: "0.05em",
                    animation: visible ? "shimmer 3s ease-in-out 1s infinite" : "none",
                }}>
                    Meets
                </div>

                {/* "Intelligence." — pink→cyan gradient (kept from Image 02) */}
                <div style={{
                    ...base,
                    ...(visible ? shown : hidden),
                    transitionDelay: "420ms",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(2.5rem, 3vw, 7rem)",                    letterSpacing: "-0.03em",
                    background: "linear-gradient(90deg, #a78bfa 0%, #f472b6 55%, #60a5fa 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                }}>
                    Intelligence
                </div>
            </div>

            {/* Subtitle */}
            <p style={{
                ...item(580),
                color: "#f3eef2",
                maxWidth: 500,
                fontSize: "1rem",
                lineHeight: 1.75,
                position: "relative", zIndex: 5,
                margin: "14px 0 0",
            }}>
                Sri Lanka's premier undergraduate AI &amp;   Machine Learning competition.
                Build real solutions. Learn from industry experts.
                Compete on the biggest stage.
            </p>

            {/* Buttons */}
            <div style={{
                ...item(720),
                display: "flex", gap: 10,
                position: "relative", zIndex: 5,
                marginTop: 20,
            }}>
                <Button>Register your team</Button>
                <Button variant="outline">Explore the event</Button>
            </div>

            {/* Stats row */}
            <div style={{
                ...item(860),
                display: "flex",
                gap: 1,
                border: "1px solid rgba(139,92,246,0.2)",
                borderRadius: 12,
                overflow: "hidden",
                background: "rgba(139,92,246,0.18)",
                position: "relative", zIndex: 5,
                marginTop: 28,
                marginBottom: 18,
            }}>
                {stats.map((s, i) => (
                    <div
                        key={s.label}
                        style={{
                            ...base,
                            ...(visible ? shown : hidden),
                            transitionDelay: `${860 + i * 80}ms`,
                            display: "flex", flexDirection: "column",
                            alignItems: "center", justifyContent: "center",
                            gap: 3, padding: "10px 20px",
                            background: "rgba(255,255,255,0.03)",
                            minWidth: 76,
                            transition: `opacity 0.8s cubic-bezier(.16,1,.3,1) ${860 + i * 80}ms,
                                         transform 0.8s cubic-bezier(.16,1,.3,1) ${860 + i * 80}ms,
                                         background 0.2s`,
                            cursor: "default",
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = "rgba(139,92,246,0.1)"}
                        onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.03)"}
                    >
                        <span style={{
                            fontSize: "1.2rem", fontWeight: 700,
                            color: "#fff", letterSpacing: "-0.04em", lineHeight: 1,
                        }}>{s.value}</span>
                        <span style={{
                            fontSize: "0.48rem", letterSpacing: "0.12em",
                            color: "#475569", fontWeight: 600, marginTop: 2,
                        }}>{s.label}</span>
                    </div>
                ))}
            </div>

            {/* Countdown */}
            <div style={{
                ...item(1080),
                width: "100%", maxWidth: 560,
                position: "relative", zIndex: 5,
                marginTop: 10,
            }}>
                <Countdown />
            </div>
        </section>
    );
}