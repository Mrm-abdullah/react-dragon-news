import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

import swimming from '../../assets/swimming.png'
import qClass from '../../assets/class.png'
import playground from '../../assets/playground.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3">
                <h2 className="text-3xl">Login With</h2>
                <div>
                    <button className="btn btn-outline w-full">
                        <FaGoogle></FaGoogle> Google
                    </button>
                </div>
                <div>
                    <button className="btn btn-outline w-full">
                    <FaGithub /> Google
                    </button>
                </div>
            </div>
            <div className="p-4">
                <h2 className="text-3xl mb-3">Find Us On</h2>
                <div>
                    <Link className="p-3 flex gap-2 items-center text-lg w-full border rounded-t-lg">
                        <FaFacebook></FaFacebook> Facebook
                    </Link>
                </div>
                <div>
                    <Link className="p-3 flex gap-2 items-center text-lg w-full border-x">
                    <FaTwitter/> Twitter
                    </Link>
                </div>
                <div>
                    <Link className="p-3 flex gap-2 items-center text-lg w-full border rounded-b-lg">
                    <FaInstagram/> Instagram
                    </Link>
                </div>
            </div>
            <div className="p-4 space-y-3">
                <h2 className="text-3xl">Q-Zone</h2>
                <div>
                    <img src={swimming} alt="" />
                    <img src={qClass} alt="" />
                    <img src={playground} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;