import Image from "next/image";
import logo from "../public/images/logo.png";
import { TbBrandGithub, TbBrandLinkedin, TbBrandTwitter } from "react-icons/tb";
const TopBar = () => {
  return (
    <nav className="flex  justify-center">
      <div className="bg-[#2a2b386b] move-down max-w-4xl backdrop-blur border-2 border-[#2a2b37] h-16 w-1/2 mt-12 flex justify-between px-6 items-center rounded-2xl min-w-[550px] z-50 fixed">
        <div className="w-16 cursor-pointer">
          <Image src={logo} alt="logo-tarun" className="object-contain" />
        </div>
        <div className="flex">
          <a
            href="https://github.com/Raj-divine/"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
          >
            <TbBrandGithub size={25} className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/tarun-kush/"
            target="_blank"
            rel="noreferrer"
            aria-label="linkedin"
          >
            <TbBrandLinkedin size={25} className="icon" />
          </a>
          <a
            href="https://twitter.com/tarun_kus"
            target="_blank"
            rel="noreferrer"
            aria-label="twitter"
          >
            <TbBrandTwitter size={25} className="icon" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
