import React from "react";

const cochairs = [
    { initials: "MG", name: "Manushi Gunasekara", role: "Co-chair — OctWave 3.0" },
    { initials: "HJ", name: "Hirun Jayalath", role: "Co-chair — OctWave 3.0" },
    { initials: "LT", name: "Lakmana Thabrew", role: "Co-chair — OctWave 3.0" },
];

function MemberCard({ initials, name, role }) {
    return (
        <div className="team-card">
            <div className="team-avatar">
                <span>{initials}</span>
            </div>
            <p className="team-name">{name}</p>
            <p className="team-role">{role}</p>
        </div>
    );
}

export default function Team() {
    return (
        <section id="team" className="section">
            <p className="section-label">OUR TEAM</p>
            <h2 className="section-title">
                The people <span className="gradient-text">behind OctWave</span>
            </h2>
            <p className="section-sub">
                IEEE IAS Student Branch Chapter — University of Moratuwa.
            </p>

            <div className="team-grid">
                {cochairs.map((m) => (
                    <MemberCard key={m.initials} {...m} />
                ))}
            </div>
        </section>
    );
}