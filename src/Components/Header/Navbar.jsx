import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-scroll';
import logo from '../../../public/portfolio-logo.png'

const Navbar = () => {

    const links = <>
        <li>
            <Link to='home' smooth={true} duration={500} offset={-70} >
                Home
            </Link>
        </li>
        <li>
            <Link to='about' smooth={true} duration={500} offset={-70} >
                About
            </Link>
        </li>
        <li>
            <Link to='skills' smooth={true} duration={500} offset={-70} >
                Skills
            </Link>
        </li>
        <li>
            <Link to='projects' smooth={true} duration={500} offset={-70} >
                Projects
            </Link>
        </li>
        <li>
            <Link to='contact' smooth={true} duration={500} offset={-70} >
                Contact
            </Link>
        </li>
    </>

    // theme changes state 
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-base-100 shadow-md">
            <div className='navbar container mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="text-3xl text-primary font-bold">
                        <img src={logo} alt="logo" className='w-36' />
                    </a>

                    {/* Right side toggle button */}
                    <div className="flex-none ml-4">
                        <button
                            className="btn btn-ghost text-xl"
                            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        >
                            {theme === "light" ? "🌙 Dark" : "☀ Light"}
                        </button>
                    </div>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a
                        href="https://drive.google.com/uc?export=download&id=1vES2TrjA2_oWCRNEhJTAPA3YCb2dHkon"
                        className="bg-primary text-base-content font-semibold py-2 px-6 rounded transition cursor-pointer"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;