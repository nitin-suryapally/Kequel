import {
  facebook,
  instagrameIcon,
  kickstartIcon,
  linkedinIcon,
  twitterIcon,
  youtubeIcon,
} from "@/utils";
import Image from "next/image";
import Link from "next/link";

const socialIcons = [
  // { src: facebook, alt: "Facebook", link: "https://facebook.com" },
  // {
  //   src: kickstartIcon,
  //   alt: "Kickstarter",
  //   link: "https://kickstarter.com",
  // },
  // { src: twitterIcon, alt: "Twitter", link: "https://twitter.com" },
  {
    src: linkedinIcon,
    alt: "LinkedIn",
    link: "https://www.linkedin.com/company/kequel/",
  },
  {
    src: instagrameIcon,
    alt: "Instagram",
    link: "https://www.instagram.com/kequelsmartfurniture?igsh=MXBzbGFtY290OHdicQ==",
  },
  { src: youtubeIcon, alt: "YouTube", link: "https://youtube.com" },
];

const SocialMediaIcons = () => {
  return (
    <div className="flex space-x-4 items-center">
      {socialIcons.map((icon, index) => (
        <Link
          key={index}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75 transition-opacity duration-300"
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={24}
            height={24}
            className="w-3 h-3 md:w-8 md:h-8"
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
