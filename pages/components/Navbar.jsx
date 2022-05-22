import {useState} from "react";
import NextLink from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false)

  return (
    <div className="bg-teal-700 text-zinc-100">
      {/* Desktop nav */}
      <div className=" mx-auto px-8">
        <div className="flex items-center justify-between py-4">
          <div>
            <NextLink href="/">
              <a>
                <h4 className="text-2xl font-bold">Design</h4>
              </a>
            </NextLink>
          </div>

          <div className="hidden md:flex space-x-3 ">
            <NextLink href="/services">
              <a>Services</a>
            </NextLink>
            <NextLink href="/about">
              <a>About</a>
            </NextLink>
            <NextLink href="/contact">
              <a>Contact</a>
            </NextLink>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <button className="">Login</button>
            <button className="bg-orange-700 hover:bg-orange-600 text-orange-900 hover:text-orange-800 py-2 px-4 rounded">
              Signin
            </button>
          </div>

          {/* Mobile nav */}
          <div className="inline-block md:hidden">
              <button onClick={() => setToggleNav(!toggleNav)}>
                <i>
                  <AiOutlineMenu size={20} />
                </i>
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
