import FeatureCard from "./FeatureCard";
import { Link } from "react-router-dom";
import { PiHouseLine } from "react-icons/pi";

const FeatureCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4 rounded-lg">
      <FeatureCard>
        <div className="flex items-center justify-start font-semibold text-indigo-800 capitalize gap-2">
          <div className="flex items-center">
            <PiHouseLine className="text-2xl" />
          </div>
          <Link to="/riskscenarios" className="text-lg font-bold">
            <span>Risk Scenarios</span>
          </Link>
        </div>
        <p className="text-sm font-medium leading-snug font-semibold text-gray-400 my-6">
          Anticipate and address potential cybersecurity risks to business.
        </p>
        <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg"></div>
        <div className="flex justify-start align-center gap-4 mt-5">
          <p className="text-sm font-bold leading-snug text-gray-600">
            <span className="text-gray-400">All Scenarios:</span> 40
          </p>
          <p className="text-sm font-bold leading-snug text-gray-600">
            <span className="text-gray-400">Published:</span> 32
          </p>
          <p className="text-sm font-bold leading-snug text-gray-600">
            <span className="text-gray-400">Disabled:</span> 3
          </p>
          <p className="text-sm font-bold leading-snug text-gray-600">
            <span className="text-gray-400">Draft:</span> 5
          </p>
        </div>
      </FeatureCard>
      <FeatureCard>
        <div className="flex items-center justify-start font-semibold text-indigo-800 capitalize gap-2">
          <div className="flex items-center">
            <PiHouseLine className="text-2xl" />
          </div>
          <Link to="/assessment" className="text-lg font-bold">
            <span>Assessment</span>
          </Link>
          <h5 className="text-lg font-bold">Assessment</h5>
        </div>
        <p className="text-sm font-medium leading-snug font-semibold text-gray-400 my-6">
          Assess risk scenarios to identify net risk scores.
        </p>
        <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg"></div>
        <div className="flex justify-start align-center gap-4 mt-5"></div>
      </FeatureCard>
      <FeatureCard>
        <div className="flex items-center justify-start font-semibold text-indigo-800 capitalize gap-2">
          <div className="flex items-center">
            <PiHouseLine className="text-2xl" />
          </div>
          <Link to="/reports" className="text-lg font-bold">
            <span>Reports</span>
          </Link>
        </div>
        <p className="text-sm font-medium leading-snug font-semibold text-gray-400 my-6">
          Generate reports for the business and security leaders.
        </p>
        <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg"></div>
        <div className="flex justify-start align-center gap-4 mt-5"></div>
      </FeatureCard>
    </div>
  );
};

export default FeatureCards;
