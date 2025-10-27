import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Email from "./Email";


const Contact = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5 }
        }
    };

    const contactMethods = [
        {
            icon: FaWhatsapp,
            label: "WhatsApp",
            value: "+8801643110638",
            link: "https://wa.me/8801643110638",
            iconSize: 32
        },
        {
            icon: MdEmail,
            label: "Email",
            value: "arfanratul46@gmail.com",
            link: "https://mail.google.com/mail/?view=cm&fs=1&to=arfanratul46@gmail.com",
            iconSize: 32
        },
        {
            icon: IoLocationOutline,
            label: "Location",
            value: "Barisal, Bangladesh",
            link: null,
            iconSize: 36
        }
    ];

    return (
        <section>
            {/* Section Header */}
            <motion.div
                className="text-center mb-10 md:mb-12"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4">
                    Reach Out To Me
                </h2>
                <div className="w-16 md:w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
                {/* Contact Methods */}
                <motion.div
                    className="flex flex-col gap-5 md:gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {contactMethods.map((method, index) => {
                        const Icon = method.icon;
                        const content = (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    y: -8,
                                    transition: { duration: 0.3 }
                                }}
                                className="group relative overflow-hidden rounded-xl 
                                    p-5 md:p-6 flex items-center gap-4 md:gap-5
                                    bg-base-100 shadow-lg hover:shadow-xl hover:shadow-primary/20
                                    border border-base-content/10 hover:border-primary/40
                                    transition-all duration-300"
                            >
                                {/* Decorative Blur */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl 
                                    group-hover:bg-primary/20 transition-all duration-500 -translate-y-1/2 translate-x-1/2"></div>

                                {/* Icon Container */}
                                <div className="relative z-10 p-3 md:p-3.5 bg-primary/10 rounded-xl 
                                    group-hover:bg-primary/20 transition-all duration-300
                                    group-hover:scale-110 group-hover:rotate-6 flex-shrink-0">
                                    <Icon 
                                        size={method.iconSize} 
                                        className="text-primary group-hover:text-primary transition-colors duration-300" 
                                    />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 flex-1 min-w-0">
                                    <h3 className="text-xs md:text-sm font-semibold text-base-content/60 mb-1">
                                        {method.label}
                                    </h3>
                                    <p className="text-sm md:text-base lg:text-lg font-medium text-base-content 
                                        group-hover:text-primary transition-colors duration-300 break-words">
                                        {method.value}
                                    </p>
                                </div>

                                {/* Hover Shine Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-base-content/5 to-transparent 
                                        translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                </div>
                            </motion.div>
                        );

                        return method.link ? (
                            <a
                                key={index}
                                href={method.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                {content}
                            </a>
                        ) : (
                            content
                        );
                    })}
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Email />
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
