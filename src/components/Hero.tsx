import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

function Hero() {
	return (
		<section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/50">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="flex flex-col items-center gap-4 text-center">
					<div className="space-y-2">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
							Hi, I'm <span className="text-primary">Melville</span>
						</h1>
						<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
							Full Stack Developer specializing in building exceptional digital
							experiences
						</p>
					</div>
					<div className="flex flex-col sm:flex-row gap-3 min-[400px]:flex-row">
						<Button asChild>
							<Link href="#projects">
								View My Work
								{/* <ArrowRight className="ml-2 h-4 w-4" /> */}
							</Link>
						</Button>
						<Button variant="outline" asChild>
							<Link href="#contact">Contact Me</Link>
						</Button>
					</div>
					<div className="flex items-center justify-center gap-4 mt-6">
						<Button variant="ghost" size="icon" asChild>
							<Link
								href="https://github.com/melvillewong"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Github className="h-5 w-5" />
								<span className="sr-only">GitHub</span>
							</Link>
						</Button>
						<Button variant="ghost" size="icon" asChild>
							<Link
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Linkedin className="h-5 w-5" />
								<span className="sr-only">LinkedIn</span>
							</Link>
						</Button>
						{/* <Button variant="ghost" size="icon" asChild>
							<Link
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Twitter className="h-5 w-5" />
								<span className="sr-only">Twitter</span>
							</Link>
						</Button> */}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
