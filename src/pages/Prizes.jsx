import React from "react";

const perks = [
    { left: "IEEE-endorsed certs for all finalists", right: "Direct industry partner networking" },
    { left: "National recognition via IEEE IAS SL" },
];

export default function Prizes() {
    return (
        <section id="prizes" className="section max-md:px-6">
            <p className="section-label">PRIZE POOL</p>
            <h2 className="section-title">
                Win big. <span className="gradient-text">Grow further.</span>
            </h2>
            <p className="section-sub">
                Cash prizes, industry recognition, and career pathways for the best performers.
            </p>

            {/* Champion card: Changes flex-direction to stack on mobile, fixes text alignment */}
            <div className="prize-champion max-md:flex-col max-md:items-start max-md:gap-6 max-md:p-6">
                <div className="prize-champion-left">
                    <span className="prize-badge">Champion</span>
                    <h3 className="prize-champion-title max-md:text-xl">1st Place Winner</h3>
                    <p className="prize-champion-desc">
                        Best accuracy, latency &amp; presentation · + IEEE certificate
                    </p>
                </div>
                <div className="prize-champion-right max-md:self-start">
                    <span className="prize-tba max-md:text-left max-md:text-3xl">TBA</span>
                    <p className="prize-value-label max-md:text-left">PRIZE VALUE</p>
                </div>
            </div>

            {/* Runner-ups: Forces the 2-column grid to wrap into a single column on mobile */}
            <div className="prize-runners max-md:!grid-cols-1 max-md:gap-3">
                <div className="prize-runner max-md:p-5 max-md:gap-4">
                    <span className="prize-runner-num">02</span>
                    <div>
                        <p className="prize-runner-title">1st Runner-up</p>
                        <p className="prize-runner-sub">TBA · Certificate + recognition</p>
                    </div>
                </div>
                <div className="prize-runner max-md:p-5 max-md:gap-4">
                    <span className="prize-runner-num">03</span>
                    <div>
                        <p className="prize-runner-title">2nd Runner-up</p>
                        <p className="prize-runner-sub">TBA · Certificate + recognition</p>
                    </div>
                </div>
            </div>

            {/* Perks grid: Forces 2-column layout to single column grid stack on mobile */}
            <div className="prize-perks max-md:!grid-cols-1 max-md:gap-2">
                {perks.map((row, i) => (
                    <React.Fragment key={i}>
                        <div className="prize-perk max-md:p-4 max-md:text-xs">{row.left}</div>
                        {row.right && (
                            <div className="prize-perk max-md:p-4 max-md:text-xs">{row.right}</div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}