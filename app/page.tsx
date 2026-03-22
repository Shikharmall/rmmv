"use client";
import { Headerr } from "@/components/headerr";
import { TopBar } from "@/components/top-bar";
import { HeroSection } from "@/components/hero-section";
import AboutSection from "@/components/home/AboutSection";
import MoreSection from "@/components/home/MoreSection";
import MapSection from "@/components/home/MapSection";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed Header */}
      <main className="fixed top-0 left-0 w-full z-50">
        <TopBar />
        <Headerr />
      </main>

      {/* Page Content */}
      <div className="pt-[90px]"> {/* adjust height based on header */}
        <HeroSection
          title="Raja Madhav Mall Vishen"
          subtitle="Madhuban Zamindari"
          backgroundImage="https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591410/rmmv/mallmahajanpada/warOverBuddhaRelics_u3t4ws.jpg"
        />
        <AboutSection />
        <MoreSection />
        <MapSection />
      </div>

      <Footer />
    </>
  );
}


