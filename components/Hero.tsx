import { HeroImage, Kequel, KickerStarter } from "@/utils";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-between sm:flex-row sm:items-start sm:mt-8 md:mt-16 max-w-7xl ">
      <div className="w-full sm:max-w-2xl flex flex-col items-center sm:items-start space-y-4 md:space-y-6 lg:space-y-8">
        <h1 className="flex gap-2 md:gap-4 font-medium font-primary items-center text-xs md:text-base lg:text-2xl">
          <Image
            src={Kequel}
            alt="Kequel logo"
            width={113}
            height={50}
            priority
            className=" w-12  md:w-14 md:h-8 lg:w-[113px] lg:h-[50px]"
          />
          <div className="h-6  md:h-12 w-[2px] md:w-1 bg-black"></div>
          Modular Customizable Bedside Table
        </h1>

        <p className="text-center sm:text-left w-full font-medium font-primary text-xs sm:text-base md:text-xl lg:text-3xl">
          Redefining Smart Functionality and Customization for Modern Lifestyles
        </p>

        <div className="flex gap-2 md:gap-4">
          <button className="px-3 sm:px-4 md:px-6 py-1 sm:py-2 bg-black text-white rounded-full font-medium font-primary text-xs md:text-base lg:text-xl hover:bg-gray-800 transition">
            Know More
          </button>
          <button className="px-3 sm:px-4 md:px-6 py-1 sm:py-2 bg-black text-white rounded-full font-medium font-primary text-xs md:text-base lg:text-xl hover:bg-gray-800 transition">
            Watch Video
          </button>
        </div>

        <p className="flex flex-wrap items-center text-[8px] md:text-xs lg:text-base gap-1 font-inter">
          <span>We’re live on</span>
          <Image
            src={KickerStarter}
            alt="Kickstarter logo"
            width={101}
            height={11}
            priority
            className="h-2 w-14 sm:h-5 sm:w-20 md:h-6 md:w-24"
          />
          <span>Support us by visiting our product website.</span>
        </p>
      </div>

      <div className="">
        <Image
          src={HeroImage}
          alt="hero image"
          width={1050}
          height={620}
          priority
          className=""
        />
      </div>
    </section>
  );
};

export default Hero;
