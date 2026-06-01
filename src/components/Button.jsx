export default function Button({ children, variant = "primary", className = "" }) {
  const base =
    "px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2";

  const styles = {
    primary: "bg-purple-600 text-white hover:bg-purple-500 hover:-translate-y-1",
    outline:
      "border border-purple-400/30 text-purple-200 hover:bg-purple-500/10 hover:-translate-y-1",
  };

  return <button className={`${base} ${styles[variant]} ${className}`}>{children}</button>;
}