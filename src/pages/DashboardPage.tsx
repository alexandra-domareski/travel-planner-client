import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const DashboardPage = () => {
  return (
    <div className="flex h-screen bg-[#F7F2F1]">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="text-2xl font-bold text-[#1F2937]">My Trips</h1>
          <p className="text-sm text-gray-500 mt-1">
            Plan and manage your travel adventures
          </p>
        </main>
      </div>
    </div>
  );
};
export default DashboardPage;
