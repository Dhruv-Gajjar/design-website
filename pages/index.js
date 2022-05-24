import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full h-[80vh] relative text-[#e8f1f1]">
        <div className="absolute bg-gradient-to-t from-black/80 left-0 top-0 w-full h-full z-30"></div>
        <div className="w-full h-full absolute left-0 top-0 flex flex-col items-center justify-center space-y-5 capitalize px-8 xl:p-16 z-30">
          <h1 className="text-4xl md:text-6xl xl:text-7xl text-center font-bold">
            Your imagination our creation
          </h1>
          <p className="text-xl md:text-2xl xl:text-3xl">
            Everyone can achive creativity
          </p>
        </div>

        <Image
          isLazy
          src="/../public/assets/hero.jpg"
          alt="hero image"
          layout="fill"
          className="object-cover"
        />
      </div>

      <div className="w-full h-full grid grid-cols-3 gap-4 items-center justify-center bg-[#1e4344] text-[#e8f1f1] p-[3rem]">
        <div className="text-center space-y-3">
          <h4 className="capitalize">client satisfaction</h4>
          <p className="font-bold text-xl">100%</p>
        </div>

        <div className="text-center space-y-3">
          <h4 className="capitalize">employees on worldwide</h4>
          <p className="font-bold text-xl">450</p>
        </div>

        <div className="text-center space-y-3">
          <h4 className="capitalize">projects completed</h4>
          <p className="font-bold text-xl">2000</p>
        </div>
      </div>

      <div className="bg-white py-5 grid grid-cols-2 gap-8 w-full h-full items-start justify-between px-8 py-6">
        <Image
          src="/../public/assets/img1.jpg"
          width="1000"
          height="500"
          className="object-cover h-full"
        />
        <div className="space-y-12 p-5 w-full h-full flex items-start flex-col justify-start">
          <h1 className="capitalize text-4xl text-center font-bold">
            how we serve
          </h1>
          <p className="capitalize text-2xl text-gray-800">
            true value of the brand is & always will be human capital
          </p>

          <p className="text-lg text-gray-500">
            Therefore we assemble our team with top talents,who are passionate
            about what we do, with a clear vision and a spectacular attitude to
            the creation process.
          </p>

          <button className="bg-[#d16d2f] hover:bg-[#c2662cf8] text-[#e8f1f1] py-3 px-7 rounded">
            Explore
          </button>
        </div>
      </div>
    </>
  );
}
