export default function QuickLinks() {
    const links = [
        {
            title: "Library",
            icon: "local_library",
            color: "text-primary-teacher",
            bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
            hoverBg: "hover:bg-indigo-100 dark:hover:bg-indigo-900/30",
        },
        {
            title: "IT Support",
            icon: "support_agent",
            color: "text-orange-500",
            bgColor: "bg-orange-50 dark:bg-orange-900/20",
            hoverBg: "hover:bg-orange-100 dark:hover:bg-orange-900/30",
        },
    ];

    return (
        <div className="flex gap-4">
            {links.map((link, index) => (
                <button
                    key={index}
                    className={`flex-1 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 ${link.bgColor} ${link.hoverBg} transition-all flex flex-col items-center gap-2`}
                >
                    <span className={`material-symbols-outlined text-2xl ${link.color}`}>
                        {link.icon}
                    </span>
                    <span className={`text-sm font-medium ${link.color}`}>{link.title}</span>
                </button>
            ))}
        </div>
    );
}
