import { useState } from "react";
import NextLink from "next/link";
import logo from "../../public/assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <div className="bg-gray-100 text-black shadow-lg text-gray-700">
      {/* Desktop nav */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <NextLink href="/">
            <a>
              <h2 className="text-2xl font-bold">Design.</h2>
            </a>
          </NextLink>

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
          <div className="block md:hidden">
            <button onClick={() => setToggleNav(!toggleNav)}>
              {!toggleNav ? (
                <AiOutlineClose size={20} />
              ) : (
                <AiOutlineMenu size={20} />
              )}
            </button>
          </div>

          <div
            className={
              !toggleNav
                ? "fixed md:hidden items-center justify-between left-0 top-0 bg-gray-100 shadow-xl w-[60%] h-full transition-all ease-in-out duration-500"
                : "fixed hidden"
            }
          >
            <div className="text-center m-8 pt-10 space-y-8 text-gray-700">
              <NextLink href="/">
                <a>
                  <h2 className="text-2xl font-bold">Design.</h2>
                </a>
              </NextLink>

              <div className="flex flex-col text-center md:hidden space-y-5">
                <NextLink href="/services">
                  <a className="border-b border-gray-300">Services</a>
                </NextLink>
                <NextLink href="/about">
                  <a className="border-b border-gray-300">About</a>
                </NextLink>
                <NextLink href="/contact">
                  <a>Contact</a>
                </NextLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
