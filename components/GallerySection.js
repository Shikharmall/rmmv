"use client";
import LanguageContext from "@/context/languageContext";
import Banner from "./common/Banner";
import ContentsGrid from "./ContentsGrid";
import { useContext } from "react";

const contents = [
  {
    tagEng: "Bisen Rajpoot Tikana",
    tagHindi: "बिसेन राजपूत टिकाना",
    url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591070/rmmv/madhuban/map_nlh7rg.png",
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
    url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591470/rmmv/majhauli/majhauliraj1_wdqavo.jpg",
  },
  {
    tagEng: "Majhauli Estate",
    tagHindi: "मझौली राज",
    url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591467/rmmv/majhauli/majhauliraj2_n8aoxj.jpg",
  },
  {
    tagEng: "Majhauli Estate",
    tagHindi: "मझौली राज",
    url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591470/rmmv/majhauli/majhauliraj3_oky0l2.jpg",
  },
  {
    tagEng: "Majhauli Estate",
    tagHindi: "मझौली राज",
    url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591480/rmmv/majhauli/majhauliraj4_sxc5v7.jpg",
  },
  {
    tagEng: "Majhauli Estate",
    tagHindi: "मझौली राज",
    url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591470/rmmv/majhauli/majhauliraj7_xggygd.jpg",
  },
  {
    tagEng: "Majhauli Estate",
    tagHindi: "मझौली राज",
    url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591474/rmmv/majhauli/majhauliraj11_zlamrm.jpg",
  },
  {
    tagEng: "Majhauli Estate",
    tagHindi: "मझौली राज",
    url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591479/rmmv/majhauli/majhauliraj12_km0obe.jpg",
  },
  {
    tagEng: "Majhauli Estate Insignia",
    tagHindi: "मझौली एस्टेट का राजचिह्न",
    url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591468/rmmv/majhauli/majhauli_coa_id1rw0.png",
  },
  {
    tagEng: "Raja Madhav Mall Vishen",
    tagHindi: "मधुबन ज़मींदारी का खंडहर हुआ ठिकाना",
    url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773593536/rmmv/madhuban/rajamadhavmall_nkklvr.png",
  },
  {
    tagEng: "Raja Nath Mall Vishen",
    tagHindi: "मधुबन ज़मींदारी का खंडहर हुआ ठिकाना",
    url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773593553/rmmv/madhuban/rajanathmall_flr0d5.png",
  },
  {
    tagEng: "Babu Ajay Bahadur Mall Vishen",
    tagHindi: "मधुबन ज़मींदारी का खंडहर हुआ ठिकाना",
    url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591044/rmmv/madhuban/babufatehbahadurmall_nrqssy.png",
  },
  {
    tagEng: "Ruined Thikana of Madhuban Zamindari",
    tagHindi: "मधुबन ज़मींदारी का खंडहर हुआ ठिकाना",
    url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591058/rmmv/madhuban/madhuban1_euky3r.jpg",
  },
  {
    tagEng: "Artistic Reconstruction of the Ruined Thikana of Madhuban Zamindari",
    tagHindi: "मधुबन ज़मींदारी के खंडहर हो चुके ठिकाने का कलात्मक पुनर्निर्माण।",
    url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591109/rmmv/madhuban/madhubanfort_i3tcwl.png",
  },
  // {
  //   tagEng: "Ruined Thikana of Madhuban Zamindari",
  //   tagHindi: "मधुबन ज़मींदारी का खंडहर हुआ ठिकाना",
  //   url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591062/rmmv/madhuban/madhuban3_dsnwho.png",
  // },
  {
    tagEng: "Martyrs' Memorial of Mohan Pandey, Commander-in-Chief of Raja Nath Mall's Army",
    tagHindi: "शहीद स्मारक : मोहन पांडेय, राजा नत्थ मल्ल की सेना के प्रधान सेनापति।",
    url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591063/rmmv/madhuban/mohanpandey_lkrg6t.png",
  },
  {
    tagEng: "Ruined Thikana of Madhuban Zamindari",
    tagHindi: "मधुबन ज़मींदारी का खंडहर हुआ ठिकाना",
    url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591080/rmmv/madhuban/madhuban4_ijvetx.png",
  },
  {
    tagEng: "Ratol Taal (Madhuban)",
    tagHindi: "रटोल ताल (मधुबन)",
    url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1774081953/ratohlake4_ehshfr.jpg",
  },
  {
    tagEng: "Ratol Taal (Madhuban)",
    tagHindi: "रटोल ताल (मधुबन)",
    url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1774081953/ratohlake2_idgxrh.jpg",
  },
  {
    tagEng: "Ratol Taal (Madhuban)",
    tagHindi: "रटोल ताल (मधुबन)",
    url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1774081954/ratohlake11_ebaonb.jpg",
  },
];

export default function GallerySection() {
  const { language } = useContext(LanguageContext);
  return (
    <section className="bg-white pb-12">
      {/* Heading */}
      <Banner
        title={language === "english" ? "Explore Gallery" : "एक्सप्लोर गैलरी"}
        bgImage={'https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591410/rmmv/mallmahajanpada/warOverBuddhaRelics_u3t4ws.jpg'}
      />
      <div className="max-w-6xl mx-auto px-4">
        <ContentsGrid contents={contents} />
      </div>
    </section>
  );
}
