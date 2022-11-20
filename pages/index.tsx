import Head from "next/head";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import TopBar from "../components/TopBar";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Tarun Kushwaha - Frontend Developer</title>
        <meta
          name="description"
          content="My personal portfolio showcasing my works"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
