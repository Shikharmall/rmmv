"use client";
import Banner from "./common/Banner";
import LanguageContext from "@/context/languageContext";
import { useContext } from "react";

export default function DonateSection() {
  const { language } = useContext(LanguageContext);

  return (
    <section className="bg-white pb-12">
      {/* Heading */}

      <Banner
        title={language === "english" ? "Donate" : "डोनेट"}
        bgImage={'https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591410/rmmv/mallmahajanpada/warOverBuddhaRelics_u3t4ws.jpg'}
      />
      {/* <div className="max-w-6xl mx-auto px-4">
        <p>Page under maintainence</p>
      </div> */}
    </section>
  );
}
