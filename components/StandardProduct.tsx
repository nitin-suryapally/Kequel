import { standardProduct } from "@/utils";
import Image from "next/image";

const StandardProduct = () => {
  return (
    <section className="flex flex-col w-full gap-4 md:gap-8 lg:gap-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={standardProduct}
            alt="Compact Kequel Bedside Table"
            priority
            width={580}
            height={580}
            className="w-full max-w-xs md:max-w-md object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 px-4 md:px-8 mt-6 md:mt-0 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-primary">
            Standard Kequel Bedside Table
          </h2>
          <p className="text-base font-primary md:text-lg text-[#1D1D1F] mb-6">
            The Kequel Standard Bedside Table supports 6 modules, features
            ambient and motion detection lights, and includes a smart storage
            compartment, seamlessly blending technology with convenience for a
            restful, connected night's sleep.
          </p>

          <div className="bg-white border border-gray-400 rounded-lg p-4 mb-4 shadow-sm ">
            <h3 className="text-sm font-semibold text-gray-500 mb-2">
              Product Dimensions
            </h3>
            <p className="text-lg font-bold">470 x 600 x 470 ( WxDxH )</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandardProduct;
