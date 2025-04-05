import { skillCategories } from "@/resource/skills";
import { Card, CardContent } from "./ui/card";

function Skills() {
	return (
		<section id="skills" className="py-16 md:py-24">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							My Skills
						</h2>
						<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
							Technologies and tools I work with
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
					{skillCategories.map((category, index) => (
						<Card key={index} className="overflow-hidden">
							<CardContent className="p-6">
								<div className="flex flex-col items-center space-y-4">
									<div className="rounded-full bg-muted p-3">
										<category.icon className="h-8 w-8 text-primary" />
									</div>
									<h3 className="text-lg font-bold text-center">
										{category.title}
									</h3>
									<ul className="text-center text-sm text-muted-foreground">
										{category.skills.map((skill, skillIndex) => (
											<li key={skillIndex} className="py-1">
												{skill}
											</li>
										))}
									</ul>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}

export default Skills;
