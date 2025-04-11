import Link from "next/link";
import { Button } from "@/components/ui/button";

function NotFound() {
	return (
		<div className="container flex my-auto flex-col items-center justify-center mx-auto">
			<div className="text-center">
				<h1 className="text-6xl font-bold">404</h1>
				<h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
				<p className="mt-2 text-muted-foreground">
					The page you're looking for doesn't exist or has been moved.
				</p>
				<Button asChild className="mt-8">
					<Link href="/">Go Back Home</Link>
				</Button>
			</div>
		</div>
	);
}

export default NotFound;
