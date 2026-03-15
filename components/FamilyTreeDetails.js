"use client";
import React, { useContext } from "react";
import Banner from "./common/Banner";
import FamilyTreeStructure from "./common/FamilyTreeStructure";
import LanguageContext from "@/context/languageContext";
import {
  madhubanFamilyData,
  madhubanFamilyDataHindi,
} from "@/data/madhubanFamilyData";

export default function FamilyTreeDetails() {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <Banner
        title={
          language === "english" ? "Royal Family Tree" : "राजपरिवार वंशवृक्ष"
        }
        bgImage={'https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591410/rmmv/mallmahajanpada/warOverBuddhaRelics_u3t4ws.jpg'}
      />
      <FamilyTreeStructure
        familyData={
          language === "english" ? madhubanFamilyData : madhubanFamilyDataHindi
        }
      />
    </div>
  );
}
