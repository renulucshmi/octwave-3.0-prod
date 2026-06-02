import { useEffect, useRef } from "react";

export default function StarCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");

    let w, h, animId;
    let stars = [], dots = [];

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const createStars = () =>
        Array.from({ length: 160 }, () => ({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.2 + 0.2,
          alpha: Math.random() * 0.5 + 0.3,
        }));

    // Coloured accent dots (pink, blue, purple) like in Image 1
    const createDots = () =>
        Array.from({ length: 10 }, () => ({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 3 + 2,
          color: ["#c084fc", "#f472b6", "#60a5fa", "#a78bfa"][
              Math.floor(Math.random() * 4)
              ],
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          pulse: Math.random() * Math.PI * 2,
        }));

    resize();
    stars = createStars();
    dots = createDots();
    window.addEventListener("resize", () => {
      resize();
      stars = createStars();
      dots = createDots();
    });

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Stars
      stars.forEach((s) => {
        s.x = (s.x + s.vx + w) % w;
        s.y = (s.y + s.vy + h) % h;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,180,255,${s.alpha})`;
        ctx.fill();
      });

      // Glowing coloured accent dots
      dots.forEach((d) => {
        d.x = (d.x + d.vx + w) % w;
        d.y = (d.y + d.vy + h) % h;
        d.pulse += 0.02;
        const scale = 1 + Math.sin(d.pulse) * 0.3;

        const grad = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 4 * scale);
        grad.addColorStop(0, d.color + "cc");
        grad.addColorStop(1, d.color + "00");

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r * scale, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r * 0.5 * scale, 0, Math.PI * 2);
        ctx.fillStyle = d.color;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return <canvas ref={ref} className="fixed inset-0 -z-10 pointer-events-none" />;
}
