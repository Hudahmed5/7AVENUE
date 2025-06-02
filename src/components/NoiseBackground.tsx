'use client';

import { useEffect, useRef } from 'react';

export default function NoiseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawNoise = () => {
      if (!ctx || !canvas) return;
      
      // Create a smaller resolution for bigger "pixels"
      const scale = 2.5; // Increased scale for larger particles
      const w = Math.floor(canvas.width / scale);
      const h = Math.floor(canvas.height / scale);
      
      const imageData = ctx.createImageData(w, h);
      const buffer = new Uint32Array(imageData.data.buffer);

      for (let i = 0; i < buffer.length; i++) {
        // Create more contrasted noise
        const noise = Math.random();
        const gray = noise > 0.45 ? 255 : 0; // Adjusted threshold for more white pixels
        const alpha = 100; // Reduced opacity for better blending
        buffer[i] =
          (alpha << 24) | // alpha
          (gray << 16) |  // red
          (gray << 8) |   // green
          gray;           // blue
      }

      // Clear the canvas with transparency
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Scale up the noise
      ctx.imageSmoothingEnabled = false;
      ctx.putImageData(imageData, 0, 0);
      const scaledCanvas = document.createElement('canvas');
      scaledCanvas.width = w;
      scaledCanvas.height = h;
      const scaledCtx = scaledCanvas.getContext('2d');
      if (scaledCtx) {
        scaledCtx.putImageData(imageData, 0, 0);
        ctx.scale(scale, scale);
        ctx.drawImage(scaledCanvas, 0, 0);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
      }

      animationFrameId = requestAnimationFrame(drawNoise);
    };

    resizeCanvas();
    drawNoise();

    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.2,
        mixBlendMode: 'overlay',
        pointerEvents: 'none',
      }}
    />
  );
} 