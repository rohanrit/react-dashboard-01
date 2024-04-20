import { useEffect, useRef, useState } from "react";

const FormModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const trigger = useRef(null);
  const modal = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      <button
        className="mt-10 block w-full rounded-md bg-indigo-600 px-7 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        ref={trigger}
        onClick={() => setModalOpen(true)}
      >
        Add Risk Scenario
      </button>
      <div
        data-dialog-backdrop="dialog"
        data-dialog-backdrop-close="true"
        tabIndex="0"
        className={`fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${
          modalOpen ? "block" : "hidden"
        }`}
      >
        <div
          ref={modal}
          onFocus={() => setModalOpen(true)}
          onBlur={() => setModalOpen(false)}
          className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
        >
          <div className="modal-body">
            <div className="max-w-lg mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
              <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">
                Welcome to My Company
              </h1>
              <div action="#" className="w-full flex flex-col gap-4">
                <div className="flex items-start flex-col justify-start">
                  <label
                    for="firstName"
                    className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                  >
                    First Name:
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="flex items-start flex-col justify-start">
                  <label
                    for="lastName"
                    className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                  >
                    Last Name:
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="flex items-start flex-col justify-start">
                  <label
                    for="username"
                    className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                  >
                    Username:
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="flex items-start flex-col justify-start">
                  <label
                    for="email"
                    className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="flex items-start flex-col justify-start">
                  <label
                    for="password"
                    className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                  >
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="flex items-start flex-col justify-start">
                  <label
                    for="confirmPassword"
                    className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                  >
                    Confirm Password:
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
                >
                  Register
                </button>
              </div>

              <div className="mt-4 text-center">
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  Already have an account?{" "}
                </span>
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="-mx-3 flex flex-wrap">
          <div className="w-1/2 px-3">
            <button
              onClick={() => setModalOpen(false)}
              className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:text-white"
            >
              Cancel
            </button>
          </div>
          <div className="w-1/2 px-3">
            <button className="block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-blue-dark">
              <a href={`/#`}> View Details </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormModal;
