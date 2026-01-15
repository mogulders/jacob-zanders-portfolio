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
                    long_description:
                        "Readme Adsense was born from a personal need I experienced as an indie developer. After publishing a Node.js package that gained steady traction (400 downloads/week for 3+ years), I wished for a sustainable way to generate revenue from open-source work without compromising its spirit. This led me to create Readme-AdSense: a lightweight, ethical tool that lets developers monetize their open-source projects through documentation.\n\nHow it works: Developers upload their README files, and Readme-AdSense generates shareable links. When users reference the docs, they're directed to monetized versions where developers earn from ad revenue. It's similar to blog monetization but targets tech audiences for higher CPMs.\n\nThe platform handles everything from ad serving to automatic payouts via Stripe and PayPal. This project demonstrates my expertise in modern web development, payment processing, third-party API integrations, and building practical tools that respect open-source principles.",
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
                    long_description:
                        "Neighbored is a mobile and web application dedicated to strengthening rural communities by connecting residents with local events, boosting awareness, participation, and that special small-town spirit.\n\nKey Features\n\nDiscover Local Events — Users effortlessly browse events in their town and nearby areas, with a customizable search radius of up to 100 miles. Powered by the Google Maps SDK, the app intelligently surfaces happenings based on your location — helping you never miss a community gathering again.\n\nThese lively fairs, festivals, and community celebrations are exactly what make rural life so special — and Neighbored puts them front and center.\n\nSeamless Event Management — Organizers enjoy an intuitive dashboard and robust API, making it quick and efficient to create, update, and promote events with minimal effort.\n\nFree Local Job Board — Beyond events, Neighbored provides a no-cost platform for locals to post and find job opportunities in their area, helping support rural economic connections.\n\nAccessible Everywhere — Available as native apps on iOS and Android, plus a Progressive Web App (PWA) for seamless access on phones, tablets, or computers.\n\nImpact & Reach\n\nNeighbored has been downloaded over 2,000 times and actively serves 4 counties in the state of Iowa, proving its value in real rural communities.\n\nTechnical Stack\n\nBuilt with modern, cross-platform tools for reliability and performance:\n\nFrontend: React Native (via Expo) for mobile + React for the PWA\nUI Libraries: Material UI & Bootstrap\nBackend & Services: Google Cloud Platform, including Firebase Authentication and Firebase Functions\nMaps & Location: Google Maps SDK for precise geolocation and radius-based discovery",
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
                    long_description:
                        "Our Story & Mission\n\nGrowing up in a small town like Coon Rapids, Iowa, the Neighbored team saw firsthand how rich rural communities are in unique events and traditions — yet how hard it can be to discover them. Information is often scattered, awareness is low, and wonderful gatherings go unnoticed.\n\nNeighbored fixes this by creating one central, easy-to-use hub where communities can showcase what makes them special. From local fairs and farmers markets to concerts and town celebrations, we help these events get the visibility they deserve — bringing neighbors closer and encouraging everyone to support local.\n\nIn a fast-paced world, Neighbored celebrates the heart of rural America — one event, one job, one connection at a time.\n\nAll custom graphics and visuals in the app were hand-crafted by the team using Procreate, giving Neighbored a warm, personal, and distinctly community-focused feel.\n\nTo bring the app to life beyond code, I also took full ownership of promotional content creation and community outreach. Using Toonly for engaging animated explainer videos, iMovie for polished editing and assembly, and GIMP for additional graphic enhancements, I produced a complete suite of promotional videos that highlight Neighbored's mission and features — helping to attract users and excite local organizers.\n\nTo onboard communities efficiently, I scheduled and conducted numerous introductory meetings with local organizers, town officials, and event coordinators using Calendly, streamlining the process and ensuring smooth adoption across the four Iowa counties.\n\nThis end-to-end approach — from front-end development and custom design to video production and real-world community engagement — showcases my full-stack capabilities while keeping a strong emphasis on creating intuitive, visually compelling user experiences. As well as my personal communication skills.",
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
                    long_description:
                        "NPM Crow-Flies was a node package I created during Neighbored development. It calculates the straight-line distance (as the crow flies) between two points on Earth's surface given their latitude and longitude coordinates. It uses the spherical law of cosines formula (a common, reasonably accurate method for distances up to a few thousand kilometers).\n\nKey Features\n\nVery fast & lightweight\nPure JavaScript with just a few trig operations → excellent performance for mobile & server-side usage\n\nHandles the antimeridian (±180° longitude) correctly\nOne of the most common pain points with naive distance implementations — crow-flies gets this right\n\nGood-enough accuracy for real apps (~0.3–0.5% error)\nSpherical law of cosines is the sweet spot for most location-based applications (events, dating, delivery, social, etc.)\n\nWorks everywhere\nZero dependencies • Runs in Node.js and browsers • No build step headaches\n\nBattle-tested in production\nPowered real radius-based filtering in the Neighbored app + 40k+ downloads over 5 years\n\nClean & classic implementation\nSimple, well-understood formula that many developers already know and trust\n\nTechnical Details\n\nLimitations: Assumes Earth is a perfect sphere (actually an oblate spheroid). Very long distances (>10,000 km) have slightly more error.\n\nIn short: clean, classic implementation of great-circle distance using the spherical law of cosines — very commonly used in location-based apps like Neighbored for radius-based event filtering!",
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
                        tech.toLowerCase().includes(searchQuery.toLowerCase())
                    )
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
                                <a href="mailto:contact@example.com">Contact</a>
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
