"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Banner from "../common/Banner";
import FamilyTreeStructure from "../common/FamilyTreeStructure";
import LanguageContext from "@/context/languageContext";
import ContentModel from "../common/ContentModel";
import SubHeading from "./SubHeading";
import {
  madhubanFamilyData,
  madhubanFamilyDataHindi,
} from "@/data/madhubanFamilyData";
import RamayanaPeriod from "./RamayanaPeriod";
import MahabharatPeriod from "./MahabharatPeriod";
import BuddhaPeriod from "./BuddhaPeriod";
import MajhuliEstate from "./MajhuliEstate";
import MadhubanEstate from "./MadhubanPeriod";
import MughalPeriod from "./MughalPeriod";
import TonsaBattle from "./TonsaBattle";
import BritishPeriod from "./BritishPeriod";
import PostIndependencePeriod from "./PostIndependencePeriod";

const familyData = {
  name: "Chandraketu King of Mallya Desh.",
  isKing: true,
  children: [
    {
      name: "",
      isInfinite: true,
      children: [
        {
          name: "Malla Kingdom in Mahabharat",
          isKing: true,
          children: [
            {
              name: "",
              isInfinite: true,
              children: [
                {
                  name: "Mall Kings in Kushinara & Pava during Buddha time.",
                  isKing: true,
                  children: [
                    {
                      name: "",
                      isInfinite: true,
                      children: [
                        {
                          name: "Est. of Majhauli Estate",
                          isKing: true,
                          children: [
                            {
                              name: "",
                              isInfinite: true,
                              children: [
                                {
                                  name: "Est. of Madhuban Zamindari",
                                  isKing: true,
                                  isExtra: "(By Raja Madhav Mall Visen)",
                                  children: [madhubanFamilyData],
                                }
                              ],
                            }
                          ],
                        }
                      ],
                    },
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
};

const familyDataHindi = {
  name: "चन्द्रकेतु — मल्ल देश के राजा",
  isKing: true,
  children: [
    {
      name: "",
      isInfinite: true,
      children: [
        {
          name: "महाभारत काल में मल्ल राज्य",
          isKing: true,
          children: [
            {
              name: "",
              isInfinite: true,
              children: [
                {
                  name: "बुद्ध काल में कुशीनारा एवं पावा के मल्ल राजा",
                  isKing: true,
                  children: [
                    {
                      name: "",
                      isInfinite: true,
                      children: [
                        {
                          name: "मझौली राज्य की स्थापना",
                          isKing: true,
                          children: [
                            {
                              name: "",
                              isInfinite: true,
                              children: [
                                {
                                  name: "मधुबन ज़मींदारी की स्थापना",
                                  isKing: true,
                                  isExtra: "(राजा माधव मल्ल द्वारा)",
                                  children: [madhubanFamilyDataHindi],
                                }
                              ],
                            }
                          ],
                        }
                      ],
                    },
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
};

export default function OurHistoryDetails() {
  const { language } = useContext(LanguageContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const openModal = (src) => {
    setSelectedContent(src);
    setModalOpen(true);
  };

  return (
    <div className="bg-[#fefee3]">
      <Banner
        title={language === "english" ? "Our History" : "हमारा इतिहास"}
        bgImage={'https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591410/rmmv/mallmahajanpada/warOverBuddhaRelics_u3t4ws.jpg'}
      />

      {/* Main Content */}
      <main
        className="container mx-auto px-5 md:px-20 py-10 bg-no-repeat"
        style={{
          backgroundImage: `
      url('https://res.cloudinary.com/drb1ds8e3/image/upload/v1774188144/download_kt2fta.png'),
      url('https://res.cloudinary.com/drb1ds8e3/image/upload/v1774188144/download_kt2fta.png')
    `,
          backgroundPosition: "top center, bottom center",
          backgroundSize: "600px auto, 600px auto",
        }}

      >

        {/* Ramayan Period */}
        <RamayanaPeriod language={language} openModal={openModal} />

        {/* Mahabharat Period */}
        <MahabharatPeriod language={language} openModal={openModal} />

        {/* Buddha Period */}
        <BuddhaPeriod language={language} openModal={openModal} />

        {/* Majhauli Estate */}
        <MajhuliEstate language={language} openModal={openModal} />

        {/* Madhuban Zamindari */}
        <MadhubanEstate language={language} openModal={openModal} />

        {/* Mughal Period */}
        <MughalPeriod language={language} openModal={openModal} />

        {/* Battle of Tonsa */}
        <TonsaBattle language={language} openModal={openModal} />

        {/* Britisher's Period */}
        <BritishPeriod language={language} openModal={openModal} />

        {/* Post Independence Period */}
        <PostIndependencePeriod language={language} openModal={openModal} />

        <FamilyTreeStructure
          familyData={language === "english" ? familyData : familyDataHindi}
        />

      </main>

      {/* Modal */}
      <ContentModel
        isOpen={isModalOpen}
        content={selectedContent}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
