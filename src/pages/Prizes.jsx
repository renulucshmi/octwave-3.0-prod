import React from "react";

const perks = [
    { left: "IEEE-endorsed certs for all finalists", right: "Direct industry partner networking" },
    { left: "National recognition via IEEE IAS SL", right: "Career referrals for top performers" },
];

export default function Prizes() {
    return (
        <section id="prizes" className="section">
            <p className="section-label">PRIZE POOL</p>
            <h2 className="section-title">
                Win big. <span className="gradient-text">Grow further.</span>
            </h2>
            <p className="section-sub">
                Cash prizes, industry recognition, and career pathways for the best performers.
            </p>

            {/* Champion card */}
            <div className="prize-champion">
                <div className="prize-champion-left">
                    <span className="prize-badge">Champion</span>
                    <h3 className="prize-champion-title">1st Place Winner</h3>
                    <p className="prize-champion-desc">
                        Best accuracy, latency &amp; presentation · + IEEE certificate + internship referrals
                    </p>
                </div>
                <div className="prize-champion-right">
                    <span className="prize-tba">TBA</span>
                    <p className="prize-value-label">PRIZE VALUE</p>
                </div>
            </div>

            {/* Runner-ups */}
            <div className="prize-runners">
                <div className="prize-runner">
                    <span className="prize-runner-num">02</span>
                    <div>
                        <p className="prize-runner-title">1st Runner-up</p>
                        <p className="prize-runner-sub">TBA · Certificate + recognition</p>
                    </div>
                </div>
                <div className="prize-runner">
                    <span className="prize-runner-num">03</span>
                    <div>
                        <p className="prize-runner-title">2nd Runner-up</p>
                        <p className="prize-runner-sub">TBA · Certificate + recognition</p>
                    </div>
                </div>
            </div>

            {/* Perks grid */}
            <div className="prize-perks">
                {perks.map((row, i) => (
                    <React.Fragment key={i}>
                        <div className="prize-perk">{row.left}</div>
                        <div className="prize-perk">{row.right}</div>
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}