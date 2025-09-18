"use client";

import React, { useEffect, useState } from 'react';

export default function BackToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setVisible(window.scrollY > 600);
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<button
			type="button"
			aria-label="Back to top"
			onClick={scrollTop}
			className={
				`fixed bottom-6 right-6 z-[55] rounded-full w-12 h-12 flex items-center justify-center border border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-md text-[var(--foreground)] shadow-lg transition-all duration-300 hover:text-[var(--accent)] hover:border-[var(--accent)] ` +
				(visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none')
			}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="w-5 h-5"
			>
				<path d="M12 19V5" />
				<path d="M5 12l7-7 7 7" />
			</svg>
		</button>
	);
}
