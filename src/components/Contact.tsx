"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// In a real application, you would handle form submission here
		console.log("Form submitted:", formData);
		alert("Thank you for your message! I'll get back to you soon.");
		setFormData({ name: "", email: "", subject: "", message: "" });
	};

	return (
		<section id="contact" className="py-16 md:py-24 bg-muted/50">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Get In Touch
						</h2>
						<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
							Have a project in mind or want to chat? Feel free to reach out!
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
					<div className="space-y-6">
						<Card>
							<CardContent className="p-6">
								<div className="flex items-center space-x-4">
									<Mail className="h-6 w-6 text-primary" />
									<div>
										<h3 className="font-medium">Email</h3>
										<p className="text-sm text-muted-foreground">
											melvillewong14@gmail.com
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
						{/* <Card>
							<CardContent className="p-6">
								<div className="flex items-center space-x-4">
									<Phone className="h-6 w-6 text-primary" />
									<div>
										<h3 className="font-medium">Phone</h3>
										<p className="text-sm text-muted-foreground">
											+1 (555) 123-4567
										</p>
									</div>
								</div>
							</CardContent>
						</Card> */}
						<Card>
							<CardContent className="p-6">
								<div className="flex items-center space-x-4">
									<MapPin className="h-6 w-6 text-primary" />
									<div>
										<h3 className="font-medium">Location</h3>
										<p className="text-sm text-muted-foreground">
											Birmingham, UK
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
					<Card>
						<CardHeader>
							<CardTitle>Send a Message</CardTitle>
							<CardDescription>
								Fill out the form below and I'll get back to you as soon as
								possible.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit} className="space-y-4">
								<div className="space-y-2">
									<Input
										name="name"
										placeholder="Your Name"
										value={formData.name}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="space-y-2">
									<Input
										name="email"
										type="email"
										placeholder="Your Email"
										value={formData.email}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="space-y-2">
									<Input
										name="subject"
										placeholder="Subject"
										value={formData.subject}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="space-y-2">
									<Textarea
										name="message"
										placeholder="Your Message"
										className="min-h-[120px]"
										value={formData.message}
										onChange={handleChange}
										required
									/>
								</div>
								<Button type="submit" className="w-full">
									Send Message
								</Button>
							</form>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}

export default Contact;
