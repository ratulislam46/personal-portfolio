import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../../public/portfolio-logo.png'
import '../Header/navbar.css'
import { IoCallSharp, IoMoon, IoPersonSharp } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { FaCode, FaHome } from 'react-icons/fa';
import { GoProjectSymlink } from 'react-icons/go';
import { PiStudentFill } from 'react-icons/pi';


const Navbar = () => {

    const links =
        <>
            <li>
                <Link to='home' smooth={true} duration={500} offset={-200} spy={true}
                    activeClass="active-link">
                    <FaHome />
                    Home
                </Link>
            </li>
            <li>
                <Link to='about' smooth={true} duration={500} offset={-200} spy={true}
                    activeClass="active-link">
                    <IoPersonSharp />
                    About
                </Link>
            </li>
            <li>
                <Link to='skills' smooth={true} duration={500} offset={-200} spy={true}
                    activeClass="active-link">
                    <FaCode />
                    Skills
                </Link>
            </li>
            <li>
                <Link to='education' smooth={true} duration={500} offset={-200} spy={true}
                    activeClass="active-link">
                    <PiStudentFill />
                    Education
                </Link>
            </li>
            <li>
                <Link to='projects' smooth={true} duration={500} offset={-200} spy={true}
                    activeClass="active-link">
                    <GoProjectSymlink />
                    Projects
                </Link>
            </li>
            <li>
                <Link to='contact' smooth={true} duration={500} offset={-70} spy={true}
                    activeClass="active-link">
                    <IoCallSharp />
                    Contact
                </Link>
            </li>
        </>

    // theme changes state 
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        
        // Add or remove 'dark' class for Tailwind dark mode
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return (
        <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-3xl shadow-md rounded-full border-b-2 border-primary">
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


                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal bg-primary/10 border border-primary/20 rounded-full">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* Right side toggle button */}
                    <div className="flex-none rounded-full">
                        <button
                            className="text-xl px-2 py-1 mr-3 rounded-full"
                            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        >
                            {theme === "light" ? <IoMoon size={28} /> : <MdLightMode size={28} />}
                        </button>
                    </div>
                    {/* <a
                        href="/resume.pdf"
                        className="bg-primary text-base-content font-semibold py-2 px-6 rounded-full transition cursor-pointer hidden md:block"
                        download="Ratul_Resume.pdf"
                    >
                        Resume
                    </a> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;