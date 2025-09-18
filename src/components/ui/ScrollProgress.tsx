"use client";

import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const calc = () => {
			const scrollTop = window.scrollY || document.documentElement.scrollTop;
			const height = document.documentElement.scrollHeight - window.innerHeight;
			const p = height > 0 ? scrollTop / height : 0;
			setProgress(p);
		};
		calc();
		window.addEventListener('scroll', calc, { passive: true });
		window.addEventListener('resize', calc);
		return () => {
			window.removeEventListener('scroll', calc);
			window.removeEventListener('resize', calc);
		};
	}, []);

	return (
		<div className="fixed top-0 left-0 right-0 h-[3px] z-[60]">
			<div
				className="h-full origin-left bg-gradient-to-r from-[var(--accent)] via-[var(--accent-2)] to-[var(--accent-3)] transition-[width] duration-75 ease-linear"
				style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
			/>
		</div>
	);
}
