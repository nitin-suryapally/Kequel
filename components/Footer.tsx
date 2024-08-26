import { kequelFooter, Logo } from "@/utils";
import Image from "next/image";
import SocialMediaIcons from "./ui/SocialMediaIcons";

const  Footer = () => {
  return (
    <footer className="bg-black md:p-8 p-4 w-full flex items-center justify-between ">
      <Image
        src={kequelFooter}
        alt="logo image"
        width={168}
        height={78}
        priority
        className="w-14 h-5 md:w-40 md:h-9"
      />
      <SocialMediaIcons />
    </footer>
  );
};

export default Footer;
