'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Image from 'next/image';

const fragmentShader = `
  uniform float time;
  uniform sampler2D texture1;
  uniform float intensity;
  
  varying vec2 vUv;
  
  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  void main() {
    vec2 uv = vUv;
    vec4 originalColor = texture2D(texture1, uv);
    
    // If no intensity, return original color immediately
    if (intensity < 0.01) {
      gl_FragColor = originalColor;
      return;
    }
    
    // Base time-varying intensity
    float glitchIntensity = intensity * (0.8 + 0.2 * sin(time * 10.0));
    
    // Create pure horizontal scan lines only when hovering
    float scanY = floor(uv.y * 100.0) / 100.0;
    float lineIntensity = random(vec2(scanY, floor(time * 60.0)));
    
    // Apply effects only when hovering
    vec2 rUv = uv;
    vec2 gUv = uv;
    vec2 bUv = uv;
    
    if (glitchIntensity > 0.01) {
      // Horizontal displacement
      float xShift = 0.0;
      if (lineIntensity > 0.7) {
        xShift = (random(vec2(scanY, time)) * 2.0 - 1.0) * 0.1 * glitchIntensity;
      }
      
      // RGB splitting based on scan lines
      float rgbShift = lineIntensity * glitchIntensity * 0.1;
      rUv = vec2(uv.x + xShift + rgbShift, uv.y);
      gUv = vec2(uv.x + xShift, uv.y);
      bUv = vec2(uv.x + xShift - rgbShift, uv.y);
    }
    
    // Sample the texture with offsets
    vec4 rSample = texture2D(texture1, rUv);
    vec4 gSample = texture2D(texture1, gUv);
    vec4 bSample = texture2D(texture1, bUv);
    
    // Combine channels
    vec3 color = vec3(rSample.r, gSample.g, bSample.b);
    
    // Add effects only when hovering
    if (glitchIntensity > 0.01) {
      // Add scan lines darkening
      float scanIntensity = 0.8 + 0.2 * sin(uv.y * 400.0 - time * 20.0);
      color *= mix(1.0, scanIntensity, lineIntensity * glitchIntensity * 0.5);
      
      // Add subtle color distortion on scan lines
      if (lineIntensity > 0.5) {
        float distort = sin(time * 20.0 + uv.y * 100.0) * 0.05;
        color.r = mix(color.r, color.r + distort, lineIntensity * glitchIntensity);
        color.b = mix(color.b, color.b - distort, lineIntensity * glitchIntensity);
      }
    }
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

const vertexShader = `
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

interface GlitchImageProps {
  src: string;
  alt: string;
  className?: string;
}

const GlitchImage: React.FC<GlitchImageProps> = ({ src, alt, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const textureRef = useRef<THREE.Texture | null>(null);
  const requestRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    if (!canvasRef.current || imageLoaded) return;

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
    });

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
    const geometry = new THREE.PlaneGeometry(2, 2);
    const texture = new THREE.TextureLoader().load(src, () => setImageLoaded(true));
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        texture1: { value: texture },
        intensity: { value: 0 },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    rendererRef.current = renderer;
    sceneRef.current = scene;
    cameraRef.current = camera;
    materialRef.current = material;
    textureRef.current = texture;

    return () => {
      cancelAnimationFrame(requestRef.current!);
      texture.dispose();
      material.dispose();
      geometry.dispose();
      renderer.dispose();
    };
  }, [src, imageLoaded]);

  useEffect(() => {
    const animate = () => {
      if (!rendererRef.current || !sceneRef.current || !cameraRef.current || !materialRef.current) return;

      timeRef.current += 0.1;
      materialRef.current.uniforms.time.value = timeRef.current;
      const targetIntensity = isHovered ? 2.0 : 0.0;
      const currentIntensity = materialRef.current.uniforms.intensity.value;
      materialRef.current.uniforms.intensity.value += (targetIntensity - currentIntensity) * 0.1;

      rendererRef.current.render(sceneRef.current, cameraRef.current);
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [isHovered]);

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full absolute top-0 left-0 z-10"
      />
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={{ opacity: isHovered ? 0 : 1 }}
      />
    </div>
  );
};

export default GlitchImage;
