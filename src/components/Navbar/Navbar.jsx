import { NavLink } from "react-router-dom";
import Logo  from "../../../public/image/Logo.png";


const Navbar = () => {
    return (
        <div className="max-w-[1400px] mx-auto py-4 lg:flex justify-between lg:items-center ">
            <div className="flex justify-center items-center">
            <img className="w-[200px]" src={Logo} alt="" />
            </div>
    
            <nav >
                <ul className="flex justify-center items-center gap-10 text-[18px] mt-5 lg:mt-0">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;