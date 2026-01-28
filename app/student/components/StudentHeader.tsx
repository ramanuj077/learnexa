"use client";

import Image from "next/image";

export default function StudentHeader() {
    return (
        <header className="flex items-center justify-between gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    search
                </span>
                <input
                    className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm focus:ring-primary-teacher focus:border-primary-teacher"
                    placeholder="Search courses, exams, or help..."
                    type="text"
                />
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 relative">
                    <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">notifications</span>
                    <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
                </button>

                <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-semibold">Alex Johnson</p>
                        <p className="text-xs text-slate-500">Grade 11 - Science A</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-orange-100 overflow-hidden">
                        <Image
                            alt="Alex Johnson"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKm6SRJX08xyLxkFqUU8f3KkERO5lqGKQGhPcwDgQSXQUoojKzKGBKpTrAvFh2X6D53GXLgRdS5d8gFnIN1kIWyz-eDAauUSamkUXlPYquLBXHO9_kO1oFf8spCIGMg8CTQwd-wgZ2Yrk4NWPV6fXH5YKiJZk4RweMFP72Khdk5dFkpIt0WouxW69C8oAMlXjDZiQ-g3OEs2pNMCJSOscU1CvdB614kHZqBd4k03Y1kov5eqhhzgLXU5vZY2PEaRz5ap0qYftD4qE"
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
