type Project = {
	title: string;
	slug: string;
	description: string;
	image: string;
	technologies: string[];
	category: string;
	date: string;
	demoUrl: string | null;
	repoUrl: string;
	overview: string;
	featured: boolean;
	challenge: string;
	solution: string;
	features: string[];
	gallery: { url: string; alt: string }[];
	outcome: string;
	lessons: string;
};

export const projects: Project[] = [
	{
		title: "E-commerce Platform",
		slug: "ecommerce-platform",
		description:
			"A full-featured online store with payment processing, user authentication, and inventory management.",
		image: "/favicon.ico?height=600&width=1200",
		technologies: ["React", "Node.js", "MongoDB", "Stripe"],
		category: "Web Application",
		date: "2024-06-15",
		demoUrl: "https://example.com/demo",
		repoUrl: "https://github.com/yourusername/ecommerce-platform",
		overview:
			"This e-commerce platform provides businesses with a complete solution for selling products online. It includes product management, shopping cart functionality, secure checkout with Stripe, user authentication, and order tracking.",
		featured: true,
		challenge:
			"The main challenge was creating a seamless shopping experience while ensuring the platform could handle high traffic and maintain security for payment processing. Additionally, the client needed a flexible admin dashboard to manage products, inventory, and orders.",
		solution:
			"I built a React frontend with a Node.js backend, using MongoDB for data storage. The application uses JWT for authentication and integrates with Stripe for payment processing. The admin dashboard provides comprehensive tools for managing all aspects of the store.",
		features: [
			"User authentication and profile management",
			"Product catalog with search and filtering",
			"Shopping cart and wishlist functionality",
			"Secure checkout with Stripe integration",
			"Order tracking and history",
			"Admin dashboard for product and order management",
			"Inventory tracking with low stock alerts",
			"Responsive design for all devices",
		],
		gallery: [
			{
				url: "/favicon.ico?height=400&width=600",
				alt: "Product listing page",
			},
			{ url: "/favicon.ico?height=400&width=600", alt: "Shopping cart" },
			{ url: "/favicon.ico?height=400&width=600", alt: "Checkout process" },
			{ url: "/favicon.ico?height=400&width=600", alt: "Admin dashboard" },
		],
		outcome:
			"The platform has processed over 10,000 orders since launch, with a 25% increase in conversion rate compared to the client's previous solution. The admin dashboard has reduced product management time by 40%.",
		lessons:
			"This project taught me the importance of optimizing database queries for e-commerce applications and the complexities of implementing a secure payment system. I also gained valuable experience in creating intuitive admin interfaces that simplify complex operations.",
	},
	{
		title: "Task Management App",
		slug: "task-management-app",
		description:
			"A productivity application for teams to manage projects, tasks, and deadlines efficiently.",
		image: "/favicon.ico?height=600&width=1200",
		technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
		category: "Mobile Application",
		date: "2024-06-14",
		demoUrl: "https://example.com/demo",
		repoUrl: "https://github.com/yourusername/task-management-app",
		overview:
			"This task management application helps teams organize their work, track progress, and meet deadlines. It features project boards, task assignments, due date tracking, and team collaboration tools.",
		featured: false,
		challenge:
			"The client needed a solution that would replace multiple tools they were using for project management. They required real-time updates, integration with their existing calendar systems, and a way to visualize project progress.",
		solution:
			"I developed a Next.js application with TypeScript for type safety, using Prisma with PostgreSQL for data management. The app includes real-time updates with WebSockets, calendar integrations, and customizable Kanban boards for visualizing workflows.",
		features: [
			"Project boards with customizable columns",
			"Task creation with descriptions, attachments, and comments",
			"Task assignments and due date tracking",
			"Real-time updates and notifications",
			"Calendar integration and timeline views",
			"Team management and permission controls",
			"Time tracking and reporting",
			"Mobile-responsive design",
		],
		gallery: [
			{
				url: "/favicon.ico?height=400&width=600",
				alt: "Project dashboard",
			},
			{
				url: "/favicon.ico?height=400&width=600",
				alt: "Kanban board view",
			},
			{ url: "/favicon.ico?height=400&width=600", alt: "Task detail page" },
			{
				url: "/favicon.ico?height=400&width=600",
				alt: "Calendar integration",
			},
		],
		outcome:
			"The application has been adopted by 15 teams within the client's organization, resulting in a 30% reduction in missed deadlines and improved team collaboration according to internal surveys.",
		lessons:
			"This project reinforced the importance of user research in creating intuitive interfaces. I learned valuable lessons about state management in complex applications and techniques for optimizing database queries for real-time data.",
	},
	{
		title: "Weather Dashboard",
		slug: "weather-dashboard",
		description:
			"Real-time weather information with interactive maps and forecasting capabilities.",
		image: "/favicon.ico?height=600&width=1200",
		technologies: ["React", "Redux", "OpenWeather API", "Mapbox"],
		category: "Website",
		date: "2025-01-01",
		demoUrl: "https://example.com/demo",
		repoUrl: "https://github.com/yourusername/weather-dashboard",
		overview:
			"This weather dashboard provides users with current conditions and forecasts for any location worldwide. It features interactive maps, hourly and daily forecasts, and severe weather alerts.",
		featured: false,
		challenge:
			"The main challenge was creating an intuitive interface that could display complex weather data in an easily understandable format. Additionally, the application needed to handle location detection, unit conversion, and integration with multiple weather data sources.",
		solution:
			"I built a React application with Redux for state management, integrating the OpenWeather API for weather data and Mapbox for interactive maps. The dashboard includes data visualization components for temperature, precipitation, wind, and other weather metrics.",
		features: [
			"Current conditions and forecasts for any location",
			"Interactive weather maps with various layers",
			"Hourly, daily, and 10-day forecast views",
			"Severe weather alerts and notifications",
			"Location search and favorites",
			"Automatic location detection",
			"Temperature and measurement unit conversion",
			"Responsive design for desktop and mobile",
		],
		gallery: [
			{ url: "/favicon.ico?height=400&width=600", alt: "Main dashboard" },
			{
				url: "/favicon.ico?height=400&width=600",
				alt: "Interactive weather map",
			},
			{ url: "/favicon.ico?height=400&width=600", alt: "Forecast view" },
			{ url: "/favicon.ico?height=400&width=600", alt: "Mobile interface" },
		],
		outcome:
			"The dashboard has attracted over 5,000 monthly active users since launch, with users spending an average of 4 minutes per session exploring weather data.",
		lessons:
			"This project taught me effective techniques for data visualization and the importance of performance optimization when working with real-time data and interactive maps. I also gained experience in creating intuitive mobile interfaces for complex applications.",
	},
];
