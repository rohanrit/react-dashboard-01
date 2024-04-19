import { Link } from "react-router-dom";
import FeatureCards from "../components/FeatureCards";

const LibraryPage = () => {
  return (
    <div
      className="p-10 flex-1
		transition duration-500 ease-in-out overflow-y-auto"
    >
      <div className="flex flex-col capitalize text-3xl font-bold mb-5">
        <span>Library</span>
      </div>
      <FeatureCards />
    </div>
  );
};

export default LibraryPage;
