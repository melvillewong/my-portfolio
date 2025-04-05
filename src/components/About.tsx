import Image from "next/image";
import { Card, CardContent } from "./ui/card";

function About() {
	return (
		<section id="about" className="py-16 md:py-24">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							About Me
						</h2>
						<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
							Get to know me and my background
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
					<div className="flex justify-center">
						<div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary">
							<Image
								src="/placeholder.svg?height=320&width=320"
								alt="Profile"
								width={320}
								height={320}
								className="object-cover"
							/>
						</div>
					</div>
					<div className="flex flex-col justify-center space-y-4">
						<div className="space-y-4">
							<h3 className="text-2xl font-bold">Who am I?</h3>
							<p className="text-muted-foreground">
								I'm a passionate Full Stack Developer with over 2 years of
								experience creating web applications. I specialize in
								JavaScript, React, Node.js, and modern web technologies.
							</p>
							<p className="text-muted-foreground">
								My journey in tech began when I built my first website at 18.
								Since then, I've worked with startups and established companies
								to deliver high-quality software solutions.
							</p>
							<p className="text-muted-foreground">
								When I'm not coding, you can find me hiking, reading sci-fi
								novels, or experimenting with new recipes.
							</p>
						</div>
						<div className="grid grid-cols-2 gap-4 pt-4">
							<Card>
								<CardContent className="p-4">
									<div className="text-2xl font-bold">2+</div>
									<p className="text-sm text-muted-foreground">
										Years Experience
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="p-4">
									<div className="text-2xl font-bold">5+</div>
									<p className="text-sm text-muted-foreground">
										Projects Completed
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
