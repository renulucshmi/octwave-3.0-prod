import React from "react";

const weeks = [
    {
        wk: "WK 01",
        title: "REGISTER TEAM",
        desc: "Register your team online",
        active: true,
    },
    {
        wk: "WK 02",
        title: "ATTEND WORKSHOPS",
        desc: "AI/ML industry trends · Intro to Machine Learning · ML models · Data engineering pipelines",
        active: false,
    },
    {
        wk: "WK 03",
        title: "KAGGLE PRELIMINARY ROUND",
        desc: "Kaggle competition · Model + report submission · Top 10 shortlisted",
        active: false,
    },
    {
        wk: "WK 04",
        title: "TOP-10 FINAL CHALLENGE",
        desc: "Real-world challenge · Live presentations · Physical at UOM",
        active: false,
    },
    {
        wk: "WK 05",
        title: "AWARDS & RECOGNITION",
        desc: "Winning teams · Certifications · Industry recognition · Career development & networks · Prizes",
        active: false,
    },
];

export default function Timeline() {
    return (
        <section id="timeline" className="section">
            <p className="section-label">TIMELINE</p>
            <h2 className="section-title">
                Your <span className="gradient-text">6-week</span> journey
            </h2>
            <p className="section-sub">
                From your first workshop to stepping on the final stage.
            </p>

            <div className="timeline-list">
                {weeks.map((item, i) => (
                    <div key={i} className="timeline-item">
                        <div className="timeline-left">
                            <span className="timeline-wk">{item.wk}</span>
                            <div className={`timeline-dot ${item.active ? "active" : ""}`} />
                        </div>
                        {i < weeks.length - 1 && <div className="timeline-line" />}
                        <div className="timeline-content">
                            <h3 className="timeline-item-title">{item.title}</h3>
                            <p className="timeline-item-desc">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}