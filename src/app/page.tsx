import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
	return (
		<div>
			<div className="min-h-screen flex flex-col">
				<Navbar />
				<main className="flex-1">
					<Hero />
					<About />
					<Projects />
					<Skills />
					<Contact />
				</main>
				<Footer />
			</div>
		</div>
	);
}
