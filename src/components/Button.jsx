export default function Button({ children, variant = "primary", onClick }) {
  return (
      <button
          onClick={onClick}
          className={variant === "outline" ? "btn-outline" : "btn-primary"}
      >
        {children}
      </button>
  );
}
