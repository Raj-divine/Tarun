import Image from "next/image";
import { useEffect, useState } from "react";
import { TbChartBubble, TbChristmasTree, TbCloud } from "react-icons/tb";
import bubbles from "../public/images/bubbles.png";
const HeroSection = () => {
  const [imageClass, setImageClass] = useState("show-up");
  const [iconClass, setIconClass] = useState("show-up");
  useEffect(() => {
    setTimeout(() => {
      setImageClass("image-animate");
      setIconClass("animate-pulse");
    }, 2000);
  }, []);

  return (
    <div className="h-screen relative flex items-center px-4 min-[500px]:px-10 sm:pl-28 justify-between">
      <TbChartBubble
        className={`absolute top-16 ${iconClass} -translate-x-4  text-[#212135] text-9xl -z-10`}
      />
      <TbChristmasTree
        className={`absolute bottom-16 right-1/3 ${iconClass} -rotate-45 text-[#212135] text-9xl -z-10`}
      />
      <TbCloud
        className={`absolute top-72 right-1/3 ${iconClass} -translate-x-4 text-[#212135] text-9xl -z-10`}
      />
      <div className="max-w-3xl xl:w-8/12 w-full">
        <h2 className="uppercase move-left text-secondary text-xl font-montserrat tracking-widest mb-4">
          Tarun Kushwaha / /
        </h2>
        <h1 className="text-white font-poppins xl:text-7xl md:text-6xl sm:text-5xl min-[525px]:text-5xl text-4xl font-bold leading-[45px] md:leading-[75px] min-[525px]:leading-[60px] sm:leading-[60px]">
          <span className="block overflow-y-hidden xl:h-[83px] md:h-[80px]">
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
      <div
        className={`w-[500px] image-animate overflow-hidden ${imageClass} hidden min-[1018px]:block`}
      >
        <Image src={bubbles} alt="bubbles" className="object-contain" />
      </div>
    </div>
  );
};

export default HeroSection;
