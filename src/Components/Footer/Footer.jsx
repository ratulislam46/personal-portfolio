import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
    return (
        <div className="flex md:block justify-center">
            <div className='md:flex justify-between py-8'>
                <div><h2 className='text-xl'>Terms & Conditions</h2></div>
                <div className="flex justify-center gap-3 my-4 md:my-0">
                    <Link to='https://web.facebook.com/mdratul.islam.46/'>
                        <CiFacebook size={40} className="border p-2 rounded-md bg-gray-900" />
                    </Link>
                    <Link to='https://www.instagram.com/arfan_ratul_46/'>
                        <FaInstagram size={40} className="border p-2 rounded-md bg-gray-900"></FaInstagram>
                    </Link>
                    <Link to='https://www.linkedin.com/in/ratul-islam-699b38372/?trk=opento_sprofile_details'>
                        <CiLinkedin size={40} className="border p-2 rounded-md bg-gray-900"></CiLinkedin>
                    </Link>
                </div>
                <div>
                    <p className="text-center">© 2025 Ratul Islam.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;