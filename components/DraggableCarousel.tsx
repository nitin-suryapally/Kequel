"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CarouselImage1, CarouselImage2, CarouselImage3, CarouselImage4, CarouselImage5 } from "@/utils";

const imgs = [
  CarouselImage1,
  CarouselImage2,
  CarouselImage3,
  CarouselImage4,
  CarouselImage5
];

const DraggableCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imgs.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-7xl flex flex-col  ">
      <div className=" w-full h-[30vh] md:h-[70vh] lg:h-[80vh]">
        {imgs.map((img, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "block" : "hidden"
            } w-full h-full duration-700 ease-in-out`}
          >
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              width={1280}
              height={570}
              className=" w-full h-full "
              priority
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={handlePrev}
        className="absolute top-1/2 left-3 z-30 flex justify-center items-center p-2 cursor-pointer group focus:outline-none transform -translate-y-1/2"
      >
        <span className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white">
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </span>
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="absolute top-1/2 right-3 z-30 flex justify-center items-center p-2 cursor-pointer group focus:outline-none transform -translate-y-1/2"
      >
        <span className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white">
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </span>
      </button>

      <div className="flex justify-center space-x-3 mt-4 z-10">
        {imgs.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-400" : "bg-black"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DraggableCarousel;
