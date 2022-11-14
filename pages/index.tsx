import Head from "next/head";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import TopBar from "../components/TopBar";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Tarun Kushwaha - Frontend Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <HeroSection />
      <AboutSection />
    </div>
  );
}
