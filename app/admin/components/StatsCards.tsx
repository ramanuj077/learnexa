export default function StatsCards() {
    const stats = [
        {
            title: "Total Students",
            value: "1,240",
            icon: "groups",
            iconBg: "bg-blue-50 dark:bg-blue-900/20",
            iconColor: "text-blue-600 dark:text-blue-400",
            badge: "+3%",
            badgeColor: "text-green-500 bg-green-50 dark:bg-green-900/20",
            badgeIcon: "trending_up",
            progress: 85,
            progressLabel: "85% Capacity reached",
        },
        {
            title: "Teacher Count",
            value: "85",
            icon: "school",
            iconBg: "bg-purple-50 dark:bg-purple-900/20",
            iconColor: "text-purple-600 dark:text-purple-400",
            badge: "Stable",
            badgeColor: "text-slate-400 bg-slate-50 dark:bg-slate-800",
            subtitle: "1:15 Teacher-student ratio",
        },
        {
            title: "Fee Collection Status",
            value: "$425,000",
            icon: "payments",
            iconBg: "bg-emerald-50 dark:bg-emerald-900/20",
            iconColor: "text-emerald-600 dark:text-emerald-400",
            badge: "92%",
            badgeColor: "text-green-500 bg-green-50 dark:bg-green-900/20",
            badgeIcon: "check_circle",
            subtitle: "Fiscal Year 2023-24",
        },
        {
            title: "Daily Attendance",
            value: "96.8%",
            icon: "how_to_reg",
            iconBg: "bg-orange-50 dark:bg-orange-900/20",
            iconColor: "text-orange-600 dark:text-orange-400",
            badge: "Today",
            badgeColor: "text-orange-500 bg-orange-50 dark:bg-orange-900/20",
            badgeIcon: "schedule",
            subtitle: "1,201 Students present",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 relative overflow-hidden"
                >
                    <div className="flex justify-between items-start mb-4">
                        <div className={`${stat.iconBg} p-2.5 rounded-xl`}>
                            <span className={`material-icons-round ${stat.iconColor}`}>{stat.icon}</span>
                        </div>
                        <span className={`text-xs font-bold flex items-center px-2 py-1 rounded-full ${stat.badgeColor}`}>
                            {stat.badgeIcon && <span className="material-icons-round text-sm mr-0.5">{stat.badgeIcon}</span>}
                            {stat.badge}
                        </span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.title}</p>
                    <h3 className="text-2xl font-bold mt-1 dark:text-white">{stat.value}</h3>

                    {stat.progress !== undefined && (
                        <>
                            <div className="mt-4 h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div className="bg-blue-600 h-full rounded-full" style={{ width: `${stat.progress}%` }}></div>
                            </div>
                            <p className="text-[11px] text-slate-400 mt-2">{stat.progressLabel}</p>
                        </>
                    )}

                    {stat.subtitle && !stat.progress && (
                        <p className="text-[11px] text-slate-400 mt-4">{stat.subtitle}</p>
                    )}
                </div>
            ))}
        </div>
    );
}
