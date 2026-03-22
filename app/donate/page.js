"use client";
import { Headerr } from "@/components/common/headerr";
import { TopBar } from "@/components/common/top-bar";
import Footer from "../../components/common/Footer";
import DonateSection from "../../components/DonateSection";

export default function Donate() {

  return (
    <>
      {/* Fixed Header */}
      <main className="fixed top-0 left-0 w-full z-50">
        <TopBar />
        <Headerr />
      </main>

      {/* Page Content */}
      <div className="pt-[90px]"> {/* adjust height based on header */}
        <DonateSection />
      </div>

      <Footer />
    </>
  );
}

