import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function TokenRibbonBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup (Wide lens to frame a vertical architectural shape)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 6);

    // 2. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Cinematic Cyberpunk Lights
    const ambientLight = new THREE.AmbientLight(0x0f172a, 1.5);
    scene.add(ambientLight);

    // Glowing Purple Key Light
    const purpleLight = new THREE.DirectionalLight(0xa78bfa, 4.0);
    purpleLight.position.set(5, 3, 2);
    scene.add(purpleLight);

    // Electric Cyan Fill Light
    const cyanLight = new THREE.DirectionalLight(0x60a5fa, 2.5);
    cyanLight.position.set(-5, -3, 2);
    scene.add(cyanLight);

    // 4. Constructing the Infinite Token Ribbon (TorusKnot)
    // Parameters: radius, tube radius, tubular segments, radial segments, p, q
    // p=2, q=3 creates a classic elegant trefoil knot topology
    const geometry = new THREE.TorusKnotGeometry(1.6, 0.45, 120, 16, 2, 3);

    // Premium Technical Wireframe Mesh
    const material = new THREE.MeshStandardMaterial({
      color: 0x1e1b4b,          // Deep cosmic navy core
      emissive: 0x4c1d95,        // Soft internal purple glow
      metalness: 0.9,
      roughness: 0.2,
      wireframe: true,          // Renders it as a structured vector grid matrix
      transparent: true,
      opacity: 0.45,
    });

    const ribbonMesh = new THREE.Mesh(geometry, material);
    
    // Position it slightly offset to the right on layout initialization
    ribbonMesh.position.set(1.2, 0, 0);
    scene.add(ribbonMesh);

    // 5. Scroll Interaction Path Mapping
    let targetScrollPercent = 0;
    let targetX = 1.2;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScrollPercent = maxScroll > 0 ? scrollY / maxScroll : 0;

      // As the user scrolls down, the ribbon smoothly glides towards the left margin
      targetX = 1.2 - targetScrollPercent * 2.6;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // 6. Kinetic Frame Animation Loop
    const clock = new THREE.Clock();
    let currentScrollPercent = 0;

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Smooth interpolation for scroll speed bursts
      currentScrollPercent += (targetScrollPercent - currentScrollPercent) * 0.04;

      // Smooth positional drift updates
      ribbonMesh.position.x += (targetX - ribbonMesh.position.x) * 0.04;

      // CONSTANT MOVEMENT MECHANICS:
      // The ribbon spins continuously on its axis. 
      // Scrolling down the page acts like acceleration, spinning the track faster!
      ribbonMesh.rotation.y = elapsed * 0.15 + (currentScrollPercent * Math.PI);
      ribbonMesh.rotation.x = elapsed * 0.08 + (currentScrollPercent * 0.5);
      ribbonMesh.rotation.z = elapsed * 0.05;

      // Pulse the emissive glowing wireframe grids like active computation cycles
      material.opacity = 0.35 + Math.sin(elapsed * 2.0) * 0.1;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed", // Keeps canvas active across all page breakpoints
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1,         // Layers background element safely underneath landing copy
        pointerEvents: "none",
      }}
    />
  );
}