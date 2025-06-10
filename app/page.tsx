import FirstSection from "@/components/First-section/FirstSection";
import Footer from "@/components/Footer/Footer";
import FourthSection from "@/components/Fourth-section/FourthSection";
import NavBar from "@/components/Nav/NavBar";
import SecondSection from "@/components/second-section/SecondSection";
import ThirdSection from "@/components/Third-section/ThirdSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </>
  );
}
