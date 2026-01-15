import Link from "next/link";
import { notFound } from "next/navigation";
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
    Code2,
    ArrowLeft,
    ExternalLink,
    Github,
    ChevronRight,
} from "lucide-react";

export async function generateStaticParams() {
    // Hardcoded project IDs that should be generated at build time
    const projectIds = [
        "readme-adsense",
        "neighbored-app", 
        "neighbored-website",
        "crow-flies"
    ];

    return projectIds.map((id) => ({
        id: id,
    }));
}

interface ProjectDetailPageProps {
    params: {
        id: string;
    };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    // Hardcoded projects data
    const hardcodedProjects: Record<string, any> = {
        "neighbored-app": {
            id: "neighbored-app",
            title: "Neighbored App",
            description:
                "Mobile app for connecting neighbors and building community",
            long_description:
                "Neighbored is a mobile application designed to bring neighbors together and strengthen community bonds. The app allows users to connect with their neighbors, share resources, and build a stronger sense of community through local interactions and communications.",
            image_url:
                "/project-images/Neighbored-App-Portfolio-Screenshot.png",
            technologies: [
                "React Native",
                "iOS",
                "Android",
                "Firebase",
                "TypeScript",
            ],
            category: "Mobile",
            featured: true,
            demo_url: null,
            github_url: null,
            external_url: null,
            app_links: {
                ios: "https://apps.apple.com/us/app/neighbored/id1545220147#?platform=iphone",
                android:
                    "https://play.google.com/store/apps/details?id=com.neighboredllc.neighbored",
                pwa: "https://neighboredllcapp.com/",
            },
        },
        "neighbored-website": {
            id: "neighbored-website",
            title: "Neighbored Website",
            description: "Official website for Neighbored LLC",
            long_description:
                "The official website for Neighbored LLC showcasing the company and its mission to connect neighbors and build community.",
            image_url:
                "/project-images/Neighbored-Website-Screenshot-Portfolio.png",
            technologies: ["Web", "Marketing"],
            category: "Web",
            featured: true,
            demo_url: "https://neighboredllc.com/",
            github_url: null,
            external_url: "https://neighboredllc.com/",
            app_links: null,
        },
        "readme-adsense": {
            id: "readme-adsense",
            title: "Readme Adsense",
            description:
                "Advertising platform for developers and content creators",
            long_description:
                "Readme Adsense is an advertising platform specifically designed for developers and content creators. It provides tools and analytics to help creators monetize their content and connect with relevant advertisers in the tech space.",
            image_url:
                "/project-images/Readme-Adsense-Portfolio-Screenshot.png",
            technologies: [
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "PostgreSQL",
            ],
            category: "Web",
            featured: true,
            demo_url: "https://www.readme-adsense.com/",
            github_url: null,
            external_url: "https://www.readme-adsense.com/",
            app_links: null,
        },
        "crow-flies": {
            id: "crow-flies",
            title: "Crow Flies",
            description:
                "NPM package for calculating geodistance between two lat/long points",
            long_description:
                "Crow Flies is an npm package that calculates the distance between two geographic points as the crow flies. It supports output in both miles and kilometers, making it perfect for distance calculations in mapping and location-based applications. This lightweight package is ideal for developers working with geolocation data.",
            image_url:
                "/project-images/Crow-Flies-Portfolio-Screenshot.png",
            technologies: [
                "JavaScript",
                "TypeScript",
                "NPM",
                "Geodistance",
                "GIS",
            ],
            category: "Library",
            featured: true,
            demo_url: "https://www.npmjs.com/package/crow-flies",
            github_url: null,
            external_url: "https://www.npmjs.com/package/crow-flies",
            app_links: null,
        },
    };

    const project = hardcodedProjects[params.id];

    if (!project) {
        notFound();
    }

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

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <Button
                    variant="ghost"
                    asChild
                    className="mb-8 group animate-in fade-in slide-in-from-left-4 duration-500"
                >
                    <Link href="/projects">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Projects
                    </Link>
                </Button>

                <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="flex items-center gap-2 mb-4">
                        <Badge>{project.category}</Badge>
                        {project.featured && (
                            <Badge variant="secondary">Featured</Badge>
                        )}
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        {project.title}
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {project.app_links && (
                            <>
                                {project.app_links.ios && (
                                    <Button asChild className="group">
                                        <a
                                            href={project.app_links.ios}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Get on App Store
                                        </a>
                                    </Button>
                                )}
                                {project.app_links.android && (
                                    <Button asChild className="group">
                                        <a
                                            href={project.app_links.android}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Get on Play Store
                                        </a>
                                    </Button>
                                )}
                                {project.app_links.pwa && (
                                    <Button asChild className="group">
                                        <a
                                            href={project.app_links.pwa}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            PWA
                                        </a>
                                    </Button>
                                )}
                            </>
                        )}
                        {project.demo_url && (
                            <Button asChild className="group">
                                <a
                                    href={project.demo_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    View Live Demo
                                </a>
                            </Button>
                        )}
                        {project.github_url && (
                            <Button variant="outline" asChild>
                                <a
                                    href={project.github_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github className="w-4 h-4 mr-2" />
                                    View Source
                                </a>
                            </Button>
                        )}
                    </div>
                </div>

                <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                    <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                        <img
                            src={project.image_url}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                            <h2 className="text-2xl font-bold mb-4">
                                About This Project
                            </h2>
                            <div className="prose prose-slate dark:prose-invert max-w-none">
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {project.long_description}
                                </p>
                            </div>
                        </div>

                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                            <h2 className="text-2xl font-bold mb-4">
                                Key Features
                            </h2>
                            <ul className="space-y-3">
                                {[
                                    "Responsive design that works seamlessly across all devices",
                                    "Optimized performance with lazy loading and code splitting",
                                    "Accessible UI components following WCAG guidelines",
                                    "Clean, maintainable code with comprehensive documentation",
                                    "Modern development practices and industry standards",
                                ].map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <ChevronRight className="w-5 h-5 text-slate-900 dark:text-slate-100 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-600 dark:text-slate-400">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <Card className="animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
                            <CardHeader>
                                <CardTitle>Technologies</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech: any) => (
                                        <Badge key={tech} variant="secondary">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="animate-in fade-in slide-in-from-right-4 duration-700 delay-300">
                            <CardHeader>
                                <CardTitle>Project Links</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {project.app_links && (
                                    <>
                                        {project.app_links.ios && (
                                            <a
                                                href={project.app_links.ios}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm hover:text-slate-600 transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                App Store
                                            </a>
                                        )}
                                        {project.app_links.android && (
                                            <a
                                                href={project.app_links.android}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm hover:text-slate-600 transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Play Store
                                            </a>
                                        )}
                                        {project.app_links.pwa && (
                                            <a
                                                href={project.app_links.pwa}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm hover:text-slate-600 transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                PWA
                                            </a>
                                        )}
                                    </>
                                )}
                                {project.demo_url && (
                                    <a
                                        href={project.demo_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm hover:text-slate-600 transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                )}
                                {project.github_url && (
                                    <a
                                        href={project.github_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm hover:text-slate-600 transition-colors"
                                    >
                                        <Github className="w-4 h-4" />
                                        Source Code
                                    </a>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
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
