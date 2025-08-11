import React from 'react';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router';

const Navbar = () => {

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/about'>Skills</NavLink></li>
        <li><NavLink to='/about'>Experience</NavLink></li>
    </>

    const handleDwnldBtn = () => {
        toast.success('CV Cooming Soon')
    }

    return (
        <div className="navbar w-11/12 mx-auto">
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
                <a className="text-3xl text-primary font-bold"><span>RATUL</span> <span>ISLAM</span></a>
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
                    onClick={handleDwnldBtn}
                    // href="/ArFan_RaTul_CV.pdf"
                    download
                    className="bg-primary text-base-100 font-semibold py-2 px-6 rounded transition cursor-pointer"
                >
                    Download CV
                </a>
            </div>
        </div>
    );
};

export default Navbar;