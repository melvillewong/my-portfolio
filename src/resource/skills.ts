import { Code, Database, Figma, Layout, Server, Terminal } from "lucide-react";

type SkillCategory = {
	title: string;
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	skills: string[];
};

export const skillCategories: SkillCategory[] = [
	{
		title: "Frontend Development",
		icon: Layout,
		skills: [
			"HTML/CSS",
			"JavaScript",
			"React",
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
		],
	},
	{
		title: "Backend Development",
		icon: Server,
		skills: [
			"Node.js",
			"Express",
			"Python",
			"Django",
			"RESTful APIs",
			"GraphQL",
		],
	},
	{
		title: "Database",
		icon: Database,
		skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Prisma"],
	},
	{
		title: "DevOps",
		icon: Terminal,
		skills: ["Git", "Docker", "CI/CD", "AWS", "Vercel", "Netlify"],
	},
	{
		title: "UI/UX Design",
		icon: Figma,
		skills: [
			"Figma",
			"Adobe XD",
			"Sketch",
			"Wireframing",
			"Prototyping",
			"User Research",
		],
	},
	{
		title: "Programming Languages",
		icon: Code,
		skills: ["JavaScript", "TypeScript", "Python", "Java", "C#", "PHP"],
	},
];
