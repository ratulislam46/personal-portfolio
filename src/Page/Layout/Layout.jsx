import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer'
import { Outlet } from 'react-router';
import { motion } from 'framer-motion';

const Layout = () => {
    return (
        <div className="relative min-h-screen">
            {/* Animated Background */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                {/* Animated Gradient Orb 1 - Top Left */}
                <motion.div
                    className="absolute top-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                
                {/* Animated Gradient Orb 2 - Bottom Right */}
                <motion.div
                    className="absolute bottom-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                
                {/* Animated Gradient Orb 3 - Center */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-accent/15 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>

            <header>
                <Navbar></Navbar>
            </header>
            <main className='min-h-[calc(100vh-100px)] relative z-10'>
                <Outlet></Outlet>
            </main>
            <footer className='border-t border border-base-content/10 relative z-10'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Layout;