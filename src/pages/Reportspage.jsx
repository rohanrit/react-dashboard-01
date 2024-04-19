import BottomBar from "../components/BottomBar";
import ReportCards from "../components/ReportCards";
import { PiArrowLeftThin } from "react-icons/pi";

const Reportspage = () => {
  // https://tailwindcomponents.com/component/chart-filter
  return (
    <>
    <div
      className="p-10 flex-1
      transition duration-500 ease-in-out overflow-y-auto"
    >
      <div className="flex capitalize text-3xl font-bold mb-5">
        <span>
          <PiArrowLeftThin className="text-4xl" />
        </span>
        <span>Report</span>
      </div>
      <ReportCards />
      </div>
      <BottomBar />
    </>
  );
};

export default Reportspage;
