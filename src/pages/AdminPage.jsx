import { BiHomeAlt2, BiMessageSquareEdit } from "react-icons/bi";
import {
    PiBellLight,
    PiFilesLight,
    PiBookOpen,
    PiUsers,
    PiChatsTeardropLight,
  } from "react-icons/pi";
import { Link } from "react-router-dom";

const AdminPage = () => {
  return (
    <div className="h-screen w-full flex overflow-hidden select-none">
      <aside className="w-24 flex flex-col items-center bg-indigo-900 py-4">
        {/* //Left side NavBar   */}

        <div>{/* //App Logo   */}</div>

        <ul className="mt-2 text-gray-700 capitalize">
          {/* //Links   */}
          <li className="mt-3 p-2 text-white rounded-lg">
            <Link to="#" className=" flex flex-col items-center">
              <BiHomeAlt2 className="text-xl" />
              <span className="text-xs mt-2">Home</span>
            </Link>
          </li>
          <li
            className="mt-3 p-2 hover:text-gray-400 text-white dark-hover:text-blue-300
				rounded-lg"
          >
            <Link to="#" className=" flex flex-col items-center">
              <PiBookOpen className="text-xl" />
              <span className="text-xs mt-2">Library</span>
            </Link>
          </li>
          <li
            className="mt-3 p-2 hover:text-gray-400 text-white dark-hover:text-blue-300
				rounded-lg"
          >
            <Link to="#" className=" flex flex-col items-center">
              <BiMessageSquareEdit className="text-xl" />
              <span className="text-xs mt-2">Assessments</span>
            </Link>
          </li>
          <li
            className="mt-3 p-2 hover:text-gray-400 text-white dark-hover:text-blue-300
				rounded-lg"
          >
            <Link to="#" className=" flex flex-col items-center">
              <PiFilesLight className="text-xl" />
              <span className="text-xs mt-2">Reports</span>
            </Link>
          </li>
          <li
            className="mt-3 p-2 hover:text-gray-400 text-white dark-hover:text-blue-300
				rounded-lg"
          >
            <Link to="#" className=" flex flex-col items-center">
              <PiChatsTeardropLight className="text-xl" />
              <span className="text-xs mt-2">Chats</span>
            </Link>
          </li>
          <li className="mt-3 p-2 hover:text-gray-400 text-white  text-center rounded-lg">
            <Link to="#" className=" flex flex-col items-center">
              <PiUsers className="text-xl" />
              <span className="text-xs mt-2">User Management</span>
            </Link>
          </li>
        </ul>
      </aside>
      <main className="p-1 bg-gray-100 transition duration-500 ease-in-out overflow-y-auto">
        <nav className="my-1 mr-1 px-6 py-4 flex flex-col bg-white rounded-lg overflow-y-auto">
          {/* //Right side NavBar   */}
          <div className="flex items-center justify-between">
            {/* //Info   */}

            <Link to="#" className="relative">
              {/* //Left side   */}
              <span>
                <PiBellLight className="text-2xl" />
              </span>

              <div className="absolute w-2 h-2 left-0 mb-6 ml-2 bottom-0">
                <span
                  className="px-2 py-1 bg-red-600 rounded-full text-white
						text-xs"
                >
                  7
                </span>
              </div>
            </Link>
            <div className="flex items-center">
              {/* //Right side   */}
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="https://i.pinimg.com/originals/68/e1/e1/68e1e137959d363f172dc3cc50904669.jpg"
                alt="tempest profile"
              />
              <button className="ml-1 focus:outline-none">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 192 512">
                  <path
                    d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72
							72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72
							72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0
							352c0 39.8 32.2 72 72 72s72-32.2
							72-72-32.2-72-72-72-72 32.2-72 72z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <div
          className="my-1 pt-2 pb-2 px-10 flex-1
		transition duration-500 ease-in-out overflow-y-auto"
        >
          <div className="flex flex-col capitalize text-3xl">
            <span className="font-semibold">hello,</span>
            <span>tempest!</span>
          </div>
          <div className="flex">
            <div className="mr-6 w-1/2 mt-8 py-2 flex-shrink-0 flex flex-col bg-white rounded-lg">
              {/* //Card list container   */}

              <h3
                className="flex items-center pt-1 pb-1 px-8 text-lg font-semibold
					capitalize"
              >
                {/* //Header   */}
                <span>nearby jobs</span>
                <button className="ml-2">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 256 512">
                    <path
                      d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
								0l-22.6-22.6c-9.4-9.4-9.4-24.6
								0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6
								0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136
								136c9.5 9.4 9.5 24.6.1 34z"
                    ></path>
                  </svg>
                </button>
              </h3>
              <div>
                {/* //List   */}
                <ul className="pt-1 pb-2 px-3 overflow-y-auto">
                  <li className="mt-2">
                    <Link
                      className="p-5 flex flex-col justify-between
								bg-gray-100 rounded-lg"
                      to="#"
                    >
                      <div
                        className="flex items-center justify-between
									font-semibold capitalize"
                      >
                        {/* //Top section   */}

                        <span>english lesson</span>

                        <div className="flex items-center">
                          <svg
                            className="h-5 w-5 fill-current mr-1
											text-gray-600"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M14 12l-4-4v3H2v2h8v3m12-4a10
												10 0 01-19.54 3h2.13a8 8 0
												100-6H2.46A10 10 0 0122 12z"
                            ></path>
                          </svg>
                          <span>4.2 mi</span>
                        </div>
                      </div>

                      <p
                        className="text-sm font-medium leading-snug
									text-gray-600 my-3"
                      >
                        {/* //Middle section   */}
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Explicabo assumenda porro sapiente, cum nobis
                        tempore delectus consectetur ullam reprehenderit quis
                        ducimus, iusto dolor nam corporis id perspiciatis
                        consequuntur saepe excepturi.
                      </p>

                      <div className="flex justify-between">
                        {/* //Bottom section   */}

                        <div className="flex">
                          <img
                            className="h-6 w-6 rounded-full mr-3"
                            src="https://i.pinimg.com/originals/b7/06/0b/b7060b60f6ee1beeedf7d648dabd89a1.jpg"
                            alt=""
                          />
                          <span>
                            <span
                              className="text-blue-500
												font-semibold"
                            >
                              Regina C.
                            </span>
                            via HeyTutor
                          </span>
                        </div>

                        <p
                          className="text-sm font-medium leading-snug
										text-gray-600"
                        >
                          14 hours ago
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      className="p-5 flex flex-col justify-between
								bg-gray-100 rounded-lg"
                      to="#"
                    >
                      <div
                        className="flex items-center justify-between
									font-semibold capitalize"
                      >
                        {/* //Top section   */}

                        <span>english lesson</span>

                        <div className="flex items-center">
                          <svg
                            className="h-5 w-5 fill-current mr-1
											text-gray-600"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M14 12l-4-4v3H2v2h8v3m12-4a10
												10 0 01-19.54 3h2.13a8 8 0
												100-6H2.46A10 10 0 0122 12z"
                            ></path>
                          </svg>
                          <span>4.2 mi</span>
                        </div>
                      </div>

                      <p
                        className="text-sm font-medium leading-snug
									text-gray-600 my-3"
                      >
                        {/* //Middle section   */}
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Explicabo assumenda porro sapiente, cum nobis
                        tempore delectus consectetur ullam reprehenderit quis
                        ducimus, iusto dolor nam corporis id perspiciatis
                        consequuntur saepe excepturi.
                      </p>

                      <div className="flex justify-between">
                        {/* //Bottom section   */}

                        <div className="flex">
                          <img
                            className="h-6 w-6 rounded-full mr-3"
                            src="https://i.pinimg.com/originals/b7/06/0b/b7060b60f6ee1beeedf7d648dabd89a1.jpg"
                            alt="Issue"
                          />
                          <span>
                            <span
                              className="text-blue-500
												font-semibold"
                            >
                              Regina C.
                            </span>
                            via HeyTutor
                          </span>
                        </div>

                        <p
                          className="text-sm font-medium leading-snug
										text-gray-600"
                        >
                          14 hours ago
                        </p>
                      </div>
                    </Link>
                  </li>
                </ul>

                <Link
                  to="#"
                  className="flex justify-center capitalize text-blue-500"
                >
                  <span>see all</span>
                </Link>
              </div>
            </div>

            <div
              className="mr-6 w-1/2 mt-8 py-2 flex-shrink-0 flex flex-col
				bg-purple-300 rounded-lg text-white"
            >
              <h3
                className="flex items-center pt-1 pb-1 px-8 text-lg font-bold
					capitalize"
              >
                {/* //Header   */}
                <span>scheduled lessons</span>
                <button className="ml-2">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 256 512">
                    <path
                      d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
								0l-22.6-22.6c-9.4-9.4-9.4-24.6
								0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6
								0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136
								136c9.5 9.4 9.5 24.6.1 34z"
                    ></path>
                  </svg>
                </button>
              </h3>

              <div className="flex flex-col items-center mt-12">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/empty-state-2130362-1800926.png"
                  alt=" empty schedule"
                />

                <span className="font-bold mt-8">Your schedule is empty</span>

                <span className="text-purple-500">
                  Make your first appointment
                </span>

                <button className="mt-8 bg-purple-800 rounded-lg py-2 px-4">
                  Find a Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
