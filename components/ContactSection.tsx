import { motion } from "framer-motion";
const ContactSection = () => {
  return (
    <section className="mt-40 ">
      <div className="flex justify-center items-center flex-col">
        <h3 className="text-transparent leading-[75px] sm:text-6xl text-5xl font-bold bg-clip-text bg-gradient-to-r from-[#7027e5] to-[#da77f2] font-poppins cursor-default">
          Get in Touch
        </h3>
        <motion.div
          initial={{ opacity: 0, y: 230 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-20 sm:w-3/4 w-[85%] lg:w-[800px] text-center flex items-center flex-col"
        >
          <p className="text-gray-400 md:text-3xl sm:text-2xl min-[591px]:text-2xl min-[450px]:text-xl font-montserrat tracking-wide lg:leading-10">
            Thanks for checking out my portfolio 🎉! I hope you liked it, I
            would appreciate your feedback also, I&apos;m constantly looking for
            new opportunities and welcome anyone to my inboxes ✉️.
          </p>
          <a
            className="bg-gradient-to-r inline-block from-[#7027e5] to-[#da77f2] mt-12 rounded-xl sm:text-2xl font-poppins px-6 py-4 text-gray-200 bg-[length:200%] shadow-lg transition-all hover:bg-center duration-500"
            href="mailto:tarunkush0510@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Say hello! 👋
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
