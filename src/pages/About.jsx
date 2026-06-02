export default function About() {
    const pillars = [
        {
            icon: "🎓",
            title: "Industry Learning",
            desc: "Hands-on workshops led by industry practitioners using real-world tools like PyTorch, Kaggle, and cloud ML platforms.",
        },
        {
            icon: "⚔️",
            title: "Real Competition",
            desc: "A structured Kaggle challenge followed by a high-stakes live final judged by industry experts.",
        },
        {
            icon: "🏛️",
            title: "All Universities",
            desc: "Open to undergraduate students from every Sri Lankan university — no prerequisites, just ambition.",
        },
        {
            icon: "🏆",
            title: "Awards & Recognition",
            desc: "Win certificates, cash prizes, and get noticed by top companies actively looking for AI talent.",
        },
    ];

    return (
        <section id="about" className="about-section">
            {/* Section label */}
            <div className="about-eyebrow">
                <span className="about-eyebrow-line" />
                ABOUT THE EVENT
            </div>

            <div className="about-grid">
                {/* Left — heading + description */}
                <div className="about-left">
                    <h2 className="about-heading">
                        Built for the{" "}
                        <span className="about-heading-accent">next generation</span>
                        <br />of AI engineers
                    </h2>
                    <p className="about-body">
                        An AI/ML competition platform connecting universities to industry —
                        through structured workshops, a Kaggle challenge, and a live final
                        with real industry judges.
                    </p>
                    <p className="about-body" style={{ marginTop: 12 }}>
                        Octwave 3.0 is more than a hackathon. It's a six-week journey that
                        builds skills, networks, and careers.
                    </p>
                </div>

                {/* Right — cards */}
                <div className="about-cards">
                    {pillars.map((p) => (
                        <div key={p.title} className="about-card">
                            <div className="about-card-icon">{p.icon}</div>
                            <div>
                                <div className="about-card-title">{p.title}</div>
                                <div className="about-card-desc">{p.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}