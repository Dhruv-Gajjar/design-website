import { MdOutlineLocationOn } from "react-icons/md";
import {
    AiOutlinePhone,
    AiFillTwitterCircle,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillFacebook,
} from "react-icons/ai";
import { CgShoppingBag } from "react-icons/cg";

const Footer = () => {
    return (
        <>
            <div className="bg-[#1e4344] text-[#e8f1f1] w-full p-12 md:flex items-center justify-between space-y-5">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <i>
                        <MdOutlineLocationOn size={20} />
                    </i>

                    <p className="text-lg font-semibold">Our Location</p>
                </div>

                <div className="flex flex-col items-center justify-center space-y-4">
                    <i>
                        <CgShoppingBag size={20} />
                    </i>

                    <p className="text-lg font-semibold">
                        About key requirements
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center space-y-4">
                    <i>
                        <AiOutlinePhone size={20} />
                    </i>

                    <p className="text-lg font-semibold">+11 10101010</p>
                </div>
            </div>
            <div className="bg-[#1e4344] text-[#e8f1f1] flex flex-col items-center justify-center space-x-6 pb-6">
                <p className=" text-lg pb-2">
                    Therefore we assemble our team with top talents.
                </p>

                <div className="flex items-center space-x-6">
                    <AiFillFacebook size={20} />
                    <AiFillTwitterCircle size={20} />
                    <AiFillInstagram size={20} />
                    <AiFillLinkedin size={20} />
                </div>
            </div>
        </>
    );
};

export default Footer;
