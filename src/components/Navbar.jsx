import Button from "./Button";

const links = ["home", "about", "structure", "timeline", "prizes", "team"];

export default function Navbar() {
    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="navbar-logo">
                <span className="logo-icon">◼</span>
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
