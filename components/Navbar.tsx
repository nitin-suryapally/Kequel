import { Logo } from "@/utils";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="p-4 xl:px-0 border-b-4 border-slate-300 ">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Image src={Logo} width={58} height={42} priority alt="main logo" />

        <button className="px-6 py-2 bg-black text-white rounded-3xl font-medium font-primary text-sm sm:text-base  ">
          KICKSTARTER
        </button>
      </div>
      
    </nav>
  );
};

export default Navbar;
