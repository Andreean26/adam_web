"use client";

import React, { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		let raf = 0;
		const layers = Array.from(el.querySelectorAll<HTMLElement>('[data-speed]'));

		const onScroll = () => {
			const y = window.scrollY || 0;
			layers.forEach((layer) => {
				const speed = parseFloat(layer.dataset.speed || '0');
				layer.style.transform = `translateY(${y * speed}px)`;
			});
		};

		const loop = () => {
			onScroll();
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		return () => cancelAnimationFrame(raf);
	}, []);

	return (
		<div ref={containerRef} className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
			{/* Animated soft gradient */}
			<div className="absolute inset-0 bg-animated-gradient opacity-60" aria-hidden="true" />

			{/* Morphing blobs */}
			<div className="blob blob-1" data-speed="0.06" aria-hidden="true" />
			<div className="blob blob-2" data-speed="0.04" aria-hidden="true" />
			<div className="blob blob-3" data-speed="0.03" aria-hidden="true" />
		</div>
	);
}
