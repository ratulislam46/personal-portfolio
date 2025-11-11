import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

const Error = () => {
    return (
        <section className="flex items-center min-h-screen py-16">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center">
                <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <FaExclamationTriangle className="text-5xl text-primary" />
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-base-content">
                        Oops! Page Not Found
                    </h1>
                    <p className="text-xl text-base-content/80 max-w-2xl mx-auto">
                        Sorry, the page you're looking for doesn't exist or has been moved. Let's get you back on track.
                    </p>
                </div>

                <div>
                    <Link
                        to="/"
                        className="px-8 py-3 font-semibold rounded-full bg-primary text-base-100 hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                        <FaHome />
                        Back to Home
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Error;