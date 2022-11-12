import Image from "next/image";
import bubbles from "../public/images/bubbles.png";
const HeroSection = () => {
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
            <span className="gradient-text block move-up">passion</span>
          </span>
        </h1>
      </div>
      <div className="w-[500px] show-up image-animate overflow-hidden">
        <Image src={bubbles} alt="bubbles" className="object-contain" />
      </div>
    </div>
  );
};

export default HeroSection;
