


import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
            <div className="min-h-screen bg-no-repeat bg-cover bg-center"
                style={{backgroundImage: 'url("https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")'}}>
                <div className="flex justify-end">
                    <div className="bg-white min-h-screen w-1/2 flex justify-center items-center">
                        <div>

                            <form>
                                <div>
                                    <h1 className="text-2xl text-indigo-800 font-bold">Login to BluOcean</h1>
                                </div>                                
                                <div className="relative mb-2 mt-5">
                                    <input id="email" className="w-full rounded px-3 border border-gray-300 pt-3 pb-2 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 focus:outline-none input active:outline-none" type="text" placeholder="Enter Email" />
                                    <label for="email" className="label absolute mt-2 ml-3 leading-tighter text-gray-600 text-base cursor-text">Email</label>
                                </div>
                                <div className="relative mb-2 mt-5">
                                    <input id="password" className="w-full rounded px-3 border border-gray-300 pt-3 pb-2 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 focus:outline-none input active:outline-none" type="password" placeholder="Enter Password" autofocus />
                                    <label for="password" className="label absolute mt-2 ml-3 leading-tighter text-gray-600 text-base cursor-text">Password</label>
                                </div>
                                <div className="flex justify-end">
                                    <span className="text-sm text-blue-500 hover:underline cursor-pointer disabled">Forgot password?</span>
                                </div>
                                <div className="">
                                    <button className="mt-4 mb-3 w-full bg-indigo-500 hover:bg-indigo-800 text-white py-2 rounded-md transition duration-100">Login now</button>
                                </div>
                            </form>
                            <p className="mt-8"> Want to know more about BluOcean? 
              <Link
                to="/signup"
                className="cursor-pointer text-sm text-blue-600 ml-1"
              >
                Signup
              </Link></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default LoginPage;