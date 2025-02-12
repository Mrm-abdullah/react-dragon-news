import { FaGoogle } from "react-icons/fa6";

const RightSideNav = () => {
    return (
        <div>
            <div>
                <h2>Login With</h2>
                <button className="btn">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default RightSideNav;