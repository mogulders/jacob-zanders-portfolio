"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Code2, Search, Github, ExternalLink } from "lucide-react";

export default function ProjectsPage() {
    const [projects, setProjects] = useState<any[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    const categories = [
        { id: "all", label: "All Projects" },
        { id: "web", label: "Web Apps" },
        { id: "mobile", label: "Mobile" },
        { id: "library", label: "Libraries" },
    ];

    useEffect(() => {
        async function loadProjects() {
            // Hardcoded featured projects
            const hardcodedProjects = [
                {
                    id: "readme-adsense",
                    title: "Readme Adsense",
                    description:
                        "Ethical monetization platform for open-source documentation",
                    long_description: `Readme Adsense was born from a personal need I experienced as an indie developer.

After publishing a Node.js package that quietly gained steady traction — averaging 400 downloads per week for over 3 years — I started wishing for a sustainable way to generate revenue from open-source work.

The challenge? I wanted to monetize without ever compromising the open-source spirit: no paywalls, no selling the code, no restrictions on usage.

This frustration led me to create Readme-AdSense: a lightweight, ethical platform that lets developers earn from their open-source project documentation.

How it works is intentionally simple:

Developers upload or paste their README files into the platform. Readme-AdSense then generates unique, shareable links. When other developers or users view the documentation through these links, they see a monetized version — and the project owner earns passive ad revenue.

It's very similar to how bloggers monetize content, but optimized for technical audiences that typically deliver much higher CPMs (cost per mille).

The platform takes care of everything behind the scenes: intelligent ad serving, performance optimization, and automatic payouts through Stripe and PayPal.

This project showcases my skills in modern web development, secure payment processing, third-party API integrations, and — most importantly — building practical tools that truly respect open-source principles.`,
                    image_url:
                        "/project-images/Readme-Adsense-Portfolio-Screenshot.png",
                    technologies: [
                        "Next.js",
                        "Vercel",
                        "Stripe",
                        "PayPal",
                        "Shadcn",
                        "Google Cloud Platform",
                        "Firebase",
                        "Firebase Functions",
                        "Firebase Hosting",
                        "Firebase Authentication",
                        "TinyAdz",
                        "API Routes",
                        "TypeScript",
                    ],
                    category: "web",
                    featured: true,
                    order_index: 0,
                    demo_url: "https://www.readme-adsense.com/",
                    github_url: null,
                },
                {
                    id: "neighbored-app",
                    title: "Neighbored App",
                    description:
                        "Mobile and web app connecting rural communities with local events and opportunities",
                    long_description: `Neighbored is a mobile and web application dedicated to strengthening rural communities by connecting residents with local events, boosting awareness, participation, and that special small-town spirit.

Growing up in rural Iowa, I witnessed how challenging it can be to stay informed about local happenings — information is often scattered across flyers, social media groups, and word-of-mouth.

Neighbored solves this by creating one central, user-friendly hub that helps communities showcase and discover what makes their towns special.

Discover Local Events — Users can effortlessly browse events in their town and surrounding areas, with a customizable search radius of up to 100 miles. Powered by the Google Maps SDK, the app intelligently surfaces relevant happenings based on your location — ensuring you never miss a community gathering.

These lively fairs, festivals, and celebrations are the heart of rural life — and Neighbored brings them front and center.

Seamless Event Management — Organizers get an intuitive dashboard and robust API, allowing quick and efficient creation, updates, and promotion of events.

Free Local Job Board — In addition to events, Neighbored offers a completely free platform for locals to post and discover job opportunities, supporting economic connections in rural areas.

Accessible Everywhere — Available as native apps on iOS and Android, plus a Progressive Web App (PWA) for seamless access on phones, tablets, or computers.

Neighbored has been downloaded over 2,000 times and actively serves 4 counties in the state of Iowa — real proof of its value in actual rural communities.

Built with modern, cross-platform tools for reliability and performance:

- Frontend: React Native (via Expo) for mobile + React for the PWA
- UI Libraries: Material UI & Bootstrap
- Backend & Services: Google Cloud Platform, including Firebase Authentication and Firebase Functions
- Maps & Location: Google Maps SDK for precise geolocation and radius-based discovery`,
                    image_url:
                        "/project-images/Neighbored-App-Portfolio-Screenshot.png",
                    technologies: [
                        "React Native",
                        "Expo",
                        "React",
                        "Material UI",
                        "Bootstrap",
                        "Google Cloud Platform",
                        "Firebase Authentication",
                        "Firebase Functions",
                        "Google Maps SDK",
                        "iOS",
                        "Android",
                        "PWA",
                    ],
                    category: "mobile",
                    featured: true,
                    order_index: 1,
                    demo_url: "https://neighboredllcapp.com/",
                    github_url: null,
                },
                {
                    id: "neighbored-website",
                    title: "Neighbored Website",
                    description:
                        "Official website for Neighbored LLC showcasing community events and connections",
                    long_description: `Our Story & Mission

Growing up in a small town like Coon Rapids, Iowa, the Neighbored team saw firsthand how rich rural communities are in unique events and traditions — yet how hard it can be to discover them.

Information is often scattered across different sources, awareness stays low, and many wonderful gatherings go completely unnoticed.

Neighbored was created to fix exactly that: a central, easy-to-use hub where communities can showcase what makes them special.

From local fairs and farmers markets to concerts and town celebrations, we help these events gain the visibility they deserve — bringing neighbors closer together and encouraging everyone to support local.

In our fast-paced world, Neighbored celebrates the heart of rural America — one event, one job, one meaningful connection at a time.

Beyond the code, all custom graphics and visuals were hand-crafted by me using Procreate. This gives Neighbored a warm, personal, and distinctly community-focused feel that stands out.

I also took full ownership of promotional content creation and community outreach. Using Toonly for engaging animated explainer videos, iMovie for polished editing, and GIMP for extra graphic enhancements, I produced a complete suite of promotional videos that clearly highlight Neighbored's mission and features — helping attract new users and excite local organizers.

To onboard communities efficiently, I scheduled and led numerous introductory meetings with local organizers, town officials, and event coordinators using Calendly. This streamlined the process and ensured smooth adoption across four Iowa counties.

This end-to-end approach — from front-end development and custom design to video production and real-world community engagement — showcases my full-stack capabilities while placing a strong emphasis on creating intuitive, visually compelling user experiences and demonstrating strong personal communication skills.`,
                    image_url:
                        "/project-images/Neighbored-Website-Screenshot-Portfolio.png",
                    technologies: [
                        "Web Development",
                        "Marketing",
                        "Procreate",
                        "Toonly",
                        "iMovie",
                        "GIMP",
                        "Calendly",
                        "Community Outreach",
                    ],
                    category: "web",
                    featured: true,
                    order_index: 2,
                    demo_url: "https://neighboredllc.com/",
                    github_url: null,
                },
                {
                    id: "crow-flies",
                    title: "Crow Flies",
                    description:
                        "NPM package for calculating straight-line distance between geographic coordinates",
                    long_description: `Crow-Flies is a lightweight NPM package I created while building the Neighbored app. It calculates the straight-line distance (as the crow flies) between any two points on Earth's surface using their latitude and longitude coordinates.

It implements the spherical law of cosines formula — a well-established, reasonably accurate method for distances up to a few thousand kilometers.

Very fast & lightweight — Pure JavaScript with just a handful of trigonometric operations, delivering excellent performance on both mobile devices and servers.

Correctly handles the antimeridian (±180° longitude) — one of the most common pitfalls in naive distance implementations. Crow-Flies gets this right out of the box.

Good-enough accuracy for real-world apps — Typical error of only ~0.3–0.5%. The spherical law of cosines strikes the perfect balance for most location-based use cases (events, dating apps, delivery services, social features, etc.).

Works everywhere — Zero dependencies, runs natively in both Node.js and browsers, with no complicated build steps.

Battle-tested in production — It powers the real radius-based event filtering in the Neighbored app and has accumulated over 40,000 downloads across 5+ years.

Clean & classic implementation — Uses a simple, well-understood formula that many developers already know and trust.

Technical Details

Limitations: The formula assumes Earth is a perfect sphere (it's actually an oblate spheroid). Very long distances (>10,000 km) will show slightly increased error.

In short: Crow-Flies provides a clean, classic, and reliable implementation of great-circle distance calculation using the spherical law of cosines — exactly the kind of utility that's commonly needed in location-aware applications like Neighbored.`,
                    image_url:
                        "/project-images/Crow-Flies-Portfolio-Screenshot.png",
                    technologies: [
                        "JavaScript",
                        "TypeScript",
                        "NPM",
                        "Geodistance",
                        "Spherical Law of Cosines",
                        "Node.js",
                    ],
                    category: "library",
                    featured: true,
                    order_index: 3,
                    demo_url: "https://www.npmjs.com/package/crow-flies",
                    github_url: null,
                },
                {
                    id: "line-up",
                    title: "Line Up",
                    description:
                        "Multiplayer card game built with Base44 — replace cards one at a time until your hand is in ascending order.",
                    long_description: `Line Up is a fast-paced multiplayer card game built on Base44. Players take turns replacing cards from a shared pool with the goal of arranging their hand from least to greatest. The game features account-based authentication, real-time multiplayer interactions, and a clean, minimal UI designed for quick matches.

Built using Base44 and assisted by Claude-generated code, the project demonstrates integration with third-party game hosting, player authentication, and multiplayer state synchronization. Play the live version at the provided demo link.`,
                    image_url:
                        "/project-images/Line-Up-Screenshot-Portfolio.png",
                    technologies: [
                        "Base44",
                        "Claude Code",
                        "Auth",
                        "Multiplayer",
                        "TypeScript",
                        "React",
                    ],
                    category: "web",
                    featured: true,
                    order_index: 4,
                    demo_url: "https://line-up-card-game.base44.app/LineUp",
                    github_url: null,
                },
            ];

            // Only use hardcoded projects
            const allProjects = hardcodedProjects;
            setProjects(allProjects);
            setFilteredProjects(allProjects);
            setIsLoading(false);
        }

        loadProjects();
    }, []);

    useEffect(() => {
        let filtered = projects;

        if (selectedCategory !== "all") {
            filtered = filtered.filter((p) => p.category === selectedCategory);
        }

        if (searchQuery) {
            filtered = filtered.filter(
                (p) =>
                    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    p.description
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    p.technologies.some((tech: string) =>
                        tech.toLowerCase().includes(searchQuery.toLowerCase()),
                    ),
            );
        }

        setFilteredProjects(filtered);
    }, [searchQuery, selectedCategory, projects]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
            <nav className="border-b bg-white/50 backdrop-blur-sm sticky top-0 z-50 dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link
                            href="/"
                            className="flex items-center gap-2 group"
                        >
                            <div className="w-10 h-10 bg-gradient-to-br from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                                <Code2 className="w-5 h-5 text-white dark:text-slate-900" />
                            </div>
                            <span className="font-bold text-xl">Portfolio</span>
                        </Link>
                        <div className="flex items-center gap-6">
                            <Link
                                href="/"
                                className="text-sm font-medium hover:text-slate-600 transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="/projects"
                                className="text-sm font-medium text-slate-900 dark:text-slate-100"
                            >
                                Projects
                            </Link>
                            <Button size="sm" asChild>
                                <a href="mailto:mogulders@gmail.com">Contact</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        My Projects
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                        A collection of work showcasing my skills in front-end
                        development, UI/UX design, and modern web technologies.
                    </p>
                </div>

                <div className="mb-12 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <Input
                            type="search"
                            placeholder="Search projects, technologies..."
                            className="pl-12 h-12 text-base"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <Button
                                key={category.id}
                                variant={
                                    selectedCategory === category.id
                                        ? "default"
                                        : "outline"
                                }
                                onClick={() => setSelectedCategory(category.id)}
                                className="transition-all"
                            >
                                {category.label}
                            </Button>
                        ))}
                    </div>
                </div>

                {isLoading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <Card
                                key={i}
                                className="overflow-hidden animate-pulse"
                            >
                                <div className="aspect-video bg-slate-200 dark:bg-slate-800" />
                                <CardHeader>
                                    <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded w-3/4 mb-2" />
                                    <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full" />
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                ) : filteredProjects.length === 0 ? (
                    <div className="text-center py-24">
                        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="w-8 h-8 text-slate-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                            No projects found
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                            Try adjusting your search or filters
                        </p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="group animate-in fade-in slide-in-from-bottom-8 duration-700"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    <div className="aspect-video overflow-hidden relative">
                                        <img
                                            src={project.image_url}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                            <div className="flex gap-2">
                                                {project.demo_url && (
                                                    <a
                                                        href={project.demo_url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2 bg-white/90 hover:bg-white rounded-lg transition-colors"
                                                        onClick={(e) =>
                                                            e.stopPropagation()
                                                        }
                                                    >
                                                        <ExternalLink className="w-4 h-4 text-slate-900" />
                                                    </a>
                                                )}
                                                {project.github_url && (
                                                    <a
                                                        href={
                                                            project.github_url
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2 bg-white/90 hover:bg-white rounded-lg transition-colors"
                                                        onClick={(e) =>
                                                            e.stopPropagation()
                                                        }
                                                    >
                                                        <Github className="w-4 h-4 text-slate-900" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <Link href={`/projects/${project.id}`}>
                                        <CardHeader>
                                            <CardTitle className="group-hover:text-slate-600 transition-colors">
                                                {project.title}
                                            </CardTitle>
                                            <CardDescription className="line-clamp-2">
                                                {project.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies
                                                    .slice(0, 4)
                                                    .map((tech: string) => (
                                                        <Badge
                                                            key={tech}
                                                            variant="secondary"
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                {project.technologies.length >
                                                    4 && (
                                                    <Badge variant="secondary">
                                                        +
                                                        {project.technologies
                                                            .length - 4}
                                                    </Badge>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Link>
                                </Card>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <footer className="border-t py-12 mt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            © 2026 Portfolio. Built with Next.js.
                        </p>
                        <div className="flex gap-6">
                            <a
                                href="https://github.com/mogulders"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
