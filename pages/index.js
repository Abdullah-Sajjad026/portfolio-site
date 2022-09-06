import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

import AOS from "aos";
import Head from "next/head";
import {useEffect} from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 700,
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="Abdullah's portfolio website." />
        <title>Abdullah&apos;s Portfolio</title>
        <link
          rel="shortcut icon"
          href="/images/favicon.jpeg"
          type="image/x-icon"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="main-grid">
        <Hero />
        <Skills />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
      <script
        defer
        src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
      ></script>
    </>
  );
}
