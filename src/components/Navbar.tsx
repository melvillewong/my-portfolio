import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ModeToggle from "./ModeToggle";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

export default function Navbar() {
	return (
		<header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 mx-auto items-center justify-between">
				<div className="flex items-center gap-2 mx-2 md:mx-0">
					<Link href="/" className="font-bold text-xl">
						Portfolio
					</Link>
				</div>

				<DesktopNavbar />
				<MobileNavbar />
			</div>
		</header>
	);
}
