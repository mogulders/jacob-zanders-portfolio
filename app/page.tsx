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
import {
    ArrowRight,
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Code2,
} from "lucide-react";

export default function Home() {
    const [featuredProjects, setFeaturedProjects] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadFeaturedProjects() {
            // Hardcoded featured projects
            const hardcodedProjects = [
                {
                    id: "readme-adsense",
                    title: "Readme Adsense",
                    description:
                        "Advertising platform for developers and content creators",
                    image_url:
                        "/project-images/Readme-Adsense-Portfolio-Screenshot.png",
                    technologies: ["Web", "Platform"],
                    featured: true,
                    order_index: 0,
                    external_url: null,
                    app_links: null,
                },
                {
                    id: "neighbored-app",
                    title: "Neighbored App",
                    description:
                        "Mobile app for connecting neighbors and building community",
                    image_url:
                        "/project-images/Neighbored-App-Portfolio-Screenshot.png",
                    technologies: ["React Native", "iOS", "Android"],
                    featured: true,
                    order_index: 1,
                    external_url: null,
                    app_links: {
                        ios: "https://apps.apple.com/us/app/neighbored/id1545220147#?platform=iphone",
                        android:
                            "https://play.google.com/store/apps/details?id=com.neighboredllc.neighbored",
                        pwa: "https://neighboredllcapp.com/",
                    },
                },
                {
                    id: "neighbored-website",
                    title: "Neighbored Website",
                    description: "Official website for Neighbored LLC",
                    image_url:
                        "/project-images/Neighbored-Website-Screenshot-Portfolio.png",
                    technologies: ["Web", "Marketing"],
                    featured: true,
                    order_index: 2,
                    external_url: null,
                    app_links: null,
                },
                {
                    id: "crow-flies",
                    title: "Crow Flies",
                    description:
                        "NPM package for calculating geodistance between lat/long points",
                    image_url:
                        "/project-images/Crow-Flies-Portfolio-Screenshot.png",
                    technologies: ["JavaScript", "NPM", "Geodistance"],
                    featured: true,
                    order_index: 3,
                    external_url: null,
                    app_links: null,
                },
            ];

            // Only use hardcoded projects
            const allProjects = hardcodedProjects;

            setFeaturedProjects(allProjects);
            setIsLoading(false);
        }

        loadFeaturedProjects();
    }, []);

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
                                className="text-sm font-medium hover:text-slate-600 transition-colors"
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

            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-sm font-medium">
                                Available for new projects
                            </span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
                            Front-End Engineer
                            <span className="block bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
                                Building Digital Experiences
                            </span>
                        </h1>

                        <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                            Crafting beautiful, performant, and accessible web
                            applications with modern technologies and best
                            practices.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                            <Button size="lg" asChild className="group">
                                <Link href="/projects">
                                    View My Work
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <a href="mailto:contact@example.com">
                                    Get In Touch
                                </a>
                            </Button>
                        </div>

                        <div className="flex justify-center gap-6 mt-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                            <a
                                href="https://github.com/mogulders"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jacobzanders/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a
                                href="mailto:contact@example.com"
                                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                            >
                                <Mail className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        A selection of my recent work
                    </p>
                </div>

                {isLoading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
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
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProjects.map((project, index) => {
                            const projectLink =
                                project.external_url ||
                                `/projects/${project.id}`;
                            const isExternal = !!project.external_url;

                            return (
                                <Link
                                    key={project.id}
                                    href={projectLink}
                                    target={isExternal ? "_blank" : undefined}
                                    rel={
                                        isExternal
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    className="group animate-in fade-in slide-in-from-bottom-8 duration-700"
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}
                                >
                                    <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="aspect-video overflow-hidden relative">
                                            <img
                                                src={project.image_url}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
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
                                                {project.app_links && (
                                                    <>
                                                        {project.app_links
                                                            .ios && (
                                                            <Badge
                                                                variant="secondary"
                                                                className="cursor-pointer"
                                                            >
                                                                <a
                                                                    href={
                                                                        project
                                                                            .app_links
                                                                            .ios
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    onClick={(
                                                                        e
                                                                    ) =>
                                                                        e.stopPropagation()
                                                                    }
                                                                >
                                                                    App Store
                                                                </a>
                                                            </Badge>
                                                        )}
                                                        {project.app_links
                                                            .android && (
                                                            <Badge
                                                                variant="secondary"
                                                                className="cursor-pointer"
                                                            >
                                                                <a
                                                                    href={
                                                                        project
                                                                            .app_links
                                                                            .android
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    onClick={(
                                                                        e
                                                                    ) =>
                                                                        e.stopPropagation()
                                                                    }
                                                                >
                                                                    Play Store
                                                                </a>
                                                            </Badge>
                                                        )}
                                                    </>
                                                )}
                                                {project.technologies
                                                    .slice(0, 3)
                                                    .map((tech) => (
                                                        <Badge
                                                            key={tech}
                                                            variant="secondary"
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                {project.technologies.length >
                                                    3 && (
                                                    <Badge variant="secondary">
                                                        +
                                                        {project.technologies
                                                            .length - 3}
                                                    </Badge>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            );
                        })}
                    </div>
                )}

                <div className="text-center mt-12">
                    <Button size="lg" variant="outline" asChild>
                        <Link href="/projects">
                            View All Projects
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </section>

            <section className="bg-slate-100 dark:bg-slate-800/50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Skills & Technologies
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Tools I use to bring ideas to life
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                name: "Frontend",
                                skills: [
                                    "React",
                                    "Next.js",
                                    "TypeScript",
                                    "Tailwind CSS",
                                ],
                            },
                            {
                                name: "Backend",
                                skills: [
                                    "Node.js",
                                    "PostgreSQL",
                                    "Supabase",
                                    "REST APIs",
                                ],
                            },
                            {
                                name: "Tools",
                                skills: ["Git", "Figma", "Storybook", "Jest"],
                            },
                            {
                                name: "Focus",
                                skills: [
                                    "Accessibility",
                                    "Performance",
                                    "UX Design",
                                    "SEO",
                                ],
                            },
                        ].map((category, index) => (
                            <Card
                                key={category.name}
                                className="animate-in fade-in slide-in-from-bottom-8 duration-700"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        {category.name}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {category.skills.map((skill) => (
                                            <li
                                                key={skill}
                                                className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2"
                                            >
                                                <div className="w-1.5 h-1.5 bg-slate-900 dark:bg-slate-100 rounded-full" />
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="bg-gradient-to-br from-slate-900 to-slate-700 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-12 text-center text-white">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Let's Work Together
                    </h2>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                        I'm always interested in hearing about new projects and
                        opportunities. Whether you have a question or just want
                        to say hi, feel free to reach out!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" asChild>
                            <a
                                href="mailto:contact@example.com"
                                className="group"
                            >
                                <Mail className="mr-2 w-4 h-4" />
                                Send Email
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-transparent text-white border-white hover:bg-white/10"
                            asChild
                        >
                            <Link href="/projects">
                                View Projects
                                <ExternalLink className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <footer className="border-t py-12">
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
                            <a
                                href="https://www.linkedin.com/in/jacobzanders/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:mogulders@gmail.com"
                                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
