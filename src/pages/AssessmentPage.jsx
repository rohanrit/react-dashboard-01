import { Link } from "react-router-dom";
import { PiArrowLeftLight } from "react-icons/pi";
import BottomBar from "../components/BottomBar";

const AssessmentPage = () => {
  return (
    <>
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
                  to="/assessment"
                  className="text-gray-600 hover:text-purple-700"
                >
                  Assessment
                </Link>
              </li>
            </ol>
          </nav>
        </div>
          <div className="mx-auto max-w-2xl bg-white rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div class="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
                 
                 <div class="relative flex flex-row justify-between">
                     <div class="flex items-center">
                     <div class="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-100 dark:bg-white/5">
                        <span class="material-symbols-rounded h-6 w-6 text-brand-500 dark:text-white">
                             check_circle
                         </span>  
                     </div>
                     <h4 class="ml-4 text-xl font-bold text-navy-700 dark:text-white">
                         Tasks
                     </h4>
                     </div>
                     <button 
                     class='flex items-center text-xl hover:cursor-pointer bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10 rounded-lg'
                     >
                     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
                     </button>
                 </div>
      
                 <div class="h-full w-full">
                     <div class="mt-5 flex items-center justify-between p-2">
                         <div class="flex items-center justify-center gap-2">
                             <input
                                 type="checkbox"
                                 class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                                 justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                                 checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400"
                                 name="weekly" 
                             />
                             <p class="text-base font-bold text-navy-700 dark:text-white">
                             Landing Page Design
                             </p>
                         </div>
                         <span class="material-symbols-rounded h-6 w-6 text-navy-700 dark:text-white cursor-pointer">
                             drag_indicator
                         </span>  
                     </div>
     
                     <div class="mt-2 flex items-center justify-between p-2">
                         <div class="flex items-center justify-center gap-2">
                             <input
                                 type="checkbox"
                                 class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                                 justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                                 checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400"
                                 name="weekly"
                                 checked
                             />
                             <p class="text-base font-bold text-navy-700 dark:text-white">
                             Mobile App Design
                             </p>
                         </div>
                         <span class="material-symbols-rounded h-6 w-6 text-navy-700 dark:text-white cursor-pointer">
                             drag_indicator
                         </span>  
                     </div>
     
                     <div class="mt-2 flex items-center justify-between p-2">
                         <div class="flex items-center justify-center gap-2">
                             <input
                                 type="checkbox"
                                 class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                                 justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                                 checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400"
                                 name="weekly" 
                                 checked
                             />
                             <p class="text-base font-bold text-navy-700 dark:text-white">
                             Dashboard Builder
                             </p>
                         </div>
                         <span class="material-symbols-rounded h-6 w-6 text-navy-700 dark:text-white cursor-pointer">
                             drag_indicator
                         </span>  
                     </div>
     
                     <div class="mt-2 flex items-center justify-between p-2">
                         <div class="flex items-center justify-center gap-2">
                             <input
                                 type="checkbox"
                                 class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                                 justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                                 checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400"
                                 name="weekly" 
                             />
                             <p class="text-base font-bold text-navy-700 dark:text-white">
                             Landing Page Design
                             </p>
                         </div>
                         <span class="material-symbols-rounded h-6 w-6 text-navy-700 dark:text-white cursor-pointer">
                             drag_indicator
                         </span>  
                     </div>
     
                     <div class="mt-2 flex items-center justify-between p-2">
                         <div class="flex items-center justify-center gap-2">
                             <input
                                 type="checkbox"
                                 class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                                 justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                                 checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400"
                                 name="weekly" 
                             />
                             <p class="text-base font-bold text-navy-700 dark:text-white">
                             Dashboard Builder
                             </p>
                         </div>
                         <span class="material-symbols-rounded h-6 w-6 text-navy-700 dark:text-white cursor-pointer">
                             drag_indicator
                         </span>  
                     </div>
                 </div>
                 </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Pay once, own it forever
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    $349
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    USD
                  </span>
                </p>
                <Link
                  to="#"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get access
                </Link>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Lifetime membership
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque
              amet indis perferendis blanditiis repellendus etur quidem
              assumenda.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100"></div>
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                Private forum access
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                Member resources
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                Entry to annual conference
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                Official member t-shirt
              </li>
            </ul>
          </div>
        </div>
      </section>
      </div>
      
      <BottomBar />
    </>
  );
};

export default AssessmentPage;
