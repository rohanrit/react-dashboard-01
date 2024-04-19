import { BiMessageSquareEdit } from "react-icons/bi";
import {
  PiHouseLine,
  PiFilesLight,
  PiBookOpen,
  PiUsers,
  PiChatsTeardropLight,
} from "react-icons/pi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "flex flex-col items-center text-center text-white hover:text-gray-400 bg-gray-50 bg-opacity-25 py-3 px-1 rounded-lg"
      : "flex flex-col items-center text-center text-white hover:text-gray-400 py-3 px-1";

  return (
    <aside className="w-24 flex flex-col items-center bg-indigo-900 py-4">
      {/* //Left side NavBar   */}

      <div>{/* //App Logo   */}</div>

      <ul className="mt-2 text-gray-700 capitalize">
        {/* //Links   */}
        <li className="mt-3 p-1">
                  <NavLink to="/" className={linkClass}>
            <PiHouseLine className="text-xl" />
            <span className="text-xs mt-2">Home</span>
          </NavLink>
        </li>
        <li
          className="mt-3 p-1"
        >
          <NavLink to="/library" className={linkClass}>
            <PiBookOpen className="text-xl" />
            <span className="text-xs mt-2">Library</span>
          </NavLink>
        </li>
        <li
          className="mt-3 p-1"
        >
          <NavLink to="/assessment" className={linkClass}>
            <BiMessageSquareEdit className="text-xl" />
            <span className="text-xs mt-2">Assessments</span>
          </NavLink>
        </li>
        <li
          className="mt-3 p-1"
        >
          <NavLink to="/reports" className={linkClass}>
            <PiFilesLight className="text-xl" />
            <span className="text-xs mt-2">Reports</span>
          </NavLink>
        </li>
        <li
          className="mt-3 p-1"
        >
          <NavLink to="/chats" className={linkClass}>
            <PiChatsTeardropLight className="text-xl" />
            <span className="text-xs mt-2">Chats</span>
          </NavLink>
        </li>
        <li className="mt-3 p-1">
          <NavLink to="/usermanagement" className={linkClass}>
            <PiUsers className="text-xl" />
            <span className="text-xs mt-2">User Management</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
