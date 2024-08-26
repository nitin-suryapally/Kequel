import {
  CarouselImage1,
  CarouselImage2,
  CarouselImage3,
  CarouselImage4,
  CarouselImage5,
} from "@/utils";
import { motion } from "framer-motion";

interface ImagesProps {
  imgIndex: number;
}

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};
const imgs = [
  "./images/Image1.svg",
  "./images/Image2.svg",
  "./images/Image3.svg",
  "./images/Image4.svg",
  "./images/Image5.svg",
  
];
const Images: React.FC<ImagesProps> = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => (
        <motion.div
          key={idx}
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{
            scale: imgIndex === idx ? 0.95 : 0.85,
          }}
          transition={SPRING_OPTIONS}
          className=" aspect-video w-full  shrink-0 rounded-xl bg-neutral-800 object-cover"
        />
      ))}
    </>
  );
};

export default Images;
