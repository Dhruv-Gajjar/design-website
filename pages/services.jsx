import Image from "next/image";
import Head from "next/head";
const services = () => {
  return (
    <>
      <Head>
        <title>Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-20">
        <div className="bg-[#f6f6f6] grid grid-cols-1 md:grid-cols-2 gap-10 w-full h-full items-start justify-between px-8 py-6">
          <div className="w-full h-[400px] relative">
            <Image
              isLazy
              src="/assets/img2.jpg"
              alt="home image"
              layout="fill"
              className="object-cover"
            />
          </div>

          <div className="space-y-8 w-full h-full flex items-start flex-col">
            <h1 className="capitalize text-4xl xl:text-5xl text-center">
              there are four key principles of{" "}
              <span className="font-bold capitalize">
                {" "}
                good customer service{" "}
              </span>
            </h1>

            <ul className="text-lg xl:text-xl text-gray-500 space-y-6">
              <li className="pl-10">it&apos;s personalized</li>
              <li className="pl-10">Competend</li>
              <li className="pl-10">Convenient</li>
              <li className="pl-10">Proactive</li>
            </ul>

            <button
              className="bg-[#d16d2f]  text-zinc-100 py-3 px-8 rounded
              transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#ec7835] duration-300"
            >
              Explore
            </button>
          </div>
        </div>

        <div className="bg-[#ffffff] grid grid-cols-1 md:grid-cols-2 gap-10 w-full h-full items-start justify-between px-8 py-6">
          <div className="space-y-8 w-full h-full flex items-center justify-center flex-col">
            <h1 className="capitalize text-4xl xl:text-5xl text-center">
              These factors have the biggest influnce
            </h1>

            <p className="text-lg xl:text-xl text-gray-500">
              when a client is requesting something that&apos;s time sensitive.
            </p>

            <button
              className="bg-[#d16d2f]  text-zinc-100 py-3 px-8 rounded
              transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#ec7835] duration-300"
            >
              Explore
            </button>
          </div>

          <div className="w-full h-[400px] relative">
            <Image
              isLazy
              src="/assets/img3.jpg"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default services;
