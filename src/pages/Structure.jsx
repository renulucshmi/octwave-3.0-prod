import React from "react";

const phases = [
    {
        num: "1",
        title: "Introductory session",
        desc: "Industry experts present AI/ML trends — setting the foundation before the technical workshops begin.",
        tags: [],
    },
    {
        num: "2",
        title: "Workshops — 4 sessions",
        desc: "Hands-on training in ML models, time-series data, data engineering, and the Kaggle platform.",
        tags: ["Intro to ML", "Time series", "Data engineering", "Kaggle"],
    },
    {
        num: "3",
        title: "Preliminary round — online",
        desc: "Kaggle challenge + report submission. Top 10 teams advance based on leaderboard + report quality.",
        tags: ["Online", "Kaggle", "Top 10 advance"],
    },
    {
        num: "4",
        title: "Final round — physical at UOM",
        desc: "Industry dataset + live presentations to a panel. Ends with the awards ceremony at University of Moratuwa.",
        tags: ["Physical", "Real dataset", "Industry judges", "Awards ceremony"],
    },
];

export default function Structure() {
    return (
        <section id="structure" className="section">
            <p className="section-label">EVENT STRUCTURE</p>
            <h2 className="section-title">
                Four phases. <span className="gradient-text">One goal.</span>
            </h2>
            <p className="section-sub">
                Learn the tools. Apply them competitively. Present to industry leaders.
            </p>

            <div className="structure-list">
                {phases.map((phase) => (
                    <div key={phase.num} className="structure-item">
                        <span className="structure-num">{phase.num}</span>
                        <div className="structure-content">
                            <h3 className="structure-item-title">{phase.title}</h3>
                            <p className="structure-item-desc">{phase.desc}</p>
                            {phase.tags.length > 0 && (
                                <div className="tag-row">
                                    {phase.tags.map((tag) => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}