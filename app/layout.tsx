import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Jacob Zanders | Front-End Engineer Portfolio",
    description:
        "Crafting beautiful, performant, and accessible web applications with modern technologies and best practices.",
    metadataBase: new URL("https://jacob-zanders-portfolio.web.app"), // Ensures correct absolute URLs on deploy
    openGraph: {
        title: "Jacob Zanders | Front-End Engineer Portfolio",
        description:
            "Crafting beautiful, performant, and accessible web applications",
        url: "https://jacob-zanders-portfolio.web.app",
        siteName: "Jacob Zanders Portfolio",
        images: [
            {
                url: "/og-image.png", // ← Your new image in public/ folder
                width: 1200,
                height: 630,
                alt: "Jacob Zanders - Front-End Engineer Portfolio Preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Jacob Zanders | Front-End Engineer Portfolio",
        description:
            "Crafting beautiful, performant, and accessible web applications",
        images: ["/og-image.png"], // ← Same image for Twitter/X
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
