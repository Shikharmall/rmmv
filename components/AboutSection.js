"use client";
import React, { useContext } from "react";
import Banner from "./common/Banner";
import LanguageContext from "@/context/languageContext";

export default function AboutSection() {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <Banner
        title={
          language === "english" ? "About" : "अबाउट"
        }
        bgImage={'https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591410/rmmv/mallmahajanpada/warOverBuddhaRelics_u3t4ws.jpg'}
      />
    </div>
  );
}
