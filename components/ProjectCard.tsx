import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { TbExternalLink, TbBrandGithub } from "react-icons/tb";

type TechLinkProps = {
  href: string;
  children: ReactNode;
  aria: string;
};
type ProjectCardProps = {
  reverse: boolean;
  projectData: {
    title: string;
    image: StaticImageData;
    description: string;
    github: string;
    link: string;
    tech: { link: string; text: string }[];
  };
};

const TechLink = ({ href, children, aria }: TechLinkProps) => {
  return (
    <span className="uppercase">
      <a href={href} target="_blank" rel="noreferrer" aria-label={aria}>
        {children}
      </a>
    </span>
  );
};
const ProjectCard = ({ reverse, projectData }: ProjectCardProps) => {
  const { title, image, description, github, link, tech } = projectData;
  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex justify-center"
    >
      <div
        className={`xl:w-[80%] md:w-4/5 items-center flex-col-reverse flex relative mt-28 lg:mt-48 ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } `}
      >
        <a
          target="_blank"
          rel="noreferrer"
          aria-label={title}
          href={link}
          className="xl:w-1/2 lg:w-2/5 w-4/5 border-[#2a2b37] border-2 p-4 rounded-lg cursor-pointer"
        >
          <Image
            src={image}
            alt="meethub"
            placeholder="blur"
            className="object-contain shadow-md"
          />
        </a>
        <div
          className={
            reverse
              ? "xl:w-1/2 lg:w-3/5 md:w-3/5 mb-10 lg:mb-0 flex flex-col items-center lg:items-start"
              : "xl:w-1/2 lg:w-3/5 md:w-3/5 mb-10 lg:mb-0 flex flex-col items-center lg:items-end"
          }
        >
          <h5
            className={`font-montserrat lg:mt-16 text-5xl sm:text-6xl lg:text-5xl font-bold ${
              title === "Meethub"
                ? "gradient-text-meethub"
                : "gradient-text-tuster"
            }  uppercase`}
          >
            {title}
          </h5>
          <div className="sm:w-[450px] w-11/12 mt-10 bg-[#1e1e30] p-8 shadow-2xl">
            <p className="text-gray-500 text-sm tracking-wider text-start font-poppins">
              {description}
            </p>
          </div>
          <div className="text-gray-400 font-medium min-[500px]:text-sm text-xs w-[320px] min-[500px]:w-[400px] flex justify-between mt-10 cursor-pointer">
            {tech.map((item) => {
              return (
                <TechLink key={item.text} aria={item.text} href={item.link}>
                  {item.text}
                </TechLink>
              );
            })}
          </div>
          <div className="flex mt-10 items-center">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label="github"
            >
              <TbBrandGithub
                className="text-gray-500 hover:text-gray-400 mr-3"
                size={25}
              />
            </a>
            <a href={link} target="_blank" rel="noreferrer" aria-label={title}>
              <TbExternalLink
                className="text-gray-500 hover:text-gray-400"
                size={25}
              />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
