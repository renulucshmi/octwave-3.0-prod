import { useEffect, useRef } from "react";

export default function StarCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");

    let w, h;
    let stars = [];

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const createStars = () =>
      Array.from({ length: 120 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5,
      }));

    resize();
    stars = createStars();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      stars.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;

        if (s.x < 0) s.x = w;
        if (s.x > w) s.x = 0;
        if (s.y < 0) s.y = h;
        if (s.y > h) s.y = 0;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(180,180,255,0.6)";
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return <canvas ref={ref} className="fixed inset-0 -z-10" />;
}