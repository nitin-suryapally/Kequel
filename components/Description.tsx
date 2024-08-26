import { doubleQuote } from "@/utils";
import Image from "next/image";

const Description = () => {
  return (
    <section className="container flex flex-col gap-2 md:gap-4 max-w-7xl">
      <Image
        src={doubleQuote}
        alt="Double quote"
        width={27}
        height={20}
        priority
        className="w-4 h-3 md:h-7 md:w-5"
      />
      <div className="md:flex flex-col gap-3 hidden w-full  ">
        <p
          className="text-sm lg:text-[19px] font-primary font-normal text-center md:text-left"
          style={{ lineHeight: "40px" }}
        >
          Kequel furniture combines cutting-edge design with timeless elegance,
          offering smart features that enhance comfort and functionality. Each
          piece is meticulously crafted to elevate your living space, ensuring a
          blend of style and practicality that exceeds expectations.
        </p>
      </div>

      <div className="flex flex-col gap-1 md:hidden w-full">
        <p className="text-sm font-primary font-normal text-center">
          Kequel furniture combines cutting-edge design with timeless elegance,
          offering smart features that enhance comfort and functionality. Each
          piece is meticulously crafted to elevate your living space, ensuring a
          blend of style and practicality that exceeds expectations.
        </p>
      </div>
    </section>
  );
};

export default Description;
