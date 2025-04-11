import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/resource/projects";

function Projects() {
	return (
		<section id="projects" className="py-16 md:py-24 bg-muted/50">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							My Projects
						</h2>
						<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
							Check out some of my recent work
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project, index) => (
						<Card key={index} className="overflow-hidden">
							<div className="aspect-video relative overflow-hidden">
								<Image
									src={project.image || "/placeholder.svg"}
									alt={project.title}
									width={600}
									height={400}
									className="object-cover transition-transform duration-300 hover:scale-105"
								/>
							</div>
							<CardHeader>
								<CardTitle>{project.title}</CardTitle>
								<CardDescription>{project.description}</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex flex-wrap gap-2">
									{project.technologies.map((tech, index) => (
										<Badge key={index} variant="secondary">
											{tech}
										</Badge>
									))}
								</div>
							</CardContent>
							<CardFooter className="flex justify-between mt-auto">
								<Button variant="outline" size="sm" asChild>
									<Link
										href={`/projects/${project.slug}`}
										rel="noopener noreferrer"
									>
										View Details
									</Link>
								</Button>
								<div className="flex gap-2">
									{project.demoUrl && (
										<Button variant="ghost" size="sm" asChild>
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
										<Button variant="ghost" size="sm" asChild>
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
							</CardFooter>
						</Card>
					))}
				</div>
				<div className="flex justify-center mt-8">
					<Button variant="outline" asChild>
						<Link href="/projects">View All Projects</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
export default Projects;
