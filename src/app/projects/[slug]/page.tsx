import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/resource/projects";

export function generateStaticParams() {
	return projects.map((project) => ({
		slug: project.slug,
	}));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
	const project = projects.find((p) => p.slug === params.slug);

	if (!project) {
		notFound();
	}

	const currentIndex = projects.findIndex((p) => p.slug === params.slug);
	const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
	const nextProject =
		currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

	return (
		<div className="container max-w-4xl py-12 mx-auto">
			<div className="mb-8">
				<Link
					href="/#projects"
					className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
				>
					<ArrowLeft className="mr-2 h-4 w-4" />
					Back to all projects
				</Link>
			</div>

			<div className="space-y-10">
				{/* Project Header */}
				<div className="space-y-4">
					<h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
					<p className="text-xl text-muted-foreground leading-7">
						{project.description}
					</p>

					<div className="flex flex-wrap gap-2 pt-2">
						{project.technologies.map((tech, index) => (
							<Badge key={index} variant="secondary" className="font-semibold">
								{tech}
							</Badge>
						))}
					</div>

					<div className="flex gap-4 pt-4">
						{project.demoUrl && (
							<Button asChild>
								<Link
									href={project.demoUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<ExternalLink className="mr-2 h-4 w-4" />
									Live Demo
								</Link>
							</Button>
						)}
						{project.repoUrl && (
							<Button variant="outline" asChild>
								<Link
									href={project.repoUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github className="mr-2 h-4 w-4" />
									View Code
								</Link>
							</Button>
						)}
					</div>
				</div>

				{/* Main Project Image */}
				<div className="overflow-hidden rounded-lg border">
					<Image
						src={project.image || "/placeholder.svg"}
						alt={project.title}
						width={1200}
						height={675}
						className="w-full object-cover"
					/>
				</div>

				{/* Project Details */}
				<div className="space-y-8">
					<div className="space-y-4">
						<h2 className="text-2xl font-bold">Overview</h2>
						<div className="prose max-w-none text-muted-foreground">
							<p className="leading-7">{project.overview}</p>
						</div>
					</div>

					<div className="grid gap-8 md:grid-cols-2">
						<div className="space-y-4">
							<h2 className="text-2xl font-bold">The Challenge</h2>
							<div className="prose max-w-none text-muted-foreground">
								<p className="leading-7">{project.challenge}</p>
							</div>
						</div>

						<div className="space-y-4">
							<h2 className="text-2xl font-bold">The Solution</h2>
							<div className="prose max-w-none text-muted-foreground">
								<p className="leading-7">{project.solution}</p>
							</div>
						</div>
					</div>

					{/* Project Gallery */}
					{project.gallery && project.gallery.length > 0 && (
						<div className="space-y-4">
							<h2 className="text-2xl font-bold">Project Gallery</h2>
							<div className="grid gap-4 sm:grid-cols-2">
								{project.gallery.map((image, index) => (
									<div
										key={index}
										className="overflow-hidden rounded-lg border"
									>
										<Image
											src={image.url || "/placeholder.svg"}
											alt={
												image.alt || `${project.title} screenshot ${index + 1}`
											}
											width={600}
											height={400}
											className="w-full object-cover"
										/>
									</div>
								))}
							</div>
						</div>
					)}

					{/* Key Features */}
					{project.features && project.features.length > 0 && (
						<div className="space-y-4">
							<h2 className="text-2xl font-bold">Key Features</h2>
							<ul className="list-inside list-disc space-y-2 text-muted-foreground">
								{project.features.map((feature, index) => (
									<li key={index} className="leading-7">
										{feature}
									</li>
								))}
							</ul>
						</div>
					)}

					{/* Results/Outcome */}
					{project.outcome && (
						<div className="space-y-4">
							<h2 className="text-2xl font-bold">Outcome</h2>
							<div className="prose max-w-none text-muted-foreground">
								<p className="leading-7">{project.outcome}</p>
							</div>
						</div>
					)}

					{/* Lessons Learned */}
					{project.lessons && (
						<div className="space-y-4">
							<h2 className="text-2xl font-bold">Lessons Learned</h2>
							<div className="prose max-w-none text-muted-foreground">
								<p className="leading-7">{project.lessons}</p>
							</div>
						</div>
					)}
				</div>

				{/* Project Navigation */}
				<Separator className="my-8" />

				<div className="flex items-center justify-between">
					{prevProject ? (
						<Button variant="outline" asChild>
							<Link
								href={`/projects/${prevProject.slug}`}
								className="flex items-center"
							>
								<ArrowLeft className="mr-2 h-4 w-4" />
								{prevProject.title}
							</Link>
						</Button>
					) : (
						<div></div>
					)}

					{nextProject ? (
						<Button variant="outline" asChild>
							<Link
								href={`/projects/${nextProject.slug}`}
								className="flex items-center"
							>
								{nextProject.title}
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					) : (
						<div></div>
					)}
				</div>

				{/* Call to Action */}
				<div className="mt-12 rounded-lg bg-muted p-8 text-center">
					<h2 className="mb-4 text-2xl font-bold">
						Interested in working together?
					</h2>
					<p className="mb-6 text-muted-foreground">
						I'm always open to discussing new projects and opportunities.
					</p>
					<Button asChild>
						<Link href="/#contact">Get in Touch</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
