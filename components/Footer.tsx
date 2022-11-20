import Image from "next/image";
import { TbBrandGithub, TbBrandLinkedin, TbBrandTwitter } from "react-icons/tb";
import logo from "../public/images/logo.png";
const Footer = () => {
  return (
    <footer className="text-gray-400 mt-28 border-t-2 px-5 flex border-[#2a2b37]">
      <div className="w-20">
        <Image src={logo} alt="logo-tarun" className="object-contain" />
      </div>
      <div className="flex ml-auto items-center">
        <a
          href="https://github.com/Raj-divine/"
          target="_blank"
          rel="noreferrer"
          placeholder="blur"
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
    </footer>
  );
};

export default Footer;
