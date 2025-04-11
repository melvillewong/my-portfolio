"use client";

import {
	BellIcon,
	HomeIcon,
	LogOutIcon,
	MenuIcon,
	MoonIcon,
	SunIcon,
	UserIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

function MobileNavbar() {
	const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
	const { theme, setTheme } = useTheme();

	return (
		<div className="flex md:hidden items-center space-x-2">
			<Button
				variant="ghost"
				size="icon"
				onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
				className="mr-2"
			>
				<SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
				<MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
				<span className="sr-only">Toggle theme</span>
			</Button>

			<Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon">
						<MenuIcon className="h-5 w-5" />
					</Button>
				</SheetTrigger>
				<SheetContent side="right" className="w-[300px]">
					<SheetHeader>
						<SheetTitle>Menu</SheetTitle>
					</SheetHeader>
					<nav className="flex flex-col space-y-4 mt-0">
						<Button
							variant="ghost"
							className="flex items-center gap-3 justify-start"
							asChild
						>
							<Link href="/">
								<HomeIcon className="w-4 h-4" />
								Home
							</Link>
						</Button>

						<Button
							variant="ghost"
							className="flex items-center gap-3 justify-start"
							asChild
						>
							<Link href="/#about">
								<BellIcon className="w-4 h-4" />
								About
							</Link>
						</Button>
						<Button
							variant="ghost"
							className="flex items-center gap-3 justify-start"
							asChild
						>
							<Link href="/projects">
								<UserIcon className="w-4 h-4" />
								Projects
							</Link>
						</Button>
						<Button
							variant="ghost"
							className="flex items-center gap-3 justify-start"
							asChild
						>
							<Link href="/#skills">
								<UserIcon className="w-4 h-4" />
								Skills
							</Link>
						</Button>
						<Button
							variant="ghost"
							className="flex items-center gap-3 justify-start"
							asChild
						>
							<Link href="/#contact">
								<UserIcon className="w-4 h-4" />
								Contact
							</Link>
						</Button>
						<Button
							variant="ghost"
							className="flex items-center gap-3 justify-start"
							asChild
						>
							<Link href="">
								<UserIcon className="w-4 h-4" />
								Resume
							</Link>
						</Button>
					</nav>
				</SheetContent>
			</Sheet>
		</div>
	);
}

export default MobileNavbar;
