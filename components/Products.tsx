"use client";
import { product, ProductImage } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";

const Products = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExploreClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="flex flex-col w-full gap-4 md:gap-8 lg:gap-16 pb-8 md:pb-16 lg:pb-32">
      <div className="p-4 xl:px-0 border-b-4 border-slate-300">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-primary text-black font-medium">
            Products
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={ProductImage}
            alt="Compact Kequel Bedside Table"
            priority
            width={580}
            height={580}
            className="w-full max-w-xs md:max-w-md object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 px-4 md:px-8 mt-6 md:mt-0 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-primary ">
            Compact Kequel Bedside Table
          </h2>
          <p className="text-base md:text-lg text-[#1D1D1F] mb-6 font-normal font-primary">
            The Kequel Compact Bedside Table is a sleek, multifunctional table
            with advanced smart features. It supports 4 modules at a time,
            includes ambient and motion detection lights, and offers a smart
            storage compartment. Available in three versions—Classic, Plus, and
            Dev Kit—this versatile table is designed to fit seamlessly into any
            modern bedroom, providing both style and functionality.
          </p>

          <div className="bg-white border border-gray-400 rounded-lg p-4 mb-4 shadow-sm">
            <h3 className="text-sm font-semibold text-gray-500 mb-2">
              Product Dimensions
            </h3>
            <p className="text-lg font-bold">470 x 450 x 470 ( WxDxH )</p>
          </div>

          <button
            onClick={handleExploreClick}
            className="mt-4 px-6 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
          >
            Explore {isExpanded ? " ▲" : " ▼"}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="max-w-7xl w-full content-center mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
          {product.map((variant, index) => (
            <div
              key={index}
              className="flex flex-col w-full space-y-4"
            >
              <div className="flex flex-col items-center gap-4 ">
                <h3 className="mt-4 text-lg md:text-xl lg:text-3xl font-medium font-secondary text-center">
                  {variant.name}
                </h3>
                <div className="w-[300px] h-[250px] flex justify-center items-center">
                  <Image
                    src={variant.image}
                    alt={variant.name}
                    width={200}
                    height={200}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="border-t-2 border-gray-400 mt-4 w-full" />
              </div>

              <ul className="mt-4 text-center flex flex-col md:text-left gap-4 ">
                {variant.features.map((feature, idx) => (
                  <li key={idx} className="text-[#86868B] text-sm font-semibold md:text-lg lg:text-xl">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;
