"use client";
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { imgs } from "@/utils";

const DraggableCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const len = imgs.length;

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + len) % len);
  };

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % len);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  return (
    <div className="relative w-full mx-auto mt-4">
      <div className="relative w-full h-full xs:h-[250px] sm:h-[300px] md:h-[560px] mx-autp group hover:-translate-y-2">
        <Image
          src={imgs[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          width={1312}
          height={560}
          className="rounded-xl w-full h-full transition-all duration-200 ease-in-out cursor-pointer "
        />
      </div>
      <button
        className="absolute left-1 md:left-2 top-1/2 transform -translate-y-1/2 p-2 md:p-4 rounded-full bg-gray-400 text-black group focus:outline-none"
        onClick={prevSlide}
      >
        <FaChevronLeft className="text-black md:text-xl" />
      </button>
      <button
        className="absolute right-1 md:right-2 top-1/2 transform -translate-y-1/2 p-2 md:p-4 rounded-full bg-gray-400 text-black group focus:outline-none"
        onClick={nextSlide}
      >
        <FaChevronRight className="text-black md:text-xl" />
      </button>
      <div className="flex justify-center mt-4">
        {imgs.map((_, index) => (
          <div
            key={index}
            className={` h-2 w-2 sm:h-3 sm:w-3 mx-1 rounded-full ${
              index === currentIndex ? "bg-gray-600 " : "bg-black"
            } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default DraggableCarousel;
