import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    let t = 0;

    function drawAurora(xOffset, color, amplitude, speed) {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);

      for (let x = 0; x <= canvas.width; x += 20) {
        const y =
          canvas.height / 2 +
          Math.sin(x * 0.002 + t * speed + xOffset) * amplitude +
          Math.sin(t * 0.4) * 40;
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = color;
      ctx.lineWidth = 160;
      ctx.lineCap = "round";
      ctx.stroke();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // fondo base
      const bg = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bg.addColorStop(0, "#19193f");
      bg.addColorStop(1, "#0c0c1e");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // auroras
      drawAurora(0, "rgb(182, 82, 115)", 120, 0.6);
      drawAurora(2, "rgb(163, 44, 44)", 160, 0.4);
      drawAurora(4, "rgb(185, 96, 45)", 140, 0.5);

      t += 0.01;
      requestAnimationFrame(animate);
    }

    animate();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
