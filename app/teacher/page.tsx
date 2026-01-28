import TeacherSidebar from "./components/TeacherSidebar";
import TeacherHeader from "./components/TeacherHeader";
import TeacherStatsCards from "./components/TeacherStatsCards";
import CurrentClassAttendance from "./components/CurrentClassAttendance";
import RecentSubmissions from "./components/RecentSubmissions";
import TodaySchedule from "./components/TodaySchedule";
import Notices from "./components/Notices";
import ParentCommunicationCTA from "./components/ParentCommunicationCTA";

export default function TeacherDashboard() {
    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark">
            <TeacherSidebar />

            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <div className="flex-1 overflow-y-auto p-6 lg:p-8">
                    <TeacherHeader />

                    <TeacherStatsCards />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <CurrentClassAttendance />
                            <RecentSubmissions />
                        </div>

                        <div className="space-y-8">
                            <TodaySchedule />
                            <Notices />
                            <ParentCommunicationCTA />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
