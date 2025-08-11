import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
    return (
        <div>
            <section className="py-6 bg-base-100">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold">Get in touch</h1>
                        <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <IoLocationSharp size={24}/>
                                <span className='ml-7'>Barishal, Bangladesh</span>
                            </p>
                            <p className="flex items-center">
                                <FaWhatsapp  size={24}/>
                                <span className='ml-7'>01643110638</span>
                            </p>
                            <p className="flex items-center">
                                <MdOutlineMail  size={24}/>
                                <span className='ml-7'>arfanratul46@gmail.com</span>
                            </p>
                        </div>
                    </div>
                    <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                        <label className="block">
                            <label className="mb-1">Your name</label><br />
                            <input type="text" placeholder="What's your good name?" className="input w-full" />
                        </label>
                        <label className="block">
                            <label className="mb-1">Your email</label><br />
                            <input type="text" placeholder="What's your email address?" className="input w-full" />
                        </label>
                        <label>
                            <label className="mb-1">Your message</label><br />
                            <textarea className="textarea w-full" placeholder="Enter Your Message . . ."></textarea>
                        </label>
                        <button type="button" className="bg-primary text-base-content font-semibold py-2 px-6 rounded transition cursor-pointer">Send message</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;