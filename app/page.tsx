import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Differentials from "@/components/home/Differentials";
import AboutTeacher from "@/components/home/AboutTeacher";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-slate-950
        via-blue-950
        to-black
        text-white
      "
    >

      <Navbar />

      <main>

        <Hero />

        <Differentials />

        <Features />

        <AboutTeacher />

        <Contact />

      </main>

      <Footer />

    </div>
  );
}