import React from "react";
import Member1 from "../assets/team/Manushi.jpeg"
import Member2 from "../assets/team/Hiruna.jpeg"
import Member3 from "../assets/team/Lakmana.jpeg"

const cochairs = [
  {
    photo: Member1,
    name: "Manushi Gunasekara",
    role: "Co-chair - OctWave 3.0",
  },
  {
    photo: Member2,
    name: "Hirun Jayalath",
    role: "Co-chair - OctWave 3.0",
  },
  {
    photo: Member3,
    name: "Lakmana Thabrew",
    role: "Co-chair - OctWave 3.0",
  },
];

function MemberCard({ photo, name, role }) {
  return (
    <div
        className="
            flex flex-col items-center justify-center text-center
            rounded-2xl
            border border-purple-500/10
            bg-white/5
            px-10 py-12
            min-h-[180px]
            transition-all duration-300
            hover:-translate-y-2
            hover:border-purple-500/30
        "
    >
        {/* Avatar */}
        <div className="mb-6 h-24 w-24 overflow-hidden rounded-full ring-2 ring-purple-500/20">
            <div className="h-full w-full overflow-hidden rounded-full ring-2 ring-purple-500/20">
            <img
                src={photo}
                alt={name}
                className="h-full w-full object-cover object-center"
            />
            </div>
        </div>

        <p className="mb-1 text-base font-semibold text-slate-200">
            {name}
        </p>

        <p className="text-sm text-slate-500">
            {role}
        </p>
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
                IEEE IAS Student Branch Chapter - University of Moratuwa.
            </p>

            <div className="team-grid">
                {cochairs.map((m, index) => (
                    <MemberCard key={index} {...m} />
                ))}
            </div>
        </section>
    );
}