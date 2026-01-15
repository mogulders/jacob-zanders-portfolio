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
        "crow-flies",
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
            key_features: [
                "Location-Based Event Discovery — Browse local/rural events within a customizable 100-mile radius using Google Maps SDK — never miss a community fair, festival, or gathering",
                "Organizer-Friendly Dashboard & API — Easy event creation, updates, and promotion — free for locals",
                "Free Community Job Board — Post/find local jobs to boost rural economies",
                "Multi-Platform Access — Native iOS/Android apps + Progressive Web App (PWA) for seamless use everywhere",
                "Real Impact — 2,000+ downloads, actively serving 4 Iowa counties — proven in small-town America",
            ],
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
            key_features: [
                "Warm, Hand-Crafted Visuals — All custom graphics created in Procreate for that personal, community-focused feel",
                "Full Promotional Ownership — Animated explainer videos (Toonly + iMovie) + graphics (GIMP) to drive user growth and organizer adoption",
                "Community Outreach Expertise — Scheduled intro meetings via Calendly with town officials/event coordinators — smooth onboarding across counties",
                "Rural-First Mission — Bridges the gap in scattered event info, celebrates small-town spirit, and fosters connections in places like Coon Rapids, IA",
            ],
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
            key_features: [
                "Ethical Monetization for Open-Source Docs - Turn your READMEs and project documentation into a revenue stream without selling the code itself — perfect for sustaining indie projects while keeping the spirit of open source alive",
                "Super Simple Workflow - Upload/edit your README with an intuitive built-in editor → generate unique, shareable links → earn from ad impressions whenever users view your docs",
                "Passive Revenue from Tech Audiences - High-CPM ads targeted at developers and technical readers (better earnings than general blogs) — handles ad serving, optimization, and automatic payouts via Stripe/PayPal",
                "Developer-First & Lightweight - No complex setup, no tracking compromises, fully respects open-source principles — born from real indie dev pain (steady package traction but no easy revenue path)",
                "Proven Personal Backstory - Created after maintaining a popular Node.js package (400+ downloads/week for 3+ years) — real-world tested solution for sustainable OSS side income",
            ],
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
            key_features: [
                "Very fast & lightweight - Pure JavaScript with just a few trig operations → excellent performance for mobile & server-side usage",
                "Handles the antimeridian (±180° longitude) correctly - One of the most common pain points with naive distance implementations — crow-flies gets this right",
                "Good-enough accuracy for real apps (~0.3–0.5% error) - Spherical law of cosines is the sweet spot for most location-based applications (events, dating, delivery, social, etc.)",
                "Works everywhere - Zero dependencies • Runs in Node.js and browsers • No build step headaches",
                "Battle-tested in production - Powered real radius-based filtering in the Neighbored app + 40k+ downloads over 5 years",
                "Clean & classic implementation - Simple, well-understood formula that many developers already know and trust",
            ],
            image_url: "/project-images/Crow-Flies-Portfolio-Screenshot.png",
            technologies: [
                "JavaScript",
                "TypeScript",
                "NPM",
                "Geodistance",
                "Spherical Law of Cosines",
                "Node.js",
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
                                <a href="mailto:mogulders@gmail.com">Contact</a>
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
                            <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-[17px] leading-relaxed">
                                {project.long_description
                                    .split("\n\n")
                                    .filter(
                                        (paragraph: string) =>
                                            paragraph.trim() !== ""
                                    )
                                    .map((paragraph: string, index: any) => (
                                        <p
                                            key={index}
                                            className="text-slate-700 dark:text-slate-300"
                                        >
                                            {paragraph.trim()}
                                        </p>
                                    ))}
                            </div>
                        </div>

                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                            <h2 className="text-2xl font-bold mb-4">
                                Key Features
                            </h2>
                            <ul className="space-y-3">
                                {(
                                    project.key_features || [
                                        "Responsive design that works seamlessly across all devices",
                                        "Optimized performance with lazy loading and code splitting",
                                        "Accessible UI components following WCAG guidelines",
                                        "Clean, maintainable code with comprehensive documentation",
                                        "Modern development practices and industry standards",
                                    ]
                                ).map((feature: any, index: any) => (
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
