import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import TopNavbar from "../components/TopNavbar";
import Sidebar from "../components/Sidebar";

const BaseLayout = () => {
  return (
    <div className="h-screen w-full flex overflow-hidden select-none">
      <main className="transition duration-500 ease-in-out overflow-y-auto w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default BaseLayout;
