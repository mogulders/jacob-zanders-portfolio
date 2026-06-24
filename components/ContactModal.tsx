"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Linkedin, Mail, Phone, Github } from "lucide-react";

export function ContactModal() {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="sm">Contact</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                    <DialogTitle>Get In Touch</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4 pt-2">
                    <a
                        href="https://github.com/mogulders"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                        <div className="w-9 h-9 bg-slate-900 dark:bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Github className="w-5 h-5 text-white dark:text-slate-900" />
                        </div>
                        <div>
                            <p className="text-sm font-medium">GitHub</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">github.com/mogulders</p>
                        </div>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/jacobzanders/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                        <div className="w-9 h-9 bg-[#0A66C2] rounded-lg flex items-center justify-center flex-shrink-0">
                            <Linkedin className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <p className="text-sm font-medium">LinkedIn</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">linkedin.com/in/jacobzanders</p>
                        </div>
                    </a>

                    <a
                        href="tel:7123042419"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                        <div className="w-9 h-9 bg-slate-900 dark:bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Phone className="w-5 h-5 text-white dark:text-slate-900" />
                        </div>
                        <div>
                            <p className="text-sm font-medium">Phone</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">712-304-2419</p>
                        </div>
                    </a>

                    <a
                        href="mailto:mogulders@gmail.com"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                        <div className="w-9 h-9 bg-slate-900 dark:bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Mail className="w-5 h-5 text-white dark:text-slate-900" />
                        </div>
                        <div>
                            <p className="text-sm font-medium">Email</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">mogulders@gmail.com</p>
                        </div>
                    </a>
                </div>
            </DialogContent>
        </Dialog>
    );
}
