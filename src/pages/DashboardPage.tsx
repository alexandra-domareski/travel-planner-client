import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default DashboardPage;
