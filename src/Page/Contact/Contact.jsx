import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import TypeWriter from "../../Components/Typewriter/TypeWriter";
import Email from "./Email";


const Contact = () => {
    return (
        <div className="bg-base-100 text-base-content">
            {/* titile  */}
            <div
                data-aos="zoom-in-up"
                className="text-center">
                <h2 className='text-center text-green-400 text-2xl lg:text-4xl font-bold mt-2  mb-12'>
                    Reach Out To Me
                    {/* <TypeWriter text={'each Out to Me'}></TypeWriter> */}
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4">

                {/* contact number,email, whatsapp */}
                <div
                    data-aos="zoom-in-up"
                    className="flex flex-row lg:flex-col justify-center gap-4 md:gap-6 lg:gap-8 text-xs md:text-2xl lg:text-3xl">

                    {/* Whatsapp */}
                    <div
                        className="flex flex-col lg:flex-row gap-4 items-center">
                        <FaWhatsapp size={28} className="text-primary" />
                        <a href="https://wa.me/8801643110638"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 hover:underline">
                            +8801643110638
                        </a>
                    </div>

                    {/* Email */}
                    <div
                        className="flex flex-col lg:flex-row gap-4 items-center">

                        <MdEmail size={28} className="text-primary" />
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=arfanratul46@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 hover:text-blue-500 hover:underline">
                            arfanratul46@gmail.com
                        </a>

                    </div>

                    {/* Location */}
                    <div
                        className="flex flex-col lg:flex-row gap-4 items-center">

                        <IoLocationOutline size={32} className="text-primary" />
                        <p>Barisal, Bangladesh</p>

                    </div>
                </div>

                {/* contact form  */}
                <div>
                    <Email />
                </div>
            </div>
        </div >
    );
};

export default Contact;
