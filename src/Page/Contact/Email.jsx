import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Email = () => {

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
                },
            );
            e.target.reset()
    }

    return (
        <div data-aos="fade-up" className='mx-2 md:mx-0'>
            <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-6">
                <div>
                    <label className="text-sm">Full name</label>
                    <input name="user_name" type="text" placeholder="Your Name" className="w-full p-3 rounded border border-base-content/20" />
                </div>
                <div>
                    <label className="text-sm">Email</label>
                    <input name="user_email" type="email" className="w-full p-3 rounded border border-base-content/20"
                        placeholder='Your Email' />
                </div>
                <div>
                    <label className="text-sm">Message</label>
                    <textarea name="message" rows="3" className="w-full p-3 rounded border border-base-content/20"
                        placeholder='Write your opinion . . .'></textarea>
                </div>
                <button type="submit" className="w-full py-3 text-sm font-bold tracking-wide uppercase rounded bg-primary text-base-content">Send Message</button>
            </form>
        </div>
    );
};

export default Email;