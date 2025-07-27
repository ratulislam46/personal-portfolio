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
            <main>
                <Outlet></Outlet>
            </main>
            <footer className='w-11/12 mx-auto'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Layout;