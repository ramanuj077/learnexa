"use client";

import { useState, useEffect } from "react";

export default function ExamCountdown() {
    const [timeLeft, setTimeLeft] = useState({ days: 5, hours: 14, mins: 32 });

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/50">
            <div className="text-center">
                <span className="text-xs font-bold text-red-500 uppercase tracking-wider">
                    Upcoming Exam
                </span>
                <h3 className="text-lg font-bold mt-2 mb-4">Mathematics Mid-Term</h3>

                <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-slate-900 dark:text-white">
                            {String(timeLeft.days).padStart(2, '0')}
                        </div>
                        <p className="text-[10px] text-slate-500 uppercase font-medium">Days</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-slate-900 dark:text-white">
                            {String(timeLeft.hours).padStart(2, '0')}
                        </div>
                        <p className="text-[10px] text-slate-500 uppercase font-medium">Hrs</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-slate-900 dark:text-white">
                            {String(timeLeft.mins).padStart(2, '0')}
                        </div>
                        <p className="text-[10px] text-slate-500 uppercase font-medium">Min</p>
                    </div>
                </div>

                <button className="w-full py-3 bg-slate-900 dark:bg-slate-700 text-white font-semibold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-600 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm">menu_book</span>
                    Study Planner
                </button>
            </div>
        </div>
    );
}
