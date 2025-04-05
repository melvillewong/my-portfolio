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
									{project.tags.map((tag, tagIndex) => (
										<Badge key={tagIndex} variant="secondary">
											{tag}
										</Badge>
									))}
								</div>
							</CardContent>
							<CardFooter className="flex justify-between mt-auto">
								{project.demoUrl && (
									<Button variant="outline" size="sm" asChild>
										<Link
											href={project.demoUrl}
											target="_blank"
											rel="noopener noreferrer"
										>
											<ExternalLink className="mr-2 h-4 w-4" />
											Demo
										</Link>
									</Button>
								)}
								<Button variant="outline" size="sm" className="ml-auto" asChild>
									<Link
										href={project.repoUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Github className="mr-2 h-4 w-4" />
										Code
									</Link>
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
				<div className="flex justify-center mt-8">
					<Button variant="outline" asChild>
						<Link href="#">View All Projects</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
export default Projects;
