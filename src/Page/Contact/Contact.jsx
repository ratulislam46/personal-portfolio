import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";


const Contact = () => {
    return (
        <div className="bg-base-100 text-base-content py-12">
            <div className="text-center">
                <h4 className=" font-semibold uppercase tracking-widest">
                    Contact
                </h4>
                <h2 className="text-2xl md:text-3xl font-bold mt-2">
                    Reach Out to Me
                </h2>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-10">
                {/* home */}
                <div className="flex flex-col items-center">
                    <div className="bg-base-100 rounded-lg p-8 border border-gray-200">
                        <FaPhone size={28} className="text-green-500" />
                    </div>
                    <p className="mt-3">Phone</p>
                    <div className="flex items-center gap-2 mt-1">
                        <a>
                            +8801643110638
                        </a>
                    </div>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center">
                    <div className="bg-base-100 rounded-lg p-8 border border-gray-200">
                        <MdEmail size={28} className="text-green-500" />
                    </div>
                    <p className="mt-3">Email</p>
                    <a className="mt-1">
                        arfanratul46@gmail.com
                    </a>
                </div>

                {/* Whatsapp */}
                <div className="flex flex-col items-center">
                    <div className="bg-base-100 rounded-lg p-8 border border-gray-200">
                        <FaWhatsapp size={28} className="text-green-500" />
                    </div>
                    <p className="mt-3">Whatsapp</p>
                    <a className="mt-1">
                        +8801643110638
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
