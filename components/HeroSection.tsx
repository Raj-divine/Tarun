import Image from "next/image";
import { useEffect, useState } from "react";
import bubbles from "../public/images/bubbles.png";
const HeroSection = () => {
  const [imageClass, setImageClass] = useState("show-up");

  useEffect(() => {
    setTimeout(() => {
      setImageClass("image-animate");
    }, 2000);
  }, []);

  return (
    <div className="h-screen flex items-center pl-28 justify-between">
      <div className="max-w-3xl w-7/12">
        <h2 className="uppercase move-left text-secondary text-xl font-montserrat tracking-widest mb-4">
          Tarun Kushwaha / /
        </h2>
        <h1 className="text-white font-poppins text-7xl font-bold leading-[75px]">
          <span className="block overflow-y-hidden h-[83px]">
            <span className="block move-up">
              Building
              <span className="gradient-text"> beautiful</span>
            </span>
          </span>
          <span className="block overflow-y-hidden">
            <span className="block move-up">websites with</span>
          </span>
          <span className="block overflow-y-hidden">
            <span className="block move-up">
              <span className="gradient-text ">passion</span>
            </span>
          </span>
        </h1>
        <div className="mt-12 move-up-with-opacity">
          <a
            href="#section-projects"
            className="text-gray-400 relative font-montserrat uppercase font-medium tracking-widest hover:tracking-[3px] hover:after:w-full after:transition-all after:duration-300 transition-all duration-300 after:content-[''] after:bg-gray-400 after:absolute after:h-[1px] after:top-6 after:left-0 after:w-[0%] "
          >
            My projects
          </a>
        </div>
      </div>
      <div className={`w-[500px] image-animate overflow-hidden ${imageClass}`}>
        <Image src={bubbles} alt="bubbles" className="object-contain" />
      </div>
    </div>
  );
};

export default HeroSection;
