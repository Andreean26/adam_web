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
		title: 'Roomify Interior Design Platform',
		category: 'Web Development',
		description: 'A full-featured platform built with Next.js and Express.js.',
		image: '/images/data/roomify/roomify_dashboard.jpg',
		technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS', 'Express.js', 'firebase', 'MySQL', 'firestore'],
		link: '#',
		client: 'A Startup Client',
		role: 'Back-end Developer',
		period: 'Aug 2025 - Sept 2025',
		highlights: [
			'Implemented chat with Firebase Firestore',
			'jwt authentication and role-based access',
			'1000+ users with optimized queries',
		],
		live: 'https://www.roomify.asia/',
		repository: '',
		images: [
			'/images/data/roomify/roomify_dashboard.jpg',
			'/images/data/roomify/roomify_portfolio.jpg',
			'/images/data/roomify/roomify_chat.jpg',
			'/images/data/roomify/roomify_admin.jpg',
		],
	},
	{
		id: 2,
		title: 'WMS Clod Storage',
		category: 'Web Development',
		description: 'Web-based warehouse management system using React.js.',
		image: '/images/data/WMS/WMS_dashboard.jpg',
		technologies: ['React.js', 'Chakra UI', 'Typescript', 'vite'],
		link: '#',
		client: 'company internal',
		role: 'Front-end Developer',
		period: 'Oct 2025 - Oct 2025',
		highlights: [
			'dark mode support',
			'Responsive design with Chakra UI',
			'Efficient inventory management features',
		],
		live: '',
		repository: 'https://github.com/Andreean26/wms_fe',
		images: [
			'/images/data/WMS/WMS_dashboard.jpg',
			'/images/data/WMS/WMS_inventory.jpg',
			'/images/data/WMS/WMS_add_item.jpg',
			'/images/data/WMS/WMS_darkMode.jpg',
		],
	},
	{
		id: 3,
		title: 'Golang API Microservices',
		category: 'API Development',
		description: 'API microservices built with Golang for scalable applications.',
		image: '/images/data/playSpotter/playSpotter.jpg',
		technologies: ['GO', 'Gin', 'Gorm'],
		link: '#',
		client: 'private project',
		role: 'Back-end Developer',
		period: 'sept 2025 - oct 2025',
		highlights: [
			'JWT Authentication',
			'Event Discovery with Geolocation (Haversine distance calculation)',
			'Comprehensive API Documentation (Swagger)',
		],
		live: '',
		repository: 'https://github.com/Andreean26/PlaySpotter_be',
		images: [
			'/images/data/playSpotter/playSpotter.jpg',
			
		],
	},
	// {
	// 	id: 4,
	// 	title: 'Analytics Dashboard',
	// 	category: 'Web Development',
	// 	description: 'A comprehensive dashboard with real-time data visualization.',
	// 	image: '/placeholder-project-4.jpg',
	// 	technologies: ['Vue.js', 'D3.js', 'Node.js', 'PostgreSQL'],
	// 	link: '#',
	// 	client: 'DataPulse Inc.',
	// 	role: 'Frontend Engineer',
	// 	period: 'Nov 2024 - Jan 2025',
	// 	highlights: [
	// 		'Streaming charts with WebSockets',
	// 		'Custom theming and saved views',
	// 		'Row-level security with Postgres',
	// 	],
	// 	live: 'https://example.com/analytics',
	// 	repository: 'https://github.com/Andreean26/analytics-demo',
	// 	images: Array.from({ length: 4 }, (_, i) => svgPlaceholder(1200, 800, colorPalette[(3 + i) % colorPalette.length], `Analytics ${i + 1}`)),
	// },
	
];

export default projects;
