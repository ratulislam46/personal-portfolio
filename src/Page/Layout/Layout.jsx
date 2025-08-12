import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer'
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='min-h-[calc(100vh-100px)]'>
                <Outlet></Outlet>
            </main>
            <footer className='border-t border-gray-200'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Layout;