import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import TypeWriter from "../../Components/Typewriter/TypeWriter";


const Contact = () => {
    return (
        <div className="bg-base-100 text-base-content py-12">
            <div className="text-center">
                <h4 className=" font-semibold uppercase tracking-widest">
                    Contact
                </h4>
                <h2 className='text-center text-2xl md:text-4xl lg:text-5xl text-base-content font-bold mt-2 mb-6  '>
                    R
                    <TypeWriter text={'each Out to Me'}></TypeWriter>
                </h2>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-10">
                {/* Phone */}
                <div data-aos="zoom-in-up"
                    className="flex flex-col items-center">
                    <div className="bg-base-100 rounded-lg p-8 shadow-2xl">
                        <FaPhone size={28} className="text-primary" />
                    </div>
                    <p className="mt-3 font-bold">Phone</p>
                    <div className="flex items-center gap-2 mt-1">
                        <a href="tel:+8801643110638" className="text-blue-500 hover:underline">
                            +8801643110638
                        </a>
                    </div>
                </div>

                {/* Email */}
                <div data-aos="zoom-in-up"
                    className="flex flex-col items-center">
                    <div className="bg-base-100 rounded-lg p-8 shadow-2xl">
                        <MdEmail size={28} className="text-primary" />
                    </div>
                    <p className="mt-3 font-bold">Email</p>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=arfanratul46@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 text-blue-500 hover:underline">
                        arfanratul46@gmail.com
                    </a>
                </div>

                {/* Whatsapp */}
                <div data-aos="zoom-in-up"
                    className="flex flex-col items-center">
                    <div className="bg-base-100 rounded-lg p-8 shadow-2xl">
                        <FaWhatsapp size={28} className="text-primary" />
                    </div>
                    <p className="mt-3 font-bold">Whatsapp</p>
                    <a href="https://wa.me/8801643110638"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 text-blue-500 hover:underline">
                        +8801643110638
                    </a>
                </div>
            </div>
        </div >
    );
};

export default Contact;
