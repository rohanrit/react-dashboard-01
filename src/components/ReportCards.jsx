import ReportCard from "./ReportCard";
import { MdKeyboardArrowDown } from "react-icons/md";
import BarChart from "../components/BarChart";
import DonutChart from "../components/DonutChart";
import LineChart from "../components/LineChart";

const ReportCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4 rounded-lg">
      <ReportCard>
        <div className="bg-white border rounded-lg shadow-md">
          <div className="flex items-center justify-start font-semibold bg-gray-200 px-3 py-2 capitalize">
            <p className="text-sm font-bold">Top 10 Risk Scenarios</p>
            <MdKeyboardArrowDown className="text-xl" />
          </div>
          <div className="flex justify-start align-center gap-4 mt-5 p-5">
            <BarChart />
          </div>
        </div>
        <div className="bg-white border rounded-lg shadow-md">
          <div className="flex items-center justify-start bg-gray-200 px-3 py-2">
            <p className="text-xs font-bold font-semibold capitalize text-gray-500">
              Summary
            </p>
            <MdKeyboardArrowDown className="text-xl" />
          </div>
          <div className="p-1 h-100">
            <div className="border rounded h-full w-full bg-gray-100 p-1 pb-56">
              <p className="text-xs text-gray-400">Enter Summary</p>
            </div>
          </div>
        </div>
      </ReportCard>
      <ReportCard>
        <div className="bg-white border rounded-lg shadow-md">
          <div className="flex items-center justify-start font-semibold bg-gray-200 px-3 py-2 capitalize">
            <p className="text-sm font-bold">Risk Scenarios by Likelihood</p>
            <MdKeyboardArrowDown className="text-xl" />
          </div>
          <div className="flex justify-start align-center gap-4 mt-5 p-5">
          <DonutChart />
          </div>
        </div>
        <div className="bg-white border rounded-lg shadow-md">
          <div className="flex items-center justify-start bg-gray-200 px-3 py-2">
            <p className="text-xs font-bold font-semibold capitalize text-gray-500">
              Summary
            </p>
            <MdKeyboardArrowDown className="text-xl" />
          </div>
          <div className="p-1 h-100">
            <div className="border rounded h-full w-full bg-gray-100 p-1 pb-56">
              <p className="text-xs text-gray-400">Enter Summary</p>
            </div>
          </div>
        </div>
      </ReportCard>
      <ReportCard>
        <div className="bg-white border rounded-lg shadow-md">
          <div className="flex items-center justify-start font-semibold bg-gray-200 px-3 py-2 capitalize">
            <p className="text-sm font-bold">Custom Widget</p>
            <MdKeyboardArrowDown className="text-xl" />
          </div>
          <div className="flex justify-start align-center gap-4 mt-5 p-5">
          <LineChart />
          </div>
        </div>
        <div className="bg-white border rounded-lg shadow-md">
          <div className="flex items-center justify-start bg-gray-200 px-3 py-2">
            <p className="text-xs font-bold font-semibold capitalize text-gray-500">
              Summary
            </p>
            <MdKeyboardArrowDown className="text-xl" />
          </div>
          <div className="p-1 h-100">
            <div className="border rounded h-full w-full bg-gray-100 p-1 pb-56">
              <p className="text-xs text-gray-400">Enter Summary</p>
            </div>
          </div>
        </div>
      </ReportCard>
    </div>
  );
};

export default ReportCards;
