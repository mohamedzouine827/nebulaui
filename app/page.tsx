import Image from "next/image";
import Navbar from "./_component/website/Navbar";
import HeroSection from "./_component/website/HeroSection";
import Components from "./_component/website/Components";
import Footer from "./_component/website/Footer";

export default function Home() {
  return (
   <main>
    <Navbar/>
    <HeroSection/>
    <Components/>
    <Footer/>
   </main>
  );
}
