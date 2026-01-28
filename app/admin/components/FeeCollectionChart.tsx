export default function FeeCollectionChart() {
    const data = [
        { month: "Jan", amount: "$32k", height: "40%" },
        { month: "Feb", amount: "$45k", height: "60%" },
        { month: "Mar", amount: "$58k", height: "75%" },
        { month: "Apr", amount: "$42k", height: "55%" },
        { month: "May", amount: "$82k", height: "90%" },
        { month: "Jun", amount: "$71k", height: "80%" },
    ];

    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h4 className="text-lg font-bold dark:text-white">Fee Collection Trends</h4>
                    <p className="text-xs text-slate-500">Monthly breakdown of revenue streams</p>
                </div>
                <select className="bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-xs font-medium py-1.5 pr-8 dark:text-white">
                    <option>Current Year</option>
                    <option>Previous Year</option>
                </select>
            </div>

            <div className="relative h-64 w-full">
                <div className="absolute inset-0 flex items-end justify-between px-2 pt-10">
                    {data.map((item, index) => (
                        <div key={index} className="w-full flex flex-col items-center">
                            <div
                                className="w-4/5 bg-primary-admin/20 rounded-t-lg relative group transition-all"
                                style={{ height: item.height }}
                            >
                                <div className="absolute inset-x-0 bottom-0 bg-primary-admin h-2/3 rounded-t-lg"></div>
                                <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap z-20">
                                    {item.month}: {item.amount}
                                </div>
                            </div>
                            <span className="text-[10px] text-slate-400 mt-2">{item.month}</span>
                        </div>
                    ))}
                </div>

                {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 border-b border-slate-300 dark:border-slate-600">
                    <div className="w-full border-t border-slate-300 dark:border-slate-600"></div>
                    <div className="w-full border-t border-slate-300 dark:border-slate-600"></div>
                    <div className="w-full border-t border-slate-300 dark:border-slate-600"></div>
                    <div className="w-full border-t border-slate-300 dark:border-slate-600"></div>
                </div>
            </div>
        </div>
    );
}
