import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import Email from "./Email";
import { useEffect, useRef } from "react";

const Contact = () => {
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add delay for staggered effect
                    setTimeout(() => {
                        entry.target.classList.add("animate-fade-in-up");
                    }, index * 150);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        // Observe all card elements
        cardRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            cardRefs.current.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []);

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
        <section className='mx-2 md:mx-0'>
            {/* Add CSS for animations */}
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.5s ease-out forwards;
                }
                .opacity-0 {
                    opacity: 0;
                }
            `}</style>

            {/* Section Header */}
            <div className="text-center mb-16 relative opacity-0 animate-fade-in-up">
                <h2 className="text-primary text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-8 tracking-tight">
                    Reach Out To Me
                </h2>
                <div className="inline-block">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-base-content leading-relaxed">
                        Let's Connect & Build Together
                    </p>
                    <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-4 rounded-full"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
                {/* Contact Methods */}
                <div className="flex flex-col gap-5 md:gap-6">
                    {contactMethods.map((method, index) => {
                        const Icon = method.icon;
                        const content = (
                            <div
                                ref={(el) => (cardRefs.current[index] = el)}
                                key={index}
                                className="group relative overflow-hidden rounded-xl 
                                    p-5 md:p-6 flex items-center gap-4 md:gap-5
                                    bg-base-100 shadow-lg hover:shadow-xl hover:shadow-primary/20
                                    border border-base-content/10 hover:border-primary/40
                                    transition-all duration-300 opacity-0"
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
                            </div>
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
                </div>

                {/* Contact Form */}
                <div className="opacity-0 animate-fade-in-up">
                    <Email />
                </div>
            </div>
        </section>
    );
};

export default Contact;