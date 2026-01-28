"use client";

export default function TeacherHeader() {
    return (
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Welcome back, Sarah!</h2>
                <p className="text-slate-500 dark:text-slate-400">
                    Monday, October 14, 2024 • You have 4 classes today.
                </p>
            </div>

            <div className="flex items-center gap-3">
                <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                        search
                    </span>
                    <input
                        className="pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm w-full md:w-64 focus:ring-primary-teacher focus:border-primary-teacher"
                        placeholder="Search students..."
                        type="text"
                    />
                </div>

                <button className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 relative">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                </button>
            </div>
        </header>
    );
}
