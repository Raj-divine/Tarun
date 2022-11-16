import ProjectCard from "./ProjectCard";
import meethub from "../public/images/meethub.png";
import tuster from "../public/images/tuster.png";

const projectData = [
  {
    title: "Meethub",
    image: meethub,
    description:
      "A place to find, join, and host meetups with a clean and easy to use user interface. Loaded with features and filters to find the best meetups you want without wasting time and many more.",
    github: "https://github.com/Raj-divine/meethub",
    link: "https://meethub-nine.vercel.app/",
    tech: [
      { link: "https://nextjs.org/", text: "NextJS" },
      { link: "https://firebase.google.com/", text: "firebase" },
      { link: "https://sass-lang.com/", text: "scss" },
      { link: "https://redux-toolkit.js.org/", text: "redux" },
      { link: "https://mantine.dev/", text: "mantinui" },
    ],
  },
  {
    title: "Tuster",
    image: tuster,
    description:
      "Find tutors to teach you the things that you always wanted to learn at the comfort of your home. Filled with features like Light/Dark mode, tutor recommendation based on your interest, and an eye-catching design",
    github: "https://github.com/Raj-divine/tuster",
    link: "https://tuster.vercel.app//",
    tech: [
      { link: "https://nextjs.org/", text: "NextJS" },
      { link: "https://firebase.google.com/", text: "firebase" },
      { link: "https://tailwindcss.com/", text: "tailwindcss" },
      { link: "https://redux-toolkit.js.org/", text: "redux" },
      { link: "https://mantine.dev/", text: "mantinui" },
    ],
  },
];

const ProjectSection = () => {
  return (
    <section id="section-projects" className="h-screen">
      <div className="pt-24 text-center">
        <h3 className="text-transparent leading-[75px] text-6xl font-bold bg-clip-text bg-gradient-to-r from-[#7027e5] to-[#da77f2] font-poppins cursor-default">
          My projects
        </h3>
        <div className="flex justify-center">
          <p className="text-gray-400 mt-6 text-md tracking-wider w-11/12 font-normal font-montserrat">
            My projects are complex and full of features!
          </p>
        </div>
        <ProjectCard reverse={false} projectData={projectData[0]} />
        <ProjectCard reverse={true} projectData={projectData[1]} />
      </div>
    </section>
  );
};

export default ProjectSection;
