import Button from "./Button";
import Logo from "../assets/logo.jpeg"

const links = ["home", "about", "structure", "timeline", "prizes", "team"];

export default function Navbar() {
    return (
        <nav className="navbar flex items-center gap-3">
            {/* Logo */}
            <div className="navbar-logo">
                <img
                    src={Logo}
                    alt="OctWave Logo"
                    className="w-10 h-10 object-contain"
                />
                <span className="logo-text">
                    OCT<span className="logo-accent">WAVE</span>{" "}
                    <span className="logo-version">3.0</span>
                </span>
            </div>

            {/* Links */}
            <div className="hidden md:flex gap-1 navbar-links">
                {links.map((l, i) => (
                    <a
                        key={l}
                        href={`#${l}`}
                        className={`navbar-link ${i === 0 ? "navbar-link-active" : ""}`}
                    >
                        {l.charAt(0).toUpperCase() + l.slice(1)}
                    </a>
                ))}
            </div>

            {/* CTA */}
            <Button>Register now →</Button>
        </nav>
    );
}
