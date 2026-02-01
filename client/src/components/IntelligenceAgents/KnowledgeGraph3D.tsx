import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const KnowledgeGraph3D: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Scene Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
        camera.position.z = 150;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Parameters
        const particleCount = 160;
        const maxDistance = 65; // Increased connection distance
        const particlesGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const velocities: Array<{ x: number; y: number; z: number }> = [];

        // Initial positions & velocities
        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 300;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 300;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 300;

            velocities.push({
                x: (Math.random() - 0.5) * 0.08, // Slower (was 0.15)
                y: (Math.random() - 0.5) * 0.08,
                z: (Math.random() - 0.5) * 0.08
            });
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        // Particles Material
        const particlesMaterial = new THREE.PointsMaterial({
            color: '#D4A574',
            size: 2.0, // Slightly larger nodes
            transparent: true,
            opacity: 0.9,
            blending: THREE.AdditiveBlending
        });

        const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particleSystem);

        // Lines Geometry
        const linesGeometry = new THREE.BufferGeometry();
        const lineMaterial = new THREE.LineBasicMaterial({
            color: '#D4A574',
            transparent: true,
            opacity: 0.35, // More visible (was 0.15)
            blending: THREE.AdditiveBlending
        });
        const lineMesh = new THREE.LineSegments(linesGeometry, lineMaterial);
        scene.add(lineMesh);

        // Mouse interaction
        let mouseX = 0;
        let mouseY = 0;
        const handleMouseMove = (event: MouseEvent) => {
            // Increased responsiveness (Multiplier 0.05 -> 0.15)
            mouseX = (event.clientX - width / 2) * 0.15;
            mouseY = (event.clientY - height / 2) * 0.15;
        };

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Update particle positions
            const posAttr = particlesGeometry.attributes.position as THREE.BufferAttribute;
            for (let i = 0; i < particleCount; i++) {
                posAttr.array[i * 3] += velocities[i].x;
                posAttr.array[i * 3 + 1] += velocities[i].y;
                posAttr.array[i * 3 + 2] += velocities[i].z;

                // Bounce boundaries
                if (posAttr.array[i * 3] < -125 || posAttr.array[i * 3] > 125) velocities[i].x *= -1;
                if (posAttr.array[i * 3 + 1] < -125 || posAttr.array[i * 3 + 1] > 125) velocities[i].y *= -1;
                if (posAttr.array[i * 3 + 2] < -125 || posAttr.array[i * 3 + 2] > 125) velocities[i].z *= -1;
            }
            posAttr.needsUpdate = true;

            // Update Lines
            const linePositions = [];
            for (let i = 0; i < particleCount; i++) {
                for (let j = i + 1; j < particleCount; j++) {
                    const dx = posAttr.array[i * 3] - posAttr.array[j * 3];
                    const dy = posAttr.array[i * 3 + 1] - posAttr.array[j * 3 + 1];
                    const dz = posAttr.array[i * 3 + 2] - posAttr.array[j * 3 + 2];
                    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                    if (dist < maxDistance) {
                        linePositions.push(
                            posAttr.array[i * 3], posAttr.array[i * 3 + 1], posAttr.array[i * 3 + 2],
                            posAttr.array[j * 3], posAttr.array[j * 3 + 1], posAttr.array[j * 3 + 2]
                        );
                    }
                }
            }
            linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

            // Gentle scene rotation following mouse with increased damping/movement
            scene.rotation.y += (mouseX * 0.002 - scene.rotation.y) * 0.08;
            scene.rotation.x += (mouseY * 0.002 - scene.rotation.x) * 0.08;
            scene.rotation.z += 0.0003; // Slower background drift

            renderer.render(scene, camera);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
            renderer.dispose();
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            linesGeometry.dispose();
            lineMaterial.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply"
            style={{ filter: 'blur(0.5px)' }}
        />
    );
};

export default KnowledgeGraph3D;
