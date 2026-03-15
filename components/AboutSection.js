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
          language === "english" ? "Royal Family Tree" : "राजपरिवार वंशवृक्ष"
        }
        bgImage={'/assets/img/mallMahajanpada/warOverBuddhaRelics.jpg'}
      />
    </div>
  );
}
