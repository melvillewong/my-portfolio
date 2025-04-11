import Link from "next/link";
import { Button } from "./ui/button";
import ModeToggle from "./ModeToggle";

function DesktopNavbar() {
	return (
		<nav className="hidden md:flex items-center space-x-12">
			<ModeToggle />
			<Link
				href="/#about"
				className="text-sm font-medium hover:text-primary transition-colors"
			>
				About
			</Link>
			<Link
				href="/projects"
				className="text-sm font-medium hover:text-primary transition-colors"
			>
				Projects
			</Link>
			<Link
				href="/#skills"
				className="text-sm font-medium hover:text-primary transition-colors"
			>
				Skills
			</Link>
			<Link
				href="/#contact"
				className="text-sm font-medium hover:text-primary transition-colors"
			>
				Contact
			</Link>
			<Button>Resume</Button>
		</nav>
	);
}

export default DesktopNavbar;
