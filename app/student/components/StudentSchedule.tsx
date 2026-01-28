export default function StudentSchedule() {
    const schedule = [
        {
            time: "08:30 AM - 09:45 AM",
            title: "Biology Class",
            location: "Room 302 • Prof. Sarah White",
            isActive: true,
            dotColor: "bg-primary-teacher",
        },
        {
            time: "10:00 AM - 11:15 AM",
            title: "Calculus BC",
            location: "Room 105 • Dr. Alan Turing",
            isActive: false,
            dotColor: "bg-slate-300 dark:bg-slate-600",
        },
        {
            time: "11:15 AM - 12:00 PM",
            title: "Lunch Break",
            location: "Cafeteria",
            isActive: false,
            isBreak: true,
            dotColor: "bg-orange-400",
        },
        {
            time: "12:15 PM - 01:30 PM",
            title: "English Literature",
            location: "Library Hall • Mrs. Emily Bronte",
            isActive: false,
            dotColor: "bg-slate-300 dark:bg-slate-600",
        },
    ];

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/50">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold">Today's Schedule</h3>
                <span className="text-sm text-slate-500">Oct 20</span>
            </div>

            <div className="space-y-4">
                {schedule.map((item, index) => (
                    <div
                        key={index}
                        className={`flex gap-3 ${item.isBreak ? 'bg-orange-50 dark:bg-orange-900/10 p-3 rounded-xl border border-orange-200 dark:border-orange-900/30' : ''
                            }`}
                    >
                        <div className="flex flex-col items-center">
                            <div className={`w-3 h-3 rounded-full ${item.dotColor} mt-1.5`}></div>
                            {index < schedule.length - 1 && (
                                <div className="w-0.5 flex-1 bg-slate-100 dark:bg-slate-700 mt-1"></div>
                            )}
                        </div>
                        <div className="flex-1 pb-4">
                            <p className={`text-xs font-medium ${item.isActive ? 'text-primary-teacher' : 'text-slate-400'}`}>
                                {item.time}
                            </p>
                            <p className="text-sm font-bold mt-0.5">{item.title}</p>
                            <p className="text-xs text-slate-500">{item.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
