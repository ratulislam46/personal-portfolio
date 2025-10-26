import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    const socialLinks = [
        { icon: <FaGithub />, href: "https://github.com" },
        { icon: <CiLinkedin />, href: "https://linkedin.com" },
        { icon: <FaInstagram />, href: "https://instagram.com" },
        { icon: <CiFacebook />, href: "https://facebook.com" }
    ];

    return (
        <motion.div 
            className="relative py-8 md:py-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            {/* Decorative Blur Elements */}
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 md:px-6">
                {/* Top Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8"></div>

                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
                    
                    {/* Name & Title */}
                    <div className="space-y-2">
                        <h3 className="text-lg md:text-xl font-bold text-primary">Md Ratul Howlader</h3>
                        <p className="text-sm text-base-content/60">Full Stack Developer</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-3">
                        {socialLinks.map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-12 h-12 bg-base-100 border border-base-content/10 
                                    hover:border-primary/40 rounded-xl shadow-md hover:shadow-primary/20
                                    flex items-center justify-center transition-all duration-300"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="text-2xl text-base-content group-hover:text-primary transition-colors z-10">
                                    {social.icon}
                                </span>
                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Contact */}
                    <div className="space-y-2 md:text-right">
                        <p className="text-xs text-base-content/50">Let's build something amazing</p>
                        <a href="mailto:ratul@example.com" className="inline-flex items-center gap-2 text-sm text-primary hover:opacity-80">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Get in touch
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-6 border-t border-base-content/5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
                        <p className="text-xs text-base-content/50">
                            © 2025 Md Ratul Howlader. All rights reserved.
                        </p>
                        <div className="flex gap-4 text-xs">
                            <a href="#" className="text-base-content/50 hover:text-primary transition-colors">Privacy</a>
                            <a href="#" className="text-base-content/50 hover:text-primary transition-colors">Terms</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Accent Line */}
                <motion.div 
                    className="mt-6 w-full max-w-md mx-auto h-1 bg-primary rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                ></motion.div>
            </div>
        </motion.div>
    );
};

export default Footer;