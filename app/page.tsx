import Image from "next/image";
import Hero from "../components/Hero";
import { heroImage, heroText, aboutUs, services } from "./lib/data";
import HorizontalLine from "../components/HorizontalLine";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";

export default function Home() {
  return (
    <main className="">
      <Hero imageSrc={heroImage.src} imageAlt={heroImage.alt} text={heroText} />
      <HorizontalLine />
      <AboutUs aboutUsData={aboutUs} />
      <Services servicesData={services} />
      <HorizontalLine />
      <ContactUs />
    </main>
  );
}
