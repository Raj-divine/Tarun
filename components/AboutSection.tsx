import { motion } from "framer-motion";
import { TbBolt, TbChartDots3, TbFlame } from "react-icons/tb";

const AboutSection = () => {
  return (
    <section className="sm:h-[75vh] h-[60vh] relative">
      <TbBolt className="absolute lg:top-32 lg:left-52 top-16 left-16 animate-pulse -translate-x-4 -rotate-45 text-[#212135] text-9xl -z-10" />
      <TbChartDots3 className="absolute lg:bottom-60 lg:right-52 sm:bottom-28 sm:right-36 bottom-80 right-16 animate-pulse -translate-x-4 -rotate-45 text-[#212135] text-9xl -z-10" />
      <TbFlame className="absolute lg:bottom-48 lg:left-36 bottom-16 left-20 sm:left-32 animate-pulse -translate-x-4 rotate-45 text-[#212135] text-9xl -z-10" />
      <div className="text-center">
        <h3 className="text-transparent mt-6 sm:mt-48 sm:text-6xl text-5xl font-bold bg-clip-text bg-gradient-to-r from-[#7027e5] to-[#da77f2] font-poppins cursor-default">
          About me
        </h3>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 230 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="lg:w-[800px] sm:w-3/4 w-[85%] my-0 mx-auto text-center sm:mt-20 mt-8"
      >
        <p className="text-gray-400 md:text-3xl sm:text-2xl min-[591px]:text-2xl min-[450px]:text-xl font-montserrat tracking-wide lg:leading-10">
          Hey! 👋, my name is <strong>Tarun</strong> and I'm a passionate
          frontend developer who loves tech, learning new things, and has been
          coding since the age of 13.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
