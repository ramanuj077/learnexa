import StudentSidebar from "./components/StudentSidebar";
import StudentHeader from "./components/StudentHeader";
import WelcomeBanner from "./components/WelcomeBanner";
import OngoingCourses from "./components/OngoingCourses";
import GradesSummary from "./components/GradesSummary";
import ExamCountdown from "./components/ExamCountdown";
import ActiveAssignments from "./components/ActiveAssignments";
import StudentSchedule from "./components/StudentSchedule";
import QuickLinks from "./components/QuickLinks";

export default function StudentDashboard() {
    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark">
            <StudentSidebar />

            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <div className="flex-1 overflow-y-auto p-6 lg:p-8">
                    <StudentHeader />

                    <WelcomeBanner />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left Column - 2 cols */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <OngoingCourses />
                                <GradesSummary />
                            </div>

                            <ActiveAssignments />
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            <ExamCountdown />
                            <StudentSchedule />
                            <QuickLinks />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
