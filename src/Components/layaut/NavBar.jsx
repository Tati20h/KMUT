import { NavLink } from 'react-router-dom';
import logo from '../../Assets/logo.png';



export function NavBar() {
    return (

        <nav className=" nav border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700" >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-2 rtl:space-x-reverse">
                    <img src={logo} className="App-logo" alt="logo" />
                </a>
                <button
                    data-collapse-toggle="navbar-solid-bg"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden 
               hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-gray-200 
               dark:text-gray-400 dark:hover:bg-green-700 dark:focus:ring-green-600 
               active:bg-[rgba(108,124,92,1)] focus:bg-[rgba(108,124,92,1)]"
                    aria-controls="navbar-solid-bg"
                    aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 md:p-0"
                                style={{
                                    color: 'rgba(108, 124, 92, 1)',
                                    fontWeight: 'bold',
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'rgba(163, 122, 82, 1)'}
                                onMouseLeave={(e) => e.target.style.color = 'rgba(108, 124, 92, 1)'}
                            >
                                <NavLink to="/home" activeClassName="active" > HOME </NavLink>
                               
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 md:p-0"
                                style={{
                                    color: 'rgba(163, 122, 82, 1)',
                                    fontWeight: 'bold',
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'rgba(108, 124, 92, 1)'}
                                onMouseLeave={(e) => e.target.style.color = 'rgba(163, 122, 82, 1)'}
                            >

                              <NavLink to="/products" activeClassName="active">PRODUCTS</NavLink> 
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 md:p-0"
                                style={{
                                    color: 'rgba(163, 122, 82, 1)',
                                    fontWeight: 'bold',
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'rgba(108, 124, 92, 1)'}
                                onMouseLeave={(e) => e.target.style.color = 'rgba(163, 122, 82, 1)'}
                            >
                                <NavLink to="/pay" activeClassName="active">CATEGORY</NavLink>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 md:p-0"
                                style={{
                                    color: 'rgba(163, 122, 82, 1)',
                                    fontWeight: 'bold',
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'rgba(108, 124, 92, 1)'}
                                onMouseLeave={(e) => e.target.style.color = 'rgba(163, 122, 82, 1)'}
                            >
                                   <NavLink to="/blog" activeClassName="active">BLOG</NavLink>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>



    )
}