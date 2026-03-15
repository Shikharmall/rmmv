"use client";
import LanguageContext from "@/context/languageContext";
import Banner from "./common/Banner";
import ContentsGrid from "./ContentsGrid";
import { useContext } from "react";

const contents = [
  {
    tagEng: "Bisen Rajpoot Tikana",
    tagHindi: "बिसेन राजपूत टिकाना",
    url: "/assets/img/madhuban/map.png",
  },
  // {
  //   tagEng: "Bunny Video",
  //   tagHindi: "बिसेन राजपूत टिकाना",
  //   isVideo: true,
  //   url: "https://www.w3schools.com/tags/mov_bbb.mp4",
  // },
  {
    tagEng: "Majhauli Estate",
    tagHindi: "मझौली राज",
    url: "/assets/img/majhauli/majhauliraj1.jpg",
  },
  {
    tagEng: "Majhauli Estate",
    tagHindi: "मझौली राज",
    url: "/assets/img/majhauli/majhauliraj2.jpg",
  },
  {
    tagEng: "Majhauli Estate",
    tagHindi: "मझौली राज",
    url: "/assets/img/majhauli/majhauliraj3.jpg",
  },
  {
    tagEng: "Majhauli Estate",
    tagHindi: "मझौली राज",
    url: "/assets/img/majhauli/majhauliraj4.jpg",
  },
  {
    tagEng: "Majhauli Estate",
    tagHindi: "मझौली राज",
    url: "/assets/img/majhauli/majhauliraj5.png",
  },
  {
    tagEng: "Majhauli Estate",
    tagHindi: "मझौली राज",
    url: "/assets/img/majhauli/majhauliraj6.png",
  },
  {
    tagEng: "Majhauli Estate",
    tagHindi: "मझौली राज",
    url: "/assets/img/majhauli/majhauliraj7.jpeg",
  },
  {
    tagEng: "Majhauli Estate",
    tagHindi: "मझौली राज",
    url: "/assets/img/majhauli/majhauliraj10.jpg",
  },
  {
    tagEng: "Majhauli Estate",
    tagHindi: "मझौली राज",
    url: "/assets/img/majhauli/majhauliraj11.jpg",
  },
  {
    tagEng: "Majhauli Estate",
    tagHindi: "मझौली राज",
    url: "/assets/img/majhauli/majhauliraj12.jpg",
  },
  {
    tagEng: "Ruined Thikana of Madhuban Zamindari",
    tagHindi: "मधुबन ज़मींदारी का खंडहर हुआ ठिकाना",
    url: "/assets/img/madhuban/madhuban1.jpg",
  },
  {
    tagEng: "Ruined Thikana of Madhuban Zamindari",
    tagHindi: "मधुबन ज़मींदारी का खंडहर हुआ ठिकाना",
    url: "/assets/img/madhuban/madhuban2.png",
  },
  {
    tagEng: "Ruined Thikana of Madhuban Zamindari",
    tagHindi: "मधुबन ज़मींदारी का खंडहर हुआ ठिकाना",
    url: "/assets/img/madhuban/madhuban3.png",
  },
  {
    tagEng: "Ruined Thikana of Madhuban Zamindari",
    tagHindi: "मधुबन ज़मींदारी का खंडहर हुआ ठिकाना",
    url: "/assets/img/madhuban/madhuban4.png",
  },
];

export default function GallerySection() {
  const { language } = useContext(LanguageContext);
  return (
    <section className="bg-white pb-12">
      {/* Heading */}
      <Banner
        title={language === "english" ? "Explore Gallery" : "एक्सप्लोर गैलरी"}
        bgImage={'/assets/img/mallMahajanpada/warOverBuddhaRelics.jpg'}
      />
      <div className="max-w-6xl mx-auto px-4">
        <ContentsGrid contents={contents} />
      </div>
    </section>
  );
}
