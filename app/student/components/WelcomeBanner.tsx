export default function WelcomeBanner() {
    return (
        <div className="bg-gradient-to-r from-primary-teacher to-indigo-500 rounded-2xl p-6 text-white mb-6 flex items-center justify-between">
            <div>
                <h2 className="text-2xl font-bold mb-1">Welcome back, Alex! 👋</h2>
                <p className="text-white/80">You've completed 85% of your weekly goals. Keep it up!</p>
            </div>

            <div className="flex items-center gap-3">
                <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium flex items-center gap-2 transition-all">
                    <span className="material-symbols-outlined text-sm">calendar_today</span>
                    Full Schedule
                </button>
                <button className="px-4 py-2 bg-white hover:bg-white/90 text-primary-teacher rounded-lg text-sm font-bold flex items-center gap-2 transition-all">
                    <span className="material-symbols-outlined text-sm">download</span>
                    Report Card
                </button>
            </div>
        </div>
    );
}
