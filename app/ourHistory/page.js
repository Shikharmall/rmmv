"use client";
import { Headerr } from "@/components/headerr";
import { TopBar } from "@/components/top-bar";
import Footer from "../../components/common/Footer";
import OurHistoryDetails from "@/components/OurHistoryDetails/OurHistoryDetails";

export default function OurHistory() {
  return (
    <>
      {/* Fixed Header */}
      <main className="fixed top-0 left-0 w-full z-50">
        <TopBar />
        <Headerr />
      </main>

      {/* Page Content */}
      <div className="pt-[90px]"> {/* adjust height based on header */}
        <OurHistoryDetails />
      </div>

      <Footer />
    </>
  );
}