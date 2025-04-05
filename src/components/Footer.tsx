import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

function Footer() {
	return (
		<footer className="border-t bg-background">
			<div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 mx-auto">
				<div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
					<p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
						© {new Date().getFullYear()} Your Name. All rights reserved.
					</p>
				</div>
				<div className="flex items-center justify-center gap-4">
					<Button variant="ghost" size="icon" asChild>
						<Link
							href="https://github.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Github className="h-4 w-4" />
							<span className="sr-only">GitHub</span>
						</Link>
					</Button>
					<Button variant="ghost" size="icon" asChild>
						<Link
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Linkedin className="h-4 w-4" />
							<span className="sr-only">LinkedIn</span>
						</Link>
					</Button>
					{/* <Button variant="ghost" size="icon" asChild>
						<Link
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Twitter className="h-4 w-4" />
							<span className="sr-only">Twitter</span>
						</Link>
					</Button> */}
					{/* <Button variant="ghost" size="icon" asChild>
						<Link href="mailto:melvillewong14@gmail.com">
							<Mail className="h-4 w-4" />
							<span className="sr-only">Email</span>
						</Link>
					</Button> */}
				</div>
			</div>
		</footer>
	);
}

export default Footer;
