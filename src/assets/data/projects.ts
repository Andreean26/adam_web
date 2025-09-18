export type Project = {
	id: number;
	title: string;
	category: string;
	description: string;
	image: string;
	technologies: string[];
	link: string;
	images?: string[];
	client?: string;
	role?: string;
	period?: string;
	highlights?: string[];
	live?: string;
	repository?: string;
};

const colorPalette = ['#22d3ee', '#a78bfa', '#fb7185', '#0ea5e9', '#7c3aed'];

function svgPlaceholder(width: number, height: number, bg: string, text: string) {
	const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'>
		<defs>
			<linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
				<stop offset='0%' stop-color='${bg}' stop-opacity='0.35' />
				<stop offset='100%' stop-color='${bg}' stop-opacity='0.15' />
			</linearGradient>
		</defs>
		<rect width='100%' height='100%' fill='url(#g)'/>
		<rect x='8' y='8' width='${width - 16}' height='${height - 16}' rx='16' ry='16' fill='none' stroke='${bg}' stroke-opacity='0.35' stroke-width='2'/>
		<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Segoe UI, Roboto, Arial' font-size='${Math.floor(Math.min(width, height) / 14)}' fill='${bg}' fill-opacity='0.9'>${text}</text>
	</svg>`;
	return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export const projects: Project[] = [
	{
		id: 1,
		title: 'E-Commerce Platform',
		category: 'Web Development',
		description: 'A full-featured platform built with Next.js and secure payment integration.',
		image: '/placeholder-project-1.jpg',
		technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
		link: '#',
		client: 'Acme Retail Co.',
		role: 'Full-Stack Developer',
		period: 'Jan 2025 - Mar 2025',
		highlights: [
			'Implemented SSR/ISR for fast product pages',
			'Integrated secure Stripe payments and webhooks',
			'Built admin dashboard for catalog and orders',
		],
		live: 'https://example.com/ecommerce',
		repository: 'https://github.com/Andreean26/ecommerce-demo',
		images: Array.from({ length: 4 }, (_, i) => svgPlaceholder(1200, 800, colorPalette[(0 + i) % colorPalette.length], `E-Commerce ${i + 1}`)),
	},
	{
		id: 2,
		title: 'Task Manager App',
		category: 'Mobile Development',
		description: 'A cross-platform task management application with real-time sync.',
		image: '/placeholder-project-2.jpg',
		technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
		link: '#',
		client: 'Productivity Labs',
		role: 'Mobile Engineer',
		period: 'Aug 2024 - Oct 2024',
		highlights: [
			'Offline-first with background sync',
			'Push notifications and reminders',
			'Real-time collaboration on lists',
		],
		live: 'https://example.com/task-manager',
		repository: 'https://github.com/Andreean26/task-manager-demo',
		images: Array.from({ length: 4 }, (_, i) => svgPlaceholder(1200, 800, colorPalette[(1 + i) % colorPalette.length], `Task Manager ${i + 1}`)),
	},
	{
		id: 3,
		title: 'Creative Portfolio',
		category: 'UI/UX Design',
		description: 'A portfolio website for a digital agency with smooth animations.',
		image: '/placeholder-project-3.jpg',
		technologies: ['React', 'Framer Motion', 'GSAP', 'Sass'],
		link: '#',
		client: 'Studio Nova',
		role: 'Frontend Engineer',
		period: 'May 2024 - Jun 2024',
		highlights: [
			'Micro-interactions with Framer Motion',
			'Optimized Lighthouse Performance 95+',
			'CMS-driven case studies',
		],
		live: 'https://example.com/creative-portfolio',
		repository: 'https://github.com/Andreean26/portfolio-demo',
		images: Array.from({ length: 4 }, (_, i) => svgPlaceholder(1200, 800, colorPalette[(2 + i) % colorPalette.length], `Portfolio ${i + 1}`)),
	},
	{
		id: 4,
		title: 'Analytics Dashboard',
		category: 'Web Development',
		description: 'A comprehensive dashboard with real-time data visualization.',
		image: '/placeholder-project-4.jpg',
		technologies: ['Vue.js', 'D3.js', 'Node.js', 'PostgreSQL'],
		link: '#',
		client: 'DataPulse Inc.',
		role: 'Frontend Engineer',
		period: 'Nov 2024 - Jan 2025',
		highlights: [
			'Streaming charts with WebSockets',
			'Custom theming and saved views',
			'Row-level security with Postgres',
		],
		live: 'https://example.com/analytics',
		repository: 'https://github.com/Andreean26/analytics-demo',
		images: Array.from({ length: 4 }, (_, i) => svgPlaceholder(1200, 800, colorPalette[(3 + i) % colorPalette.length], `Analytics ${i + 1}`)),
	},
	{
		id: 5,
		title: 'Food Delivery App',
		category: 'Mobile Development',
		description: 'A food delivery application with live GPS tracking and multiple payment options.',
		image: '/placeholder-project-5.jpg',
		technologies: ['Flutter', 'Firebase', 'Google Maps', 'PayPal'],
		link: '#',
		client: 'QuickEats',
		role: 'Mobile Engineer',
		period: 'Jan 2024 - Apr 2024',
		highlights: [
			'Live courier tracking on maps',
			'Coupons and promo engine',
			'A/B tested checkout flow',
		],
		live: 'https://example.com/food-delivery',
		repository: 'https://github.com/Andreean26/food-delivery-demo',
		images: Array.from({ length: 4 }, (_, i) => svgPlaceholder(1200, 800, colorPalette[(4 + i) % colorPalette.length], `Food Delivery ${i + 1}`)),
	},
	{
		id: 6,
		title: 'Learning Platform',
		category: 'Web Development',
		description: 'An online learning platform with video streaming and progress tracking.',
		image: '/placeholder-project-6.jpg',
		technologies: ['Django', 'React', 'AWS', 'PostgreSQL'],
		link: '#',
		client: 'EduFlow',
		role: 'Full-Stack Developer',
		period: 'Sep 2024 - Dec 2024',
		highlights: [
			'HLS video streaming with CDN',
			'Gamified progress and badges',
			'Multi-tenant org support',
		],
		live: 'https://example.com/learning',
		repository: 'https://github.com/Andreean26/learning-platform-demo',
		images: Array.from({ length: 4 }, (_, i) => svgPlaceholder(1200, 800, colorPalette[(5 + i) % colorPalette.length], `Learning ${i + 1}`)),
	},
];

export default projects;
