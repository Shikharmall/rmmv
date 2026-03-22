"use client";
import React, { useContext } from "react";
import Banner from "./common/Banner";
import LanguageContext from "@/context/languageContext";

export default function AboutSection() {

  const { language } = useContext(LanguageContext);

  const districts = [
    { eng: "Core Team", hindi: "कोर टीम" },
    { eng: "Deoria", hindi: "देवरिया" },
    { eng: "Gorakhpur", hindi: "गोरखपुर" },
    { eng: "Kushinagar", hindi: "कुशीनगर" },
    { eng: "Lucknow", hindi: "लखनऊ" },
    { eng: "Maharajganj", hindi: "महाराजगंज" },
    { eng: "Mau", hindi: "मऊ" },
    { eng: "Sant Kabir Nagar", hindi: "संतकबीरनगर" },
  ];

  return (
    <div className="bg-[#fefee3]">
      <Banner
        title={language === "english" ? "About Us" : "अबाउट"}
        bgImage="https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591410/rmmv/mallmahajanpada/warOverBuddhaRelics_u3t4ws.jpg"
      />
      <div
        className="w-full py-10 px-4 bg-no-repeat bg-center bg-contain"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/drb1ds8e3/image/upload/v1774188144/download_kt2fta.png')",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {districts.map((district, index) => (
            <button
              key={index}
              className="bg-[#ad916c] text-white font-semibold py-3 rounded-md hover:bg-[#967a53] transition duration-300 cursor-pointer"
            >
              {language === "english" ? district.eng : district.hindi}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
