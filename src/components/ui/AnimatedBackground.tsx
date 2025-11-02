"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function AnimatedBackground() {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Delay animation start for better initial load
		const timer = setTimeout(() => setIsVisible(true), 100);
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		if (!isVisible) return;
		
		const el = containerRef.current;
		if (!el) return;

		let raf = 0;
		let ticking = false;
		const layers = Array.from(el.querySelectorAll<HTMLElement>('[data-speed]'));

		const onScroll = () => {
			if (!ticking) {
				raf = requestAnimationFrame(() => {
					const y = window.scrollY || 0;
					layers.forEach((layer) => {
						const speed = parseFloat(layer.dataset.speed || '0');
						layer.style.transform = `translate3d(0, ${y * speed}px, 0)`;
					});
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll(); // Initial position
		
		return () => {
			window.removeEventListener('scroll', onScroll);
			cancelAnimationFrame(raf);
		};
	}, [isVisible]);

	if (!isVisible) return null;

	return (
		<div ref={containerRef} className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
			{/* Animated soft gradient */}
			<div 
				className="absolute inset-0 bg-animated-gradient opacity-60" 
				aria-hidden="true"
				style={{ willChange: 'transform' }}
			/>

			{/* Morphing blobs - optimized with will-change and transform3d */}
			<div 
				className="blob blob-1" 
				data-speed="0.06" 
				aria-hidden="true"
				style={{ willChange: 'transform' }}
			/>
			<div 
				className="blob blob-2" 
				data-speed="0.04" 
				aria-hidden="true"
				style={{ willChange: 'transform' }}
			/>
			<div 
				className="blob blob-3" 
				data-speed="0.03" 
				aria-hidden="true"
				style={{ willChange: 'transform' }}
			/>
		</div>
	);
}
