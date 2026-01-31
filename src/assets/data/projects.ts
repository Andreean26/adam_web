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
	{
		id: 4,
		title: 'PokeDex Web App',
		category: 'Web Development',
		description: 'Collection of Pokémon data using React and PokeAPI.',
		image: '/images/data/pokemon/pokemon.jpg',
		technologies: ['svelte', 'TypeScript', 'Tailwind CSS', 'PokeAPI'],
		link: '#',
		client: 'private project',
		role: 'Front-end Developer',
		period: 'Aug 2024 - Aug 2025',
		highlights: [
			'Complete Pokédex with search and filter',
			'Responsive design for all devices',
			'Favorite Pokémon feature with local storage',
		],
		live: 'https://pokemon-favoritku.vercel.app/',
		repository: 'https://github.com/Andreean26/pokemon_favoritku',
		images: [
			'/images/data/pokemon/pokemon.jpg',
		],
	},
	
];

export default projects;
