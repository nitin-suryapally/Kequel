import { KickerStarter } from "@/utils";
import Image from "next/image";

const Cta = () => {
  return (
    <section className="mx-auto flex flex-col items-center py-4 gap-4 lg:gap-8 max-w-7xl">
      <h1 className="font-secondary font-normal md:text-3xl lg:text-5xl flex items-center gap-2 lg:gap-4">
        Available on
        <span>
          <Image
            src={KickerStarter}
            alt="logo"
            width={330}
            height={10}
            priority
            className="w-40 md:w-80 lg:-mb-3"
          />
        </span>
      </h1>

      <button className="px-6 py-2 bg-black text-white rounded-3xl font-medium font-primary text-sm sm:text-lg  ">
        Know More
      </button>
    </section>
  );
};

export default Cta;
