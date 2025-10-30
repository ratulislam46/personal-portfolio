import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaPaintBrush, FaServer, FaLaptopCode } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';

const Services = () => {

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const services = [
        {
            id: 1,
            icon: FaCode,
            title: "Web Development",
            description: "Building modern and scalable web applications",
            features: [
                "Full-stack web application development",
                "Clean and maintainable code structure",
                "Performance optimization and best practices"
            ]
        },
        {
            id: 2,
            icon: FaMobileAlt,
            title: "Responsive Design",
            description: "Creating seamless experiences across all devices",
            features: [
                "Mobile-first responsive layouts",
                "Cross-browser compatibility",
                "Adaptive UI for all screen sizes"
            ]
        },
        {
            id: 3,
            icon: FaLaptopCode,
            title: "Frontend Development",
            description: "Crafting interactive and dynamic user interfaces",
            features: [
                "Modern React.js applications",
                "State management and routing",
                "Component-based architecture"
            ]
        },
        {
            id: 4,
            icon: FaServer,
            title: "Backend Development",
            description: "Building robust server-side solutions",
            features: [
                "RESTful API development",
                "Database design and integration",
                "Server-side logic and authentication"
            ]
        },
        {
            id: 5,
            icon: MdDesignServices,
            title: "UI/UX Implementation",
            description: "Transforming designs into pixel-perfect code",
            features: [
                "Design to code conversion",
                "Smooth animations and transitions",
                "Accessibility and usability focus"
            ]
        }
    ];

    return (
        <div className='mx-2 md:mx-0'>
            {/* Header Section */}
            <motion.div 
                className='text-center relative mb-12g'
                variants={headerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <h1 className='text-primary text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-8 tracking-tight'>
                    My Services
                </h1>
                <div className="inline-block mb-12">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-base-content leading-relaxed">
                        What I Can Do For You
                    </p>
                    <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-4 rounded-full"></div>
                </div>
            </motion.div>

            {/* Services Grid */}
            <motion.div 
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {services.map((service) => {
                    const Icon = service.icon;
                    return (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.02, 
                                y: -8,
                                transition: { duration: 0.3 } 
                            }}
                            className='group relative overflow-hidden rounded-2xl md:rounded-3xl 
                            bg-base-100
                            shadow-xl hover:shadow-2xl hover:shadow-primary/20
                            border border-base-content/10 hover:border-primary/40
                            transition-all duration-500 ease-out'
                        >
                            {/* Decorative Background Elements */}
                            <div className='absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-primary/10 rounded-full blur-3xl 
                                group-hover:bg-primary/20 transition-all duration-500 -translate-y-1/2 translate-x-1/2'></div>
                            <div className='absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-secondary/10 rounded-full blur-2xl 
                                group-hover:bg-secondary/20 transition-all duration-500 translate-y-1/2 -translate-x-1/2'></div>
                            
                            {/* Card Content */}
                            <div className='relative z-10 p-6 md:p-8'>
                                {/* Icon Badge */}
                                <div className='inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 
                                    bg-primary rounded-2xl
                                    shadow-lg shadow-primary/30 mb-6
                                    group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500'>
                                    <Icon className='text-3xl md:text-4xl text-base-100' />
                                </div>

                                {/* Title */}
                                <h2 className='text-xl md:text-2xl font-bold text-primary mb-3'>
                                    {service.title}
                                </h2>
                                
                                {/* Short Description */}
                                <p className='text-sm md:text-base text-base-content/70 mb-4'>
                                    {service.description}
                                </p>
                                
                                {/* Divider */}
                                <div className='w-16 h-1 bg-primary rounded-full mb-4 
                                    group-hover:w-full transition-all duration-500'></div>
                                
                                {/* Features List */}
                                <ul className='space-y-2 md:space-y-3'>
                                    {service.features.map((feature, index) => (
                                        <li key={index} className='flex items-start gap-2 text-sm md:text-base text-base-content'>
                                            <svg className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Hover Shine Effect */}
                            <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-base-content/5 to-transparent 
                                    translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000'></div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default Services;