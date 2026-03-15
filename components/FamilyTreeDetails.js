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
        bgImage={'/assets/img/mallMahajanpada/warOverBuddhaRelics.jpg'}
      />
      <FamilyTreeStructure
        familyData={
          language === "english" ? madhubanFamilyData : madhubanFamilyDataHindi
        }
      />
    </div>
  );
}
