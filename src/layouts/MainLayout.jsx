import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import TopNavbar from "../components/TopNavbar";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <div className="h-screen w-full flex overflow-hidden select-none">
    <Sidebar />
      <main className="p-1 bg-gray-100 transition duration-500 ease-in-out overflow-y-auto w-full">
        <TopNavbar />
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
