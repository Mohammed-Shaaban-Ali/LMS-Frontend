import AminSidebar from "../components/admin/AminSidebar";
import AdminProtected from "../hooks/adminProtected";
import Heading from "../utils/Heading";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminProtected>
        <Heading
          title={`Elearing Admin`}
          keywords="Online Learning, E-Learning Platform, Educational Technology, Interactive Courses, Virtual Classroom, Distance Learning"
          description="Transform your learning experience with our state-of-the-art Learning Management System. Explore a variety of courses, interactive modules, and advanced features designed to enhance education and training. Join today for a seamless and effective online learning journey."
        />
        <div className="flex">
          <div>
            <AminSidebar />
          </div>
          <div className="w-full h-screen overflow-y-scroll px-5">
            {children}
          </div>
        </div>
      </AdminProtected>
    </>
  );
}
