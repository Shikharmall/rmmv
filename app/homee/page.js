import Header from "../../components/common/Header";
import { Headerr } from "@/components/headerr";
import { TopBar } from "@/components/top-bar";
import { HeroSection } from "@/components/hero-section";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import GallerySection from "../../components/GallerySection";

export default function Homee() {
  return (
    <>
      <main className="min-h-screen">
        <TopBar />
        <Headerr />
        <HeroSection
          title="Raja Madhav Mall Vishen"
          subtitle="Madhuban Zamindari"
          backgroundImage="https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591410/rmmv/mallmahajanpada/warOverBuddhaRelics_u3t4ws.jpg"
        />
      </main>
      <Header />
      <Navbar />
      <GallerySection />
      <Footer />
    </>
  );
}
