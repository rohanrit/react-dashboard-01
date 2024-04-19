import { useTable } from "react-table";
import { Link } from "react-router-dom";
import { PiArrowLeftLight } from "react-icons/pi";
import { MdSearch, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const AssessmentPage = () => {
  const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
  ];

  return (
    <div className="pt-6">
      <section className="container px-4 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <nav aria-label="breadcrumb">
            <ol className="flex space-x-2">
              <li>
                <PiArrowLeftLight className="text-2xl" />
              </li>
              <li>
                <Link
                  to="#"
                  className="after:content-['/'] after:ml-2 text-gray-600 hover:text-purple-700"
                >
                  Library
                </Link>
              </li>
              <li className="text-purple-700" aria-current="page">
                <Link
                  to="#"
                  className="text-gray-600 hover:text-purple-700 font-mono font-bold text-purple-900 text-lg leading-tight"
                >
                  Risk Scenarios
                </Link>
              </li>
            </ol>
          </nav>

          <div className="flex items-center mt-4 gap-x-3">
            <button className="bg-indigo-800  text-sm text-white hover:text-indigo-600 px-7 py-2 rounded-md">
              Add Risk Scenario
            </button>
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
          <div class="bg-zinc-100 p-2 text-zinc-700 flex items-center justify-center">
    <button
      class="relative group transition-all duration-200 focus:overflow-visible w-max h-max p-2 overflow-hidden flex flex-row items-center justify-center bg-white gap-2 rounded-lg border border-zinc-200">
      <span>
        Sort: Risk ID (Ascending)
      </span>
      <svg class="rotate-90 group-focus:rotate-180" xmlns="http://www.w3.org/2000/svg" width="22" height="22"
        viewBox="0 0 24 24">
        <path fill="currentColor"
          d="m12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z" />
      </svg>
      <div
        class="absolute shadow-lg -bottom-40 left-0 w-full h-max p-2 bg-white border border-zinc-200 rounded-lg flex flex-col gap-2">
        <span class="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M12 5q-.425 0-.712-.288T11 4V2q0-.425.288-.712T12 1q.425 0 .713.288T13 2v2q0 .425-.288.713T12 5m4.95 2.05q-.275-.275-.275-.687t.275-.713l1.4-1.425q.3-.3.712-.3t.713.3q.275.275.275.7t-.275.7L18.35 7.05q-.275.275-.7.275t-.7-.275M20 13q-.425 0-.713-.288T19 12q0-.425.288-.712T20 11h2q.425 0 .713.288T23 12q0 .425-.288.713T22 13zm-8 10q-.425 0-.712-.288T11 22v-2q0-.425.288-.712T12 19q.425 0 .713.288T13 20v2q0 .425-.288.713T12 23M5.65 7.05l-1.425-1.4q-.3-.3-.3-.725t.3-.7q.275-.275.7-.275t.7.275L7.05 5.65q.275.275.275.7t-.275.7q-.3.275-.7.275t-.7-.275m12.7 12.725l-1.4-1.425q-.275-.3-.275-.712t.275-.688q.275-.275.688-.275t.712.275l1.425 1.4q.3.275.288.7t-.288.725q-.3.3-.725.3t-.7-.3M2 13q-.425 0-.712-.288T1 12q0-.425.288-.712T2 11h2q.425 0 .713.288T5 12q0 .425-.288.713T4 13zm2.225 6.775q-.275-.275-.275-.7t.275-.7L5.65 16.95q.275-.275.687-.275t.713.275q.3.3.3.713t-.3.712l-1.4 1.4q-.3.3-.725.3t-.7-.3M12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18m0-2q1.65 0 2.825-1.175T16 12q0-1.65-1.175-2.825T12 8q-1.65 0-2.825 1.175T8 12q0 1.65 1.175 2.825T12 16m0-4" />
          </svg>
          <p>Light</p>
        </span>
        <span class="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M12 21q-3.775 0-6.387-2.613T3 12q0-3.45 2.25-5.988T11 3.05q.325-.05.575.088t.4.362q.15.225.163.525t-.188.575q-.425.65-.638 1.375T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q.775 0 1.538-.225t1.362-.625q.275-.175.563-.162t.512.137q.25.125.388.375t.087.6q-.35 3.45-2.937 5.725T12 21m0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19m-.25-6.75" />
          </svg>
          <p>Dark</p>
        </span>
        <span class="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48">
            <g fill="none" stroke="currentColor" stroke-width="4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 32h10v9H19z" />
              <rect width="38" height="24" x="5" y="8" rx="2" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M22 27h4M14 41h20" />
            </g>
          </svg>
          <p>System</p>
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
              <div className="flex flex-col items-center justify-center gap-3 mt-5">
                <div className="w-full mx-auto bg-white rounded-lg shadow-md">
                  <div className="md:flex md:items-center md:justify-between bg-indigo-100 px-3 py-2">
                    <div className="flex items-center space-x-3">
                      <h3 className="truncate text-sm font-medium text-gray-600 uppercase">
                        rs-8306439
                      </h3>
                      <p className="inline-flex flex-shrink-0 items-center rounded bg-white px-3 py-0.5 text-xs font-medium ring-1 ring-inset ring-white-500">
                        <span className="text-gray-600 mr-1">Industry:</span>
                        Healthcare
                      </p>
                    </div>
                    <div className="flex justify-start align-center gap-4">
                      <p className="text-sm font-bold leading-snug text-gray-600">
                        <span className="text-gray-400">Last Updated:</span> 08 Jan,
                        2024
                      </p>
                      <p className="text-sm font-bold leading-snug text-gray-600">
                        <label className="relative inline-flex cursor-pointer items-center">
                          <input
                            id="switch"
                            type="checkbox"
                            className="peer sr-only"
                          />
                          <label htmlFor ="switch" className="hidden"></label>
                          <span className="peer h-5 w-9 rounded-full border bg-gray-400 after:absolute after:left-[2px] after:top-0.5 after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></span>
                          <span className="text-green-600 ml-2">Enabled</span>
                        </label>
                        
                      </p>
                      <p className="text-sm font-bold leading-snug text-gray-600">
                        <span className="text-gray-400">Disabled:</span> 3
                      </p>
                      <p className="text-sm font-bold leading-snug text-gray-600">
                        <span className="text-gray-400">Draft:</span> 5
                      </p>
                    </div>
                  </div>
                  <div className=" px-3 py-2">
                    <nav aria-label="breadcrumb">
                      <ol className="flex space-x-2">
                        <li>
                          <a
                            href="#"
                            className="after:content-['/'] after:ml-2 text-gray-600 hover:text-purple-700"
                          >
                            Home
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="after:content-['/'] after:ml-2 text-gray-600 hover:text-purple-700"
                          >
                            Library
                          </a>
                        </li>
                        <li className="text-purple-700" aria-current="page">
                          Data
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
                <div className="w-full px-10 py-8 mx-auto bg-white rounded-lg shadow-md">
                  <h1 className="font-mono font-bold text-purple-900 text-lg leading-tight border-b pb-4">
                    Tailwind CSS Breadcrumb
                  </h1>
                  <div className="pt-8">
                    <nav aria-label="breadcrumb">
                      <ol className="flex space-x-2">
                        <li>
                          <a
                            href="#"
                            className="after:content-['/'] after:ml-2 text-gray-600 hover:text-purple-700"
                          >
                            Home
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="after:content-['/'] after:ml-2 text-gray-600 hover:text-purple-700"
                          >
                            Library
                          </a>
                        </li>
                        <li className="text-purple-700" aria-current="page">
                          Data
                        </li>
                      </ol>
                    </nav>
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
            <a
              href="#"
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              <MdKeyboardArrowLeft />

              <span>previous</span>
            </a>

            <a
              href="#"
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              <span>Next</span>

              <MdKeyboardArrowRight />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssessmentPage;
