type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	demoUrl: string | null;
	repoUrl: string;
};

export const projects: Project[] = [
	{
		title: "E-commerce Platform",
		description:
			"A full-featured online store with payment processing, user authentication, and inventory management.",
		image: "/placeholder.svg?height=400&width=600",
		tags: ["React", "Node.js", "MongoDB", "Stripe"],
		demoUrl: null,
		repoUrl: "#",
	},
	{
		title: "Task Management App",
		description:
			"A productivity application for teams to manage projects, tasks, and deadlines efficiently.",
		image: "/placeholder.svg?height=400&width=600",
		tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
		demoUrl: "#",
		repoUrl: "#",
	},
	{
		title: "Weather Dashboard",
		description:
			"Real-time weather information with interactive maps and forecasting capabilities.",
		image: "/placeholder.svg?height=400&width=600",
		tags: ["React", "Redux", "OpenWeather API", "Mapbox"],
		demoUrl: "#",
		repoUrl: "#",
	},
];
