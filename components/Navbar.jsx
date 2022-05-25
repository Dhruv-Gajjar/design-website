import { useState } from "react";
import NextLink from "next/link";
import logo from "../public/assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <div className="bg-[#1e4344] text-[#e8f1f1] shadow-xl fixed z-[100] w-full">
      {/* Desktop nav */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <NextLink href="/">
            <a className="flex items-center space-x-2">
              <FaHome size={20} />
              <h2 className="text-2xl font-bold">Design</h2>
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
            <button
              className="bg-[#d16d2f]  text-zinc-100 py-2 px-4 rounded
              transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#ec7835] duration-300
            "
            >
              Signup
            </button>
          </div>

          {/* Mobile nav */}
          <div className="block md:hidden">
            <button onClick={() => setToggleNav(!toggleNav)}>
              {!toggleNav ? (
                <AiOutlineClose size={20} className="text-[#e8f1f1]" />
              ) : (
                <AiOutlineMenu size={20} />
              )}
            </button>
          </div>

          <div
            className={
              !toggleNav
                ? "fixed z-[100] md:hidden items-center justify-between left-0 top-0 bg-[#1e4344] shadow-xl w-[60%] h-full  ease-in-out duration-500"
                : "fixed left-[-100%]"
            }
          >
            <div className="text-center m-8 pt-10 space-y-8 text-[#e8f1f1]">
              <NextLink href="/">
                <a className="flex items-center justify-center space-x-2">
                  <FaHome size={20} />
                  <h2 className="text-2xl font-bold">Design.</h2>
                </a>
              </NextLink>

              <div className="flex flex-col text-center md:hidden p-6 space-y-8">
                <NextLink href="/services">
                  <a className="border-b border-gray-100">
                    <p className="mb-4">Services</p>
                  </a>
                </NextLink>
                <NextLink href="/about">
                  <a className="border-b border-gray-100">
                    <p className="mb-4">About</p>
                  </a>
                </NextLink>
                <NextLink href="/contact">
                  <a>Contact</a>
                </NextLink>
              </div>

              <div className="space-x-6 pt-6">
                <button className="">Login</button>
                <button className="bg-[#d16d2f] hover:bg-[#c2662cf8] text-zinc-200 hover:text-zinc-50 py-2 px-4 rounded">
                  Signin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
