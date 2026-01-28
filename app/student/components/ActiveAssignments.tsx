export default function ActiveAssignments() {
    const assignments = [
        {
            title: "Physics Lab Report: Newton's Laws",
            dueDate: "Tomorrow, 11:59 PM",
            icon: "science",
            iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
            iconColor: "text-primary-teacher",
            status: "URGENT",
            statusColor: "bg-red-100 text-red-600 dark:bg-red-900/30",
        },
        {
            title: "World History: Industrial Revolution Essay",
            dueDate: "Friday, Oct 24",
            icon: "history_edu",
            iconBg: "bg-amber-100 dark:bg-amber-900/30",
            iconColor: "text-amber-600",
            status: "PENDING",
            statusColor: "bg-slate-100 text-slate-600 dark:bg-slate-700",
        },
    ];

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/50">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold">Active Assignments</h3>
                <a href="#" className="text-sm font-medium text-primary-teacher hover:underline">
                    View All
                </a>
            </div>

            <div className="space-y-4">
                {assignments.map((assignment, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all"
                    >
                        <div className={`p-3 rounded-xl ${assignment.iconBg}`}>
                            <span className={`material-symbols-outlined ${assignment.iconColor}`}>
                                {assignment.icon}
                            </span>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-semibold">{assignment.title}</p>
                            <p className="text-xs text-slate-500">Due: {assignment.dueDate}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${assignment.statusColor}`}>
                            {assignment.status}
                        </span>
                    </div>
                ))}

                <button className="w-full p-4 rounded-xl border border-dashed border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm">add</span>
                    Upload additional resources...
                </button>
            </div>
        </div>
    );
}
