import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Email = () => {

    const formVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const inputVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4 }
        }
    };

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_1zko07i',
                'template_2vjjf1e',
                form.current, {
                publicKey: 'psaYyAoVgq5i8i5oV',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success("Email Successfully Send!")
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error("Failed to send email. Please try again.")
                },
            );
        e.target.reset()
    }

    return (
        <motion.div
            className="relative overflow-hidden rounded-xl p-4 sm:p-5 md:p-6 lg:p-7
                bg-base-100 shadow-lg border border-base-content/10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-primary/5 rounded-full blur-3xl"></div>

            <motion.form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-4 sm:space-y-5 md:space-y-6 relative z-10"
                variants={formVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div variants={inputVariants}>
                    <label className="block text-xs sm:text-sm md:text-sm font-semibold text-base-content/70 mb-1.5 md:mb-2">
                        Full Name
                    </label>
                    <input
                        name="user_name"
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-2.5 sm:p-3 md:p-3.5 rounded-lg border-2 border-base-content/20 
                            bg-base-100 text-base-content text-sm sm:text-base
                            focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20
                            transition-all duration-300
                            hover:border-base-content/30"
                        required
                    />
                </motion.div>

                <motion.div variants={inputVariants}>
                    <label className="block text-xs sm:text-sm md:text-sm font-semibold text-base-content/70 mb-1.5 md:mb-2">
                        Email Address
                    </label>
                    <input
                        name="user_email"
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-2.5 sm:p-3 md:p-3.5 rounded-lg border-2 border-base-content/20 
                            bg-base-100 text-base-content text-sm sm:text-base
                            focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20
                            transition-all duration-300
                            hover:border-base-content/30"
                        required
                    />
                </motion.div>

                <motion.div variants={inputVariants}>
                    <label className="block text-xs sm:text-sm md:text-sm font-semibold text-base-content/70 mb-1.5 md:mb-2">
                        Message
                    </label>
                    <textarea
                        name="message"
                        rows="4"
                        placeholder="Write your message here..."
                        className="w-full p-2.5 sm:p-3 md:p-3.5 rounded-lg border-2 border-base-content/20 
                            bg-base-100 text-base-content text-sm sm:text-base
                            focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20
                            transition-all duration-300
                            hover:border-base-content/30
                            resize-none"
                        required
                    ></textarea>
                </motion.div>

                <motion.button
                    type="submit"
                    variants={inputVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 sm:py-3.5 md:py-4 text-sm md:text-base font-bold tracking-wide uppercase rounded-lg 
                        bg-primary text-base-100 
                        hover:shadow-lg hover:shadow-primary/30
                        transition-all duration-300
                        relative overflow-hidden group"
                >
                    <span className="relative z-10">Send Message</span>
                    {/* Button shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                            translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    </div>
                </motion.button>
            </motion.form>
        </motion.div>
    );
};

export default Email;