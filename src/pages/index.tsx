import Head from "next/head";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/navbar";
import Main from "@/views/home";
import About from "@/views/about";
import Experiences from "@/views/experiences";
import Contact from "@/views/contact";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />

        <title>Reinaldo Taslim | Software Engineer</title>

        <meta
          name="description"
          content="Reinaldo Taslim | Software Engineer"
        />
        <meta
          name="keywords"
          content="Soskxkakr, Reinaldo, Reinaldo Taslim, Software Engineer, Software Developer"
        />

        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:title" property="og:title" content="Reinaldo Taslim" />
        <meta
          key="og:description"
          property="og:description"
          content="Reinaldo Taslim | Software Engineer"
        />
        <meta
          key="og:url"
          property="og:url"
          content="https://soskxkakr.vercel.app"
        />
        <meta
          key="og:image"
          property="og:image"
          content="https://soskxkakr.vercel.app/_next/image?url=%2Fme.jpg&w=384&q=75"
        />
      </Head>
      <div className={`${sans.variable} font-sans`}>
        <Navbar />
        <Main />
        <About />
        <Experiences />
        <Contact />
        <SpeedInsights />
        <Analytics />
      </div>
    </>
  );
}
