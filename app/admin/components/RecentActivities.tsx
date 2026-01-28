export default function RecentActivities() {
    const activities = [
        {
            title: "Exam Schedule Sent",
            description: "WhatsApp broadcast to Grade 10 parents.",
            time: "12 mins ago",
            icon: "mail",
            iconBg: "bg-blue-100 dark:bg-blue-900/30",
            iconColor: "text-blue-600 dark:text-blue-400",
        },
        {
            title: "Bulk Fee Receipt",
            description: "24 fee transactions processed for Grade 5.",
            time: "2 hours ago",
            icon: "payment",
            iconBg: "bg-green-100 dark:bg-green-900/30",
            iconColor: "text-green-600 dark:text-green-400",
        },
        {
            title: "Attendance Alert",
            description: "Unusual absenteeism in Grade 8B (12 students).",
            time: "5 hours ago",
            icon: "report_problem",
            iconBg: "bg-orange-100 dark:bg-orange-900/30",
            iconColor: "text-orange-600 dark:text-orange-400",
        },
        {
            title: "New Enrollment",
            description: "Aria Stark admitted to Grade 1A.",
            time: "Yesterday",
            icon: "person_add",
            iconBg: "bg-purple-100 dark:bg-purple-900/30",
            iconColor: "text-purple-600 dark:text-purple-400",
        },
    ];

    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <h4 className="text-lg font-bold dark:text-white mb-6">Recent Activities</h4>

            <div className="space-y-6">
                {activities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-4">
                        <div className={`${activity.iconBg} p-2 rounded-lg mt-1`}>
                            <span className={`material-icons-round ${activity.iconColor} text-sm`}>
                                {activity.icon}
                            </span>
                        </div>
                        <div>
                            <p className="text-sm font-semibold dark:text-white leading-none">
                                {activity.title}
                            </p>
                            <p className="text-xs text-slate-500 mt-1">{activity.description}</p>
                            <p className="text-[10px] text-slate-400 mt-1 uppercase font-medium">
                                {activity.time}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <button className="w-full mt-6 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                View All Activities
            </button>
        </div>
    );
}
