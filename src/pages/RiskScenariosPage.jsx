import { useTable } from "react-table";
import { Link } from "react-router-dom";

import {
  PiDotsThreeVerticalBold,
  PiArrowLeftLight,
  PiSortAscendingLight,
  PiSortDescendingLight,
} from "react-icons/pi";
import {
  MdCheck,
  MdSearch,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import FormModal from "../components/FormModal";
import ToggleSwitch from "../components/ToggleSwitch";

const RiskScenariosPage = () => {
  const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
  ];

  return (
    <div className="py-6">
      <section className="container px-4 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <nav aria-label="breadcrumb">
            <ol className="flex space-x-2">
              <li>
                <PiArrowLeftLight className="text-2xl" />
              </li>
              <li>
                <Link
                  to="/library"
                  className="after:content-['/'] after:ml-2 text-gray-600 hover:text-purple-700"
                >
                  Library
                </Link>
              </li>
              <li className="text-purple-700" aria-current="page">
                <h5 className="text-gray-600 font-mono font-bold text-purple-900 text-lg leading-tight">
                  Risk Scenarios
                </h5>
              </li>
            </ol>
          </nav>
          <div className="flex items-center mt-4 gap-x-3">
            <FormModal />
          </div>
        </div>

        <div className="mt-6 md:flex md:items-center md:justify-between">
          <div className="relative flex items-center mt-4 md:mt-0">
            <MdSearch className="absolute  text-2xl ml-2" />
            <input
              type="text"
              placeholder="Search by keywords"
              className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="inline-flex bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
            <div className="bg-zinc-100 p-2 text-zinc-700 flex items-center justify-center">
              <button className="relative group transition-all duration-200 focus:overflow-visible w-max h-min p-2 overflow-hidden flex flex-row items-center justify-center bg-white gap-2 rounded-lg border border-zinc-200">
                <span>Sort: Risk ID (Ascending)</span>
                <MdOutlineKeyboardArrowDown />
                <div className="absolute shadow-lg -bottom-40 left-0 w-full h-26 p-2 bg-white border border-zinc-200 rounded-lg flex flex-col gap-2">
                  <span className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
                    <PiSortAscendingLight />
                    <p>Ascending</p>
                  </span>
                  <span className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
                    <PiSortDescendingLight />
                    <p>Descending</p>
                  </span>
                </div>
              </button>
            </div>

            <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
              Monitored
            </button>

            <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
              Unmonitored
            </button>
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg"></div>
              <div className="flex flex-col items-center justify-center gap-5 mt-5">
                <div className="w-full mx-auto bg-white rounded-lg shadow-md">
                  <div className="md:flex md:items-center md:justify-between bg-indigo-100 px-4 py-3">
                    <div className="flex items-center space-x-3">
                      <h3 className="truncate text-sm font-medium text-gray-600 uppercase">
                        rs-8306439
                      </h3>
                      <p className="inline-flex flex-shrink-0 items-center rounded bg-white px-3 py-0.5 text-xs font-medium ring-1 ring-inset ring-white-500">
                        <span className="text-gray-600 mr-1">Industry:</span>
                        Healthcare
                      </p>
                    </div>
                    <div className="flex justify-center align-center gap-4">
                      <div className="py-1.5">
                        <p className="text-sm font-bold leading-snug text-gray-600">
                          <span className="text-gray-400">Last Updated:</span>{" "}
                          08 Jan, 2024
                        </p>
                      </div>
                      <div className="py-1">
                        <ToggleSwitch />
                      </div>
                      <div className="flex justify-center">
                        <button
                          id="dropdownButton"
                          data-dropdown-toggle="dropdown"
                          className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm"
                          type="button"
                        >
                          <span className="sr-only">Open dropdown</span>
                          <PiDotsThreeVerticalBold className="text-2xl  text-blue-900" />
                        </button>
                        <div
                          id="dropdown"
                          className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" px-4 py-3">
                    <p className="text-gray-600 font-medium">
                      Confidentiality of system ABC is compromised.
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto bg-white rounded-lg shadow-md">
                  <div className="md:flex md:items-center md:justify-between bg-indigo-100 px-4 py-3">
                    <div className="flex items-center space-x-3">
                      <h3 className="truncate text-sm font-medium text-gray-600 uppercase">
                        rs-8306439
                      </h3>
                      <p className="inline-flex flex-shrink-0 items-center rounded bg-white px-3 py-0.5 text-xs font-medium ring-1 ring-inset ring-white-500">
                        <span className="text-gray-600 mr-1">Industry:</span>
                        Healthcare
                      </p>
                    </div>
                    <div className="flex justify-center align-center gap-4">
                      <div className="py-1.5">
                        <p className="text-sm font-bold leading-snug text-gray-600">
                          <span className="text-gray-400">Last Updated:</span>{" "}
                          08 Jan, 2024
                        </p>
                      </div>

                      <button className="py-0.5 px-7 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        <span className="flex flex-row gap-2 items-center hover:bg-zinc-100 rounded-lg">
                          <MdCheck className="text-md" />
                          <span>Draft</span>
                        </span>
                      </button>
                      <div className="flex justify-center">
                        <button
                          id="dropdownButton"
                          data-dropdown-toggle="dropdown"
                          className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm"
                          type="button"
                        >
                          <span className="sr-only">Open dropdown</span>
                          <PiDotsThreeVerticalBold className="text-2xl  text-blue-900" />
                        </button>
                        <div
                          id="dropdown"
                          className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" px-4 py-3">
                    <p className="text-gray-600 font-medium">
                      Integrity of data stored in system ABC is compromised.
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto bg-white rounded-lg shadow-md">
                  <div className="md:flex md:items-center md:justify-between bg-indigo-100 px-4 py-3">
                    <div className="flex items-center space-x-3">
                      <h3 className="truncate text-sm font-medium text-gray-600 uppercase">
                        rs-8306439
                      </h3>
                      <p className="inline-flex flex-shrink-0 items-center rounded bg-white px-3 py-0.5 text-xs font-medium ring-1 ring-inset ring-white-500">
                        <span className="text-gray-600 mr-1">Industry:</span>
                        Healthcare
                      </p>
                    </div>
                    <div className="flex justify-center align-center gap-4">
                      <div className="py-1.5">
                        <p className="text-sm font-bold leading-snug text-gray-600">
                          <span className="text-gray-400">Last Updated:</span>{" "}
                          08 Jan, 2024
                        </p>
                      </div>
                      <div className="py-1">
                        <ToggleSwitch />
                      </div>
                      <div className="flex justify-center">
                        <button
                          id="dropdownButton"
                          data-dropdown-toggle="dropdown"
                          className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm"
                          type="button"
                        >
                          <span className="sr-only">Open dropdown</span>
                          <PiDotsThreeVerticalBold className="text-2xl  text-blue-900" />
                        </button>
                        <div
                          id="dropdown"
                          className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" px-4 py-3">
                    <p className="text-gray-600 font-medium">
                      System ABC is operationally unavailable for an extended
                      time period
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto bg-white rounded-lg shadow-md">
                  <div className="md:flex md:items-center md:justify-between bg-indigo-100 px-4 py-3">
                    <div className="flex items-center space-x-3">
                      <h3 className="truncate text-sm font-medium text-gray-600 uppercase">
                        rs-8306439
                      </h3>
                      <p className="inline-flex flex-shrink-0 items-center rounded bg-white px-3 py-0.5 text-xs font-medium ring-1 ring-inset ring-white-500">
                        <span className="text-gray-600 mr-1">Industry:</span>
                        Healthcare
                      </p>
                    </div>
                    <div className="flex justify-center align-center gap-4">
                      <div className="py-1.5">
                        <p className="text-sm font-bold leading-snug text-gray-600">
                          <span className="text-gray-400">Last Updated:</span>{" "}
                          08 Jan, 2024
                        </p>
                      </div>
                      <div className="py-1">
                        <ToggleSwitch />
                      </div>
                      <div className="flex justify-center">
                        <button
                          id="dropdownButton"
                          data-dropdown-toggle="dropdown"
                          className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm"
                          type="button"
                        >
                          <span className="sr-only">Open dropdown</span>
                          <PiDotsThreeVerticalBold className="text-2xl  text-blue-900" />
                        </button>
                        <div
                          id="dropdown"
                          className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" px-4 py-3">
                    <p className="text-gray-600 font-medium">
                      Confidentiality of system XYZ is compromised.
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto bg-white rounded-lg shadow-md">
                  <div className="md:flex md:items-center md:justify-between bg-indigo-100 px-4 py-3">
                    <div className="flex items-center space-x-3">
                      <h3 className="truncate text-sm font-medium text-gray-600 uppercase">
                        rs-8306439
                      </h3>
                      <p className="inline-flex flex-shrink-0 items-center rounded bg-white px-3 py-0.5 text-xs font-medium ring-1 ring-inset ring-white-500">
                        <span className="text-gray-600 mr-1">Industry:</span>
                        Healthcare
                      </p>
                    </div>
                    <div className="flex justify-center align-center gap-4">
                      <div className="py-1.5">
                        <p className="text-sm font-bold leading-snug text-gray-600">
                          <span className="text-gray-400">Last Updated:</span>{" "}
                          08 Jan, 2024
                        </p>
                      </div>
                      <button className="py-0.5 px-7 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        <span className="flex flex-row gap-2 items-center hover:bg-zinc-100 rounded-lg">
                          <MdCheck className="text-md" />
                          <span>Draft</span>
                        </span>
                      </button>
                      <div className="flex justify-center">
                        <button
                          id="dropdownButton"
                          data-dropdown-toggle="dropdown"
                          className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm"
                          type="button"
                        >
                          <span className="sr-only">Open dropdown</span>
                          <PiDotsThreeVerticalBold className="text-2xl  text-blue-900" />
                        </button>
                        <div
                          id="dropdown"
                          className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" px-4 py-3">
                    <p className="text-gray-600 font-medium">
                      Integrity of data stored in system XYZ is compromised.
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto bg-white rounded-lg shadow-md">
                  <div className="md:flex md:items-center md:justify-between bg-indigo-100 px-4 py-3">
                    <div className="flex items-center space-x-3">
                      <h3 className="truncate text-sm font-medium text-gray-600 uppercase">
                        rs-8306439
                      </h3>
                      <p className="inline-flex flex-shrink-0 items-center rounded bg-white px-3 py-0.5 text-xs font-medium ring-1 ring-inset ring-white-500">
                        <span className="text-gray-600 mr-1">Industry:</span>
                        Healthcare
                      </p>
                    </div>
                    <div className="flex justify-center align-center gap-4">
                      <div className="py-1.5">
                        <p className="text-sm font-bold leading-snug text-gray-600">
                          <span className="text-gray-400">Last Updated:</span>{" "}
                          08 Jan, 2024
                        </p>
                      </div>
                      <div className="py-1">
                        <ToggleSwitch />
                      </div>
                      <div className="flex justify-center">
                        <button
                          id="dropdownButton"
                          data-dropdown-toggle="dropdown"
                          className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm"
                          type="button"
                        >
                          <span className="sr-only">Open dropdown</span>
                          <PiDotsThreeVerticalBold className="text-2xl  text-blue-900" />
                        </button>
                        <div
                          id="dropdown"
                          className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" px-4 py-3">
                    <p className="text-gray-600 font-medium">
                      System XYZ is operationally unavailable for an extended
                      time period.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Page{" "}
            <span className="font-medium text-gray-700 dark:text-gray-100">
              1 of 10
            </span>
          </div>

          <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
            <Link
              to="#"
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              <MdKeyboardArrowLeft />
              <span>previous</span>
            </Link>
            <Link
              to="#"
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              <span>Next</span>
              <MdKeyboardArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RiskScenariosPage;
