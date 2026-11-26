import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Notes from "@/components/Notes";
import SectionDivider from "@/components/SectionDivider";
import Stack from "@/components/Stack";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="flex-1 page-fade-in">
      <Header />
      <Hero />
      <SectionDivider />
      <Work />
      <SectionDivider />
      <Stack />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Notes />
      <Contact />
      <Footer />
    </main>
  );
}
