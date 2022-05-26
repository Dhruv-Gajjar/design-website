import Head from "next/head";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <link rel="icon" href="/favicon.ico.png" />
      </Head>

      <div className="w-full h-full pt-20 text-center">
        <div className="flex flex-col my-auto items-center justify-center p-20 space-y-5">
          <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold capitalize space-y-2">
            sign up for our newsletter to get latest news about us
          </h1>

          <p className="text-xl md:text-2xl xl:text-3xl text-gray-500">
            Therefore we assemble our team with top talents.
          </p>

          <div className="w-full h-full">
            <form className="inline-block space-y-5 md:space-y-0 md:flex items-center justify-center space-x-4">
              <input
                type="text"
                placeholder="Enter your email..."
                className="w-full md:w-[60%] h-10 ring-1 ring-gray-500 rounded-md"
              />
              <button
                type="submit"
                className="bg-[#d16d2f]  text-zinc-100 py-2 px-4 rounded
              transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#ec7835] duration-300
            "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[#f6f6f6] p-8 grid-cols-1 md:grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center justify-center space-y-5 w-full h-full p-8">
          <div className="">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="text-xl text-gray-500">
              Our team is happy to assist you
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-startspace-x-3">
              <AiOutlinePhone size={25} />
              <p>+[123] 456 7890</p>
            </div>

            <div className="flex items-start space-x-3">
              <AiOutlineMail size={25} />
              <p>design123@email.com</p>
            </div>

            <div className="flex items-start space-x-3">
              <MdOutlineLocationOn size={25} />
              <p>Our location</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <form className="flex flex-col items-center justify-center w-full h-full space-y-5">
            <input
              type="text"
              placeholder="example@email.com"
              className="w-full h-7 ring-1 ring-gray-500 rounded-md "
            />

            <textarea
              type="text"
              placeholder="some message..."
              className="w-full h-20 ring-1 ring-gray-500 rounded-md"
            />

            <button
              type="submit"
              className="bg-[#d16d2f]  text-zinc-100 py-2 px-4 rounded
              transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#ec7835] duration-300
            "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default contact;
