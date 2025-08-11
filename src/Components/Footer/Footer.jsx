import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
    return (
        <div className="flex md:block justify-center">
            <div className='md:flex justify-between py-8 text-base-100'>
                <div><h2 className='text-xl'>Terms & Conditions</h2></div>
                <div className="flex justify-center gap-3 my-4 md:my-0">
                    <Link to='https://web.facebook.com/mdratul.islam.46/'
                        target="_blank" rel="noopener noreferrer"
                    >
                        <CiFacebook size={40} className="border p-2 rounded-md btn btn-outline btn-info btn-lg" />
                    </Link>
                    <Link to='https://www.instagram.com/arfan_ratul_46/'
                        target="_blank" rel="noopener noreferrer"
                    >
                        <FaInstagram size={40} className="border p-2 rounded-md btn btn-outline btn-info btn-lg"></FaInstagram>
                    </Link>
                    <Link to='https://www.linkedin.com/in/ratul-islam-699b38372/?trk=opento_sprofile_details'
                        target="_blank" rel="noopener noreferrer"
                    >
                        <CiLinkedin size={40} className="border p-2 rounded-md btn btn-outline btn-info btn-lg"></CiLinkedin>
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