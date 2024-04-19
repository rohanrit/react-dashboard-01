import { PiUserCircleThin, PiBellLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <nav className="px-5 py-3 flex flex-col bg-white rounded overflow-y-auto">
      <div className="flex items-center justify-end  gap-4">
        <Link to="#" className="relative">
          <span>
            <PiBellLight className="text-3xl text-gray-500" />
          </span>

          <div className="absolute w-2 h-2 left-1 mb-6 ml-2 bottom-1">
            <span className="px-2 py-1 bg-red-500 rounded-full text-white text-xs">
              2
            </span>
          </div>
        </Link>
        <div className="flex items-center">
          <button className="ml-1 focus:outline-none">
          <PiUserCircleThin className="text-4xl text-gray-500" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
