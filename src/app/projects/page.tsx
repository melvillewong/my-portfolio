import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/resource/projects";

export default function ProjectsPage() {
	// Group projects by category
	const categories = [
		...new Set(projects.map((project) => project.category)),
	].filter(Boolean);

	return (
		<div className="container py-12 mx-auto">
			<div className="mb-12 space-y-4 text-center">
				<h1 className="text-4xl font-bold tracking-tight">My Projects</h1>
				<p className="mx-auto max-w-[700px] text-xl text-muted-foreground">
					A collection of my work across various technologies and domains
				</p>
			</div>

			<div className="space-y-20">
				{/* Featured Projects */}
				<section>
					<h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
					<div className="grid gap-12">
						{projects
							.filter((project) => project.featured)
							.map((project, index) => (
								<div
									key={project.slug}
									className={`grid gap-8 items-center ${
										index % 2 === 0
											? "lg:grid-cols-[1.5fr,1fr]"
											: "lg:grid-cols-[1fr,1.5fr] lg:grid-flow-dense"
									}`}
								>
									<div className="overflow-hidden rounded-lg border">
										<Image
											src={project.image || "/placeholder.svg"}
											alt={project.title}
											width={800}
											height={500}
											className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
										/>
									</div>
									<div className="space-y-4">
										<div className="space-y-2">
											<h3 className="text-2xl font-bold">{project.title}</h3>
											<p className="text-muted-foreground">
												{project.description}
											</p>
										</div>
										<div className="flex flex-wrap gap-2">
											{project.technologies.map((tech, i) => (
												<Badge key={i} variant="secondary">
													{tech}
												</Badge>
											))}
										</div>
										<div className="flex gap-4 pt-4">
											<Button asChild>
												<Link href={`/projects/${project.slug}`}>
													View Details
												</Link>
											</Button>
											<div className="flex gap-2">
												{project.demoUrl && (
													<Button variant="outline" size="icon" asChild>
														<Link
															href={project.demoUrl}
															target="_blank"
															rel="noopener noreferrer"
														>
															<ExternalLink className="h-4 w-4" />
															<span className="sr-only">Demo</span>
														</Link>
													</Button>
												)}
												{project.repoUrl && (
													<Button variant="outline" size="icon" asChild>
														<Link
															href={project.repoUrl}
															target="_blank"
															rel="noopener noreferrer"
														>
															<Github className="h-4 w-4" />
															<span className="sr-only">Code</span>
														</Link>
													</Button>
												)}
											</div>
										</div>
									</div>
								</div>
							))}
					</div>
				</section>

				{/* All Projects by Category */}
				{categories.map((category) => (
					<section key={category}>
						<h2 className="text-2xl font-bold mb-8">{category}</h2>
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
							{projects
								.filter(
									(project) =>
										project.category === category && !project.featured,
								)
								.map((project) => (
									<div
										key={project.slug}
										className="group relative flex flex-col overflow-hidden rounded-lg border bg-background transition-colors hover:bg-accent/50"
									>
										<div className="aspect-video relative overflow-hidden">
											<Image
												src={project.image || "/placeholder.svg"}
												alt={project.title}
												width={600}
												height={400}
												className="object-cover transition-transform duration-300 group-hover:scale-105"
											/>
										</div>
										<div className="flex flex-1 flex-col justify-between p-6">
											<div className="space-y-2">
												<h3 className="font-bold">{project.title}</h3>
												<p className="text-sm text-muted-foreground line-clamp-2">
													{project.description}
												</p>
											</div>
											<div className="mt-4 flex flex-wrap gap-2">
												{project.technologies.slice(0, 3).map((tech, i) => (
													<Badge
														key={i}
														variant="outline"
														className="bg-background"
													>
														{tech}
													</Badge>
												))}
												{project.technologies.length > 3 && (
													<Badge variant="outline" className="bg-background">
														+{project.technologies.length - 3}
													</Badge>
												)}
											</div>
											<div className="mt-6">
												<Button asChild className="w-full">
													<Link href={`/projects/${project.slug}`}>
														View Project
													</Link>
												</Button>
											</div>
										</div>
									</div>
								))}
						</div>
					</section>
				))}

				{/* Projects without categories */}
				{projects.filter((project) => !project.category && !project.featured)
					.length > 0 && (
					<section>
						<h2 className="text-2xl font-bold mb-8">Other Projects</h2>
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
							{projects
								.filter((project) => !project.category && !project.featured)
								.map((project) => (
									<div
										key={project.slug}
										className="group relative flex flex-col overflow-hidden rounded-lg border bg-background transition-colors hover:bg-accent/50"
									>
										<div className="aspect-video relative overflow-hidden">
											<Image
												src={project.image || "/placeholder.svg"}
												alt={project.title}
												width={600}
												height={400}
												className="object-cover transition-transform duration-300 group-hover:scale-105"
											/>
										</div>
										<div className="flex flex-1 flex-col justify-between p-6">
											<div className="space-y-2">
												<h3 className="font-bold">{project.title}</h3>
												<p className="text-sm text-muted-foreground line-clamp-2">
													{project.description}
												</p>
											</div>
											<div className="mt-4 flex flex-wrap gap-2">
												{project.technologies.slice(0, 3).map((tech, i) => (
													<Badge
														key={i}
														variant="outline"
														className="bg-background"
													>
														{tech}
													</Badge>
												))}
												{project.technologies.length > 3 && (
													<Badge variant="outline" className="bg-background">
														+{project.technologies.length - 3}
													</Badge>
												)}
											</div>
											<div className="mt-6">
												<Button asChild className="w-full">
													<Link href={`/projects/${project.slug}`}>
														View Project
													</Link>
												</Button>
											</div>
										</div>
									</div>
								))}
						</div>
					</section>
				)}
			</div>
		</div>
	);
}
