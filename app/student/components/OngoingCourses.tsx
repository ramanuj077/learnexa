export default function OngoingCourses() {
    const courses = [
        { name: "Advanced Physics", progress: 78, color: "bg-primary-teacher" },
        { name: "Organic Chemistry", progress: 42, color: "bg-orange-500" },
        { name: "World Literature", progress: 92, color: "bg-emerald-500" },
    ];

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/50">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold">Ongoing Courses</h3>
                <span className="text-sm text-slate-500">3 TOTAL</span>
            </div>

            <div className="space-y-5">
                {courses.map((course, index) => (
                    <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-medium">{course.name}</p>
                            <span className={`text-sm font-bold ${course.progress >= 80 ? 'text-emerald-500' :
                                    course.progress >= 50 ? 'text-primary-teacher' : 'text-orange-500'
                                }`}>
                                {course.progress}%
                            </span>
                        </div>
                        <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div
                                className={`h-full ${course.color} rounded-full transition-all`}
                                style={{ width: `${course.progress}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
