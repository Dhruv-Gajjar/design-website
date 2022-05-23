import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-[80vh] relative text-[#e8f1f1]">
      <div className="absolute bg-gradient-to-t from-black/80 left-0 top-0 w-full h-full z-30"></div>
      <div className="w-full h-full absolute left-0 top-0 flex flex-col items-center justify-center space-y-5 capitalize p-6 z-30">
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold">
          Your imagination our creation
        </h1>
        <p className="text-xl md:text-2xl xl:text-3xl">
          Everyone can achive creativity
        </p>
      </div>

      <Image
        src="/../public/assets/hero.jpg"
        alt="hero image"
        layout="fill"
        className="object-cover"
      />
    </div>
  );
}
