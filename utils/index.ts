import Logo from "@/public/images/logo.svg";
import HeroImage from "@/public/images/heroImage.svg";
import Kequel from "@/public/images/KEQUEL.svg";
import KickerStarter from "@/public/images/kickstarter.svg";
import doubleQuote from "@/public/images/double-quotes.svg";
import facebook from "@/public/images/facebookIcon.svg";
import kickstartIcon from "@/public/images/kickstarterIcon.svg";
import twitterIcon from "@/public/images/TwitterIcon.svg";
import linkedinIcon from "@/public/images/LinkedinIcon.svg";
import instagrameIcon from "@/public/images/instagrameIcon.svg";
import youtubeIcon from "@/public/images/youtubeIcon.svg";
import kequelFooter from "@/public/images/KEQUEL-footer.svg";
import CarouselImage1 from "@/public/images/Image1.svg";
import CarouselImage2 from "@/public/images/Image2.svg";
import CarouselImage3 from "@/public/images/Image3.svg";
import CarouselImage4 from "@/public/images/Image4.svg";
import CarouselImage5 from "@/public/images/Image5.svg";
import ProductImage from "@/public/images/ProductImage.svg";
import standardProduct from "@/public/images/StandardProduct.svg";
import compactClassic from "@/public/images/compact_classic.svg";
import compactPlus from "@/public/images/compact_plus.svg";
import compactDevKit from "@/public/images/compact_dev_kit.svg";
import { StaticImageData } from "next/image";

export interface Iproduct {
  id: number;
  name: string;
  features: string[];
  image: StaticImageData;
}

export const product = [
  {
    id: 1,
    name: "Kequel Compact  Classic",
    features: [
      "Power Sockets",
      "USB and Type-C Charging Module",
      "Smart Compartment",
      "Ambient and Motion Detection Lights",
    ],
    image: compactClassic,
  },
  {
    id: 2,
    name: "Kequel Compact Plus",
    features: [
      "Power Sockets",
      "USB and Type-C Charging Module",
      "Wireless Charging Pad",
      "ASmart Compartment",
      "Ambient and Motion Detection Lights",
    ],
    image: compactPlus,
  },
  {
    id: 3,
    name: "Kequel  Compact Dev Kit",
    features: [
      "Power Sockets",
      "USB and Type-C Charging Module",
      "Wireless Charging Pad",
      "AQI Monitoring Screen",
      "Smart Compartment",
      "Ambient and Motion Detection Lights",
    ],
    image: compactDevKit,
  },
];
export {
  Logo,
  HeroImage,
  Kequel,
  KickerStarter,
  doubleQuote,
  facebook,
  kickstartIcon,
  twitterIcon,
  linkedinIcon,
  instagrameIcon,
  youtubeIcon,
  kequelFooter,
  CarouselImage1,
  CarouselImage2,
  CarouselImage3,
  CarouselImage4,
  CarouselImage5,
  ProductImage,
  standardProduct,
};
