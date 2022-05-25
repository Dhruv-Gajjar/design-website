import Image from "next/image";
import Head from "next/head";
import img4 from "../public/assets/img4.jpg";

const about = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-20 w-full h-auto">
        <div className="grid-cols-1 md:grid grid-cols-2 gap-4 items-start justify-start">
          <div className="p-8 space-y-5">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold">
              About Us
            </h1>
            <p className="text-gray-500 text-xl md:text-2xl xl:text-3xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <p className="text-gray-500 text-xl md:text-2xl xl:text-3xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>

            <button
              className="bg-[#d16d2f]  text-zinc-100 py-2 px-4 rounded
              transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#ec7835] duration-300
            "
            >
              Explore
            </button>
          </div>

          <div className="relative w-full h-fit p-8">
            <Image
              isLazy
              src={img4}
              alt="home image"
              layout="responsive"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
