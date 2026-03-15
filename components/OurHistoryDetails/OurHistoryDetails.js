"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Banner from "../common/Banner";
import FamilyTreeStructure from "../common/FamilyTreeStructure";
import LanguageContext from "@/context/languageContext";
import ContentModel from "../common/ContentModel";
import {
  madhubanFamilyData,
  madhubanFamilyDataHindi,
} from "@/data/madhubanFamilyData";

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
    <div>
      <Banner
        title={language === "english" ? "Our History" : "हमारा इतिहास"}
        bgImage={'/assets/img/mallMahajanpada/warOverBuddhaRelics.jpg'}
      />

      {/* Main Content */}
      <main className="container mx-auto px-5 md:px-20 py-5 md:py-10">

        {/* Ramayan Period */}
        <div className="flex items-center gap-4 my-5">
          <div className="h-px flex-grow bg-gray-300"></div>
          <span className="text-gray-500 text-2xl whitespace-nowrap">
            {language === "english" ? "RAMAYANA PERIOD" : "रामायण काल"}
          </span>
          <div className="h-px flex-grow bg-gray-300"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 my-3">

          {/* left Image */}
          <div className="md:col-span-1">
            <div className="border-1 border-gray-300 p-2 flex flex-col items-center">
              <div className="flex flex-col md:flex-row justify-center">
                <Image
                  src="/assets/img/mallMahajanpada/ramayana1.png"
                  alt="ramayana-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({
                      url: "/assets/img/mallMahajanpada/ramayana1.png",
                      // estate: "(Page 1)",
                      // estateHindi: "(पृष्ठ 1)",
                    })
                  }
                />
                <Image
                  src="/assets/img/mallMahajanpada/ramayana2.png"
                  alt="ramayana-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({
                      url: "/assets/img/mallMahajanpada/ramayana2.png",
                      // estate: "(Page 2)",
                      // estateHindi: "(पृष्ठ 2)",
                    })
                  }
                />
              </div>

              <p>
                {language === "english"
                  ? "Mention of Mall Country & King Chandraketu in Valmiki Ramayana"
                  : "वाल्मीकि रामायण में मल्ल देश और राजा चन्द्रकेतु का उल्लेख|"}
              </p>
            </div>
          </div>

          {/* Bio */}
          {language === "english" ? (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                The first written record of the Mall kingdom appears in the
                <strong> <em> Valmiki Ramayana </em> </strong> (Uttarakandam, Section CXV),
                where Raja Chandraketu, mentioned as the son of Lord Lakshmana,
                was granted dominion over the country of Mallya (Mall) by Lord Rama.
                There, Rama himself built a splendid capital for him, known as Chandrakanti —
                a city described as &quot;highly picturesque and comparable to the city of the celestials.&quot;
              </p>

              <p className="font-serif">
                The first reference states that Lord Rama said to Lakshmana:
                &quot;O son of Sumitra, your two sons, Angada and Chandraketu, are virtuous and capable;
                I shall establish them as rulers over their respective kingdoms.&quot;
              </p>

              <p className="font-serif mx-5 md:mx-10">
                <em>
                  &quot;ततः सुमित्रानन्दनौ पुत्रौ तव लक्षण । <br />
                  अङ्गदं चन्द्रकेतुं च राज्ये स्थापयिता अहम् ॥&quot;
                </em>
              </p>

              <p className="font-serif mt-4">
                The second reference states that in the country of Mallya,
                those two valiant sons — the best of the Raghus —
                built a beautiful city named Chandrakanti,
                which was like the abode of the gods (Lokapālas).
              </p>

              <p className="font-serif mx-5 md:mx-10">
                <em>
                  &quot;मल्यदेशे च तौ वीरौ चन्द्रकान्तीनगरीं शुभाम् । <br />
                  निरमात् स रघुश्रेष्ठो लोकपालपुरोपमाम् ॥&quot;
                </em>
              </p>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                मल्ल राज्य का पहला लिखित उल्लेख <strong><em>वाल्मीकि रामायण</em></strong> (उत्तरकांड, खंड CXV) में मिलता है,
                जहाँ राजा चन्द्रकेतु, जिन्हें भगवान लक्ष्मण का पुत्र बताया गया है, को भगवान राम द्वारा मल्ल्यदेश (मल्ल) पर राज्याभिषेक प्रदान किया गया।
                वहाँ, राम ने उनके लिए एक भव्य राजधानी चन्द्रकान्ति बनवाई — एक ऐसा नगर जिसे &quot;अत्यंत रमणीय और देवताओं के नगर के समान&quot; बताया गया है।
              </p>

              <p className="font-serif">
                पहला संदर्भ बताता है कि भगवान राम ने लक्ष्मण से कहा:
                &quot;हे सुमित्रानंदन, तुम्हारे दो पुत्र अंगद और चन्द्रकेतु गुणी और सक्षम हैं;
                मैं उन्हें उनके-अपने-अपने राज्यों का शासक बनाऊँगा।&quot;
              </p>

              <p className="font-serif mx-5 md:mx-10">
                <em>
                  &quot;ततः सुमित्रानन्दनौ पुत्रौ तव लङ्क्ष्मण । <br />
                  अङ्गदं चन्द्रकेतुं च राज्ये स्थापयिता अहम् ॥&quot;
                </em>
              </p>

              <p className="font-serif mt-4">
                दूसरा संदर्भ बताता है कि मल्ल्यदेश में,
                ये दोनों वीर — रघुश्रेष्ठों में श्रेष्ठ —
                एक सुंदर नगर चन्द्रकान्ति का निर्माण करते हैं,
                जो देवताओं (लोकपालों) के नगर के समान था।
              </p>

              <p className="font-serif mx-5 md:mx-10">
                <em>
                  &quot;मल्यदेशे च तौ वीरौ चन्द्रकान्तीनगरीं शुभाम् । <br />
                  निरमात् स रघुश्रेष्ठो लोकपालपुरोपमाम् ॥&quot;
                </em>
              </p>
            </div>
          )}
        </div>

        {/* Mahabharat Period */}
        <div className="flex items-center gap-4 my-5">
          <div className="h-px flex-grow bg-gray-300"></div>
          <span className="text-gray-500 text-2xl whitespace-nowrap">
            {language === "english" ? "MAHABHARAT PERIOD" : "महाभारत काल"}
          </span>
          <div className="h-px flex-grow bg-gray-300"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 my-3">
          {/* Bio */}
          {language === "english" ? (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                The king of the Malla Kingdom also appears in Vyasa's Mahabharata (Sabha Parva, Section XXX), where it is mentioned that during the Digvijaya campaign of Bhima, he subdued many northern kingdoms, including <strong> <em> the king of the Mallas</em></strong>, while expanding the dominion of Yudhishthira for the Rajasuya sacrifice. The text also states that Bhima “<strong><em>vanquished the southern Mallas and the Bhagavanta mountains</em></strong>”, thereby bringing that region under the authority of Yudhishthira.
              </p>

              <p className="font-serif">
                The king of the Malla Kingdom also appears in Vyasa's Mahabharata (Bhisma Parva, Section XXX), where it is mentioned that during the Digvijaya campaign of Bhima, he subdued many northern kingdoms, including <strong> <em> the king of the Mallas</em></strong>, while expanding the dominion of Yudhishthira for the Rajasuya sacrifice. The text also states that Bhima “<strong><em>vanquished the southern Mallas and the Bhagavanta mountains</em></strong>”, thereby bringing that region under the authority of Yudhishthira.
              </p>

              <p className="font-serif mx-5 md:mx-10">
                <em>
                  &quot;ततः सुमित्रानन्दनौ पुत्रौ तव लक्षण । <br />
                  अङ्गदं चन्द्रकेतुं च राज्ये स्थापयिता अहम् ॥&quot;
                </em>
              </p>

              <p className="font-serif mt-4">
                The second reference states that in the country of Mallya,
                those two valiant sons — the best of the Raghus —
                built a beautiful city named Chandrakanti,
                which was like the abode of the gods (Lokapālas).
              </p>

              <p className="font-serif mx-5 md:mx-10">
                <em>
                  &quot;मल्यदेशे च तौ वीरौ चन्द्रकान्तीनगरीं शुभाम् । <br />
                  निरमात् स रघुश्रेष्ठो लोकपालपुरोपमाम् ॥&quot;
                </em>
              </p>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                मल्ल राज्य का पहला लिखित उल्लेख <strong><em>वाल्मीकि रामायण</em></strong> (उत्तरकांड, खंड CXV) में मिलता है,
                जहाँ राजा चन्द्रकेतु, जिन्हें भगवान लक्ष्मण का पुत्र बताया गया है, को भगवान राम द्वारा मल्ल्यदेश (मल्ल) पर राज्याभिषेक प्रदान किया गया।
                वहाँ, राम ने उनके लिए एक भव्य राजधानी चन्द्रकान्ति बनवाई — एक ऐसा नगर जिसे &quot;अत्यंत रमणीय और देवताओं के नगर के समान&quot; बताया गया है।
              </p>

              <p className="font-serif">
                पहला संदर्भ बताता है कि भगवान राम ने लक्ष्मण से कहा:
                &quot;हे सुमित्रानंदन, तुम्हारे दो पुत्र अंगद और चन्द्रकेतु गुणी और सक्षम हैं;
                मैं उन्हें उनके-अपने-अपने राज्यों का शासक बनाऊँगा।&quot;
              </p>

              <p className="font-serif mx-5 md:mx-10">
                <em>
                  &quot;ततः सुमित्रानन्दनौ पुत्रौ तव लङ्क्ष्मण । <br />
                  अङ्गदं चन्द्रकेतुं च राज्ये स्थापयिता अहम् ॥&quot;
                </em>
              </p>

              <p className="font-serif mt-4">
                दूसरा संदर्भ बताता है कि मल्ल्यदेश में,
                ये दोनों वीर — रघुश्रेष्ठों में श्रेष्ठ —
                एक सुंदर नगर चन्द्रकान्ति का निर्माण करते हैं,
                जो देवताओं (लोकपालों) के नगर के समान था।
              </p>

              <p className="font-serif mx-5 md:mx-10">
                <em>
                  &quot;मल्यदेशे च तौ वीरौ चन्द्रकान्तीनगरीं शुभाम् । <br />
                  निरमात् स रघुश्रेष्ठो लोकपालपुरोपमाम् ॥&quot;
                </em>
              </p>
            </div>
          )}

          {/* right Image */}
          <div className="md:col-span-1">
            <div className="border border-gray-300 p-3 flex flex-col items-center">

              <div className="flex flex-wrap justify-center gap-2">
                <Image
                  src="/assets/img/mallMahajanpada/mahabharat1-sabha-parva1.png"
                  alt="mahabharat-img"
                  width={200}
                  height={120}
                  className="cursor-pointer w-full sm:w-[180px] md:w-[200px]"
                  onClick={() =>
                    openModal({
                      url: "/assets/img/mallMahajanpada/mahabharat1-sabha-parva1.png",
                    })
                  }
                />

                <Image
                  src="/assets/img/mallMahajanpada/mahabharat1-sabha-parva2.png"
                  alt="mahabharat-img"
                  width={200}
                  height={120}
                  className="cursor-pointer w-full sm:w-[180px] md:w-[200px]"
                  onClick={() =>
                    openModal({
                      url: "/assets/img/mallMahajanpada/mahabharat1-sabha-parva2.png",
                    })
                  }
                />

                <Image
                  src="/assets/img/mallMahajanpada/mahabharat1-bhisma-parva1.png"
                  alt="mahabharat-img"
                  width={200}
                  height={120}
                  className="cursor-pointer w-full sm:w-[180px] md:w-[200px]"
                  onClick={() =>
                    openModal({
                      url: "/assets/img/mallMahajanpada/mahabharat1-bhisma-parva1.png",
                    })
                  }
                />
              </div>

              <p className="text-center mt-3 text-sm md:text-base">
                {language === "english"
                  ? "Mention of Kings of Mallas in Mahabharat"
                  : "महाभारत में मल्लों के राजाओं का उल्लेख"}
              </p>

            </div>
          </div>
        </div>

        {/* Buddha Period */}
        <div className="flex items-center gap-4 my-5">
          <div className="h-px flex-grow bg-gray-300"></div>
          <span className="text-gray-500 text-2xl whitespace-nowrap">
            {language === "english" ? "BUDDHA PERIOD" : "बुद्ध काल"}
          </span>
          <div className="h-px flex-grow bg-gray-300"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Image */}
          <div className="md:col-span-1 ">
            <Image
              src="/assets/img/mallMahajanpada/ganaSanghas.jpg"
              alt="mall-mahajanpada-img"
              width={600}
              height={400}
              className="rounded-lg shadow-lg border-3 border-gray-300 cursor-pointer"
              onClick={() =>
                openModal({
                  url: "/assets/img/mallMahajanpada/ganaSanghas.jpg",
                  estate: "Mall Mahajanpada",
                  estateHindi: "मल्ल महाजनपद",
                })
              }
            />
            <div className="flex items-center justify-center">
              <h2>
                {language === "english"
                  ? "Mall Mahajanpada"
                  : "मल्ल महाजनपद"}
              </h2>
            </div>
            <Image
              src="/assets/img/mallMahajanpada/King_of_the_Mallas_under_siege.jpg"
              alt="mall-mahajanpada-img"
              width={600}
              height={400}
              className="rounded-lg shadow-lg border-3 border-gray-300 cursor-pointer"
              onClick={() =>
                openModal({
                  url: "/assets/img/mallMahajanpada/King_of_the_Mallas_under_siege.jpg",
                  estate: "King of the Mallas under siege",
                  estateHindi: "मल्ल महाजनपद",
                })
              }
            />
            <div className="flex items-center justify-center">
              <h2>
                {language === "english"
                  ? "King of the Mallas under siege"
                  : "मल्ल महाजनपद"}
              </h2>
            </div>
          </div>

          {/* Bio */}
          {language === "english" ? (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                Malla (Prakrit: 𑀫𑀮𑁆𑀮𑀈 Mallaī; Pali: Malla; Sanskrit: मल्ल​ Malla) was an ancient Indo-Aryan tribe of north-eastern South Asia whose existence is attested during the Iron Age. The population of Malla, the Mallakas, were divided into two branches, each organised into a gaṇasaṅgha (an aristocratic oligarchic republic), presently referred to as the Malla Republics, which were part of the larger Vajjika League.
                The Mallakas lived in the region now covered by the Kushinagar district in India, although their precise borders are yet to be determined. The Mallakas&#39; neighbours to the east across the Sadānirā river were the Licchavikas, their neighbours to the west were the Sakyas, Koliyas, Moriyas, and Kauśalyas, the southern neighbours of the Mallakas were the Kālāmas and the Gaṅgā river, and the northern Mallaka borders were the Himālaya mountains. The territory of the Mallakas was a tract of land between the Vaidehas and the Kauśalyas.
              </p>
              <p className="font-serif">
                The territories of the two Malla republics were divided by the river named Hiraññavatī in Pāli, and Hiraṇyavatī in Sanskrit, and the two Malla republics respectively had their capitals at Kusinārā, identified with the modern village of Kāsiā in Kushinagar, and at Pāvā (now known as Fazilnagar). Kusinārā was close to the Sakya capital of Kapilavatthu to its north-east, and Pāvā was close to the Licchavika capital of Vesālī.
                The Mallakas are called Malla in Pāli texts, Mallai in Jain Prākrit texts, and Malla in Sanskrit texts.
                The Mallakas were an Indo-Aryan tribe in the eastern Gangetic plain in the Greater Magadha cultural region. Similarly to the other populations of the Greater Magadha cultural area, Mallakas were initially not fully Brahmanised despite being an Indo-Aryan people, but, like the Vaidehas, they later became Brahmanised and adopted the Vāseṭṭha (in Pali) or Vaśiṣṭha (in Sanskrit) gotra. At some point in time, the Mallakas became divided into two separate republics with their respective capitals at Kusinārā and Pāvā, possibly due to internal trouble, and henceforth the relations between the two Mallaka republics remained uncordial. Both Mallaka republics nevertheless became members of the Licchavi-led Vajjika League, within which, unlike the Vaidehas, they maintained their own sovereign rights because they had not been conquered by the Licchavikas, and the Mallakas held friendly relations with the Licchavikas, the Vaidehas, and the Nāyikas who were the other members of this league.
              </p>
              <p className="font-serif">
                However occasional tensions between the Mallakas and the Licchavikas did arise, such as in the case of the man named Bandhula, a Mallaka who, thanks to his education received in Takṣaśilā, had offered his services as a general to the Kauśalya king Pasenadi so as to maintain the good relations between the Mallakas and Kosala. Bandhula, along with his wife Mallikā, violated the Abhiseka-Pokkharaṇī sacred tank of the Licchavikas, which resulted in armed hostilities between the Kauśalyas and the Licchavikas. Bandhula was later treacherously murdered along with his sons by Pasenadi, and, in retaliation, some Mallakas helped Pasenadi&#39;s son Viḍūḍabha usurp the throne of Kosala to avenge the death of Bandhula, after which Pasenadi fled from Kosala and died in front of the gates of the Māgadhī capital of Rājagaha.
                The Buddha arrived in Pāvā shortly after the Mallakas there had inaugurated their new santhāgāra, which they had named Ubbhataka. From Pāvā, the Buddha and his followers went to Kusinārā, and on the way they crossed two rivers, the first one being named Kakutthā in Pali and Kukustā in Sanskrit, and the second one being the Hiraññavatī which separated the two Mallaka republics. The Buddha spent his final days in the Malla republic of Kusinārā, and when he sent Ānanda to inform the Mallakas of Kusinārā of his impending death, Ānanda found the Mallaka Council holding a meeting about public affairs in their santhāgāra.
                When Ānanda went again to the Mallakas of Kusinārā to inform them of the Buddha&#39;s passing, he found them this time holding a meeting to discuss the funeral ceremony of the Buddha in the santhāgāra. After the Buddha&#39;s cremation, his remains were honoured in the santhāgāra of Kusinārā for seven days, and it was in this santhāgāra that the Mallakas of Kusinārā received the envoys of Magadha, Licchavi, Shakya, Buli, Koliya, the Mallakas of Pāvā, and Moriya, who all went to Kusinārā to claim their shares of the Buddha&#39;s relics. The Licchavikas, the Mallakas, and the Sakyas were able to claim shares of the relics, but the other members of the Vajjika League, the Vaidehas and the Nāyikas, were not among the states claiming a share because they were dependencies of the Licchavikas without their own sovereignty, and therefore could not put forth their own claim while Licchavi could. The Mallakas of Pāvā were the first ones to arrive with an army to Kusinārā, and they put forth their claim to the relics in rude and hostile terms. In the end, each Malla republic obtained a share of the Buddha&#39;s relics and built their own stūpas and gave their own feasts to commemorate this event.
                After the death of the 24th Jain Tīrthaṅkara, Mahāvīra, the Mallakas and the Licchavikas jointly instituted a festival of lights to commemorate his passing.
              </p>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                मल्ल (प्राकृत: 𑀫𑀮𑁆𑀮𑀈 मल्लई; पालि: मल्ल; संस्कृत: मल्ल) उत्तर–पूर्वी दक्षिण एशिया की एक प्राचीन इंडो-आर्य जनजाति थी, जिसका अस्तित्व लौह युग के दौरान प्रमाणित होता है। मल्ल जनजाति के लोग मल्लक कहलाते थे। ये दो शाखाओं में विभक्त थे और प्रत्येक शाखा एक-एक गणसंघ (कुलीनतंत्रीय गणराज्य) के रूप में संगठित थी। इन्हें सामूहिक रूप से मल्ल गणराज्य कहा जाता है, जो व्यापक वज्जिका संघ का हिस्सा थे।

                मल्लक वर्तमान भारत के कुशीनगर ज़िले के क्षेत्र में निवास करते थे, हालांकि उनकी सटीक सीमाएँ अभी तक निश्चित नहीं की जा सकी हैं। सदानीरा नदी के पार पूर्व दिशा में उनके पड़ोसी लिच्छविक थे। पश्चिम में उनके पड़ोसी शाक्य, कोलिय, मोरिय और कौशल्य थे। मल्लकों के दक्षिण में कालाम जनपद तथा गंगा नदी स्थित थी, जबकि उत्तर में उनकी सीमा हिमालय पर्वत से लगती थी। मल्लकों का क्षेत्र विदेह और कौशल के बीच स्थित भू-भाग में फैला हुआ था।
              </p>
              <p className="font-serif">
                दोनों मल्ल गणराज्यों के क्षेत्र पालि में हिरञ्ञवती तथा संस्कृत में हिरण्यवती नामक नदी द्वारा विभाजित थे। इन दोनों मल्ल गणराज्यों की राजधानियाँ क्रमशः कुशीनारा और पावा थीं। कुशीनारा की पहचान वर्तमान कुशीनगर ज़िले के कसिया गाँव से की जाती है, जबकि पावा को आज फाज़िलनगर के नाम से जाना जाता है। कुशीनारा अपने उत्तर–पूर्व में स्थित शाक्य राजधानी कपिलवत्तु के निकट था, और पावा लिच्छविकों की राजधानी वैशाली के समीप स्थित था।

                पालि ग्रंथों में मल्लकों को मल्ल, जैन प्राकृत ग्रंथों में मल्लई, तथा संस्कृत ग्रंथों में मल्ल कहा गया है।

                मल्लक व्यापक मगध सांस्कृतिक क्षेत्र के अंतर्गत आने वाले पूर्वी गंगा मैदान की एक इंडो-आर्य जनजाति थे। व्यापक मगध क्षेत्र की अन्य जनसंख्याओं की तरह, इंडो-आर्य होने के बावजूद प्रारंभ में मल्लक पूर्णतः ब्राह्मणीकरण से प्रभावित नहीं थे। किंतु बाद में, विदेहों की भाँति, वे ब्राह्मणीकरण की प्रक्रिया से गुज़रे और उन्होंने वासेट्ठ (पालि) अथवा वशिष्ठ (संस्कृत) गोत्र को अपनाया।

                किसी समय मल्लक आंतरिक कारणों से दो पृथक गणराज्यों—कुशीनारा और पावा—में विभाजित हो गए, जिसके बाद दोनों मल्ल गणराज्यों के बीच संबंध सौहार्दपूर्ण नहीं रहे। इसके बावजूद, दोनों मल्ल गणराज्य लिच्छवियों के नेतृत्व वाले वज्जिका संघ के सदस्य बने। इस संघ के भीतर, विदेहों के विपरीत, मल्लकों ने अपने संप्रभु अधिकार बनाए रखे, क्योंकि वे लिच्छवियों द्वारा पराजित नहीं किए गए थे। मल्लकों के लिच्छविकों, विदेहों तथा नायिकों (जो इस संघ के अन्य सदस्य थे) के साथ मैत्रीपूर्ण संबंध बने रहे।
              </p>
              <p className="font-serif">
                हालाँकि मल्लकों और लिच्छविकों के बीच कभी-कभी तनाव उत्पन्न हो जाता था। इसका एक उदाहरण बंधुल नामक व्यक्ति का है, जो एक मल्लक था और जिसने तक्षशिला में शिक्षा प्राप्त की थी। मल्लकों और कौशल के बीच अच्छे संबंध बनाए रखने के उद्देश्य से उसने कौशल नरेश प्रसेनजित (पसेनदि) के यहाँ सेनापति के रूप में अपनी सेवाएँ प्रदान की थीं। बंधुल ने अपनी पत्नी मल्लिका के साथ लिच्छविकों के पवित्र जलाशय अभिषेक-पोखरणी का उल्लंघन किया, जिसके परिणामस्वरूप कौशल और लिच्छविकों के बीच सशस्त्र संघर्ष आरंभ हो गया। बाद में प्रसेनजित ने छलपूर्वक बंधुल तथा उसके पुत्रों की हत्या करवा दी। इसके प्रतिशोधस्वरूप कुछ मल्लकों ने प्रसेनजित के पुत्र विडूडभ (विदूड़भ) को कौशल का सिंहासन हथियाने में सहायता की, ताकि बंधुल की मृत्यु का बदला लिया जा सके। इसके बाद प्रसेनजित कौशल से भाग गया और मगध की राजधानी राजगृह के द्वार पर उसकी मृत्यु हो गई।

                मल्लकों द्वारा अपने नए संथागार (सभा-भवन), जिसका नाम उब्भट्ठक रखा गया था, के उद्घाटन के कुछ समय बाद ही बुद्ध पावा पहुँचे। पावा से बुद्ध अपने अनुयायियों के साथ कुशीनारा गए। मार्ग में उन्होंने दो नदियाँ पार कीं—पहली का नाम पालि में ककुत्था और संस्कृत में कुकुस्ता था, तथा दूसरी हिरञ्ञवती नदी थी, जो दोनों मल्ल गणराज्यों की सीमा बनाती थी। बुद्ध ने अपने अंतिम दिन कुशीनारा के मल्ल गणराज्य में बिताए। जब उन्होंने अपने आसन्न महापरिनिर्वाण की सूचना देने के लिए आनंद को कुशीनारा के मल्लकों के पास भेजा, तब आनंद ने मल्ल परिषद् को उनके संथागार में सार्वजनिक कार्यों पर विचार-विमर्श करते हुए पाया।

                बुद्ध के महापरिनिर्वाण की सूचना देने के लिए जब आनंद पुनः कुशीनारा के मल्लकों के पास गया, तब उसने उन्हें संथागार में बुद्ध के अंतिम संस्कार की व्यवस्था पर चर्चा करते हुए पाया। बुद्ध के दाह-संस्कार के बाद उनके अवशेषों को सात दिनों तक कुशीनारा के संथागार में सम्मानपूर्वक रखा गया। इसी संथागार में कुशीनारा के मल्लकों ने मगध, लिच्छवि, शाक्य, बुलि, कोलिय, पावा के मल्लक तथा मोरिय राज्यों से आए दूतों का स्वागत किया, जो सभी बुद्ध के अवशेषों में से अपना-अपना हिस्सा माँगने के लिए कुशीनारा पहुँचे थे।

                लिच्छविक, मल्लक और शाक्य अपने-अपने हिस्से का दावा करने में सफल रहे, किंतु वज्जिका संघ के अन्य सदस्य—विदेह और नायिक—अपने-अपने दावे प्रस्तुत नहीं कर सके, क्योंकि वे लिच्छविकों के अधीन थे और उनके पास स्वतंत्र संप्रभुता नहीं थी। पावा के मल्लक सबसे पहले सेना के साथ कुशीनारा पहुँचे और उन्होंने अवशेषों पर अपना दावा कठोर तथा शत्रुतापूर्ण शब्दों में प्रस्तुत किया। अंततः दोनों मल्ल गणराज्यों को बुद्ध के अवशेषों में से हिस्सा प्राप्त हुआ। उन्होंने अपने-अपने स्तूप बनवाए और इस स्मरणीय घटना के उपलक्ष्य में अपने-अपने भोजों का आयोजन किया।

                चौबीसवें जैन तीर्थंकर महावीर के निर्वाण के बाद मल्लकों और लिच्छविकों ने संयुक्त रूप से उनके स्मरण में दीपोत्सव (प्रकाशोत्सव) की परंपरा की स्थापना की।
              </p>

            </div>
          )}
        </div>

        {/* Majhauli Estate */}
        <div className="flex items-center gap-4 my-5">
          <div className="h-px flex-grow bg-gray-300"></div>
          <span className="text-gray-500 text-2xl whitespace-nowrap">
            {language === "english" ? "MAJHAULI ESTATE" : "मझौली रियासत"}
          </span>
          <div className="h-px flex-grow bg-gray-300"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 my-3">
          {/* Bio */}
          {language === "english" ? (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                Majhauli Raj was the seat of an eponymous Bisen/Visen feudal
                estate known as the Majhauli Raj, which is said to have been
                founded around 1100 to 1300 CE. King Vishwa Sen (Estimated
                Around 1000 to 1200 BCE), one of the sole king of Malla Desh or
                Malla Bhumi or Malla Rastra (Later known as Malla Mahajanpada),
                had ruled prior to Mahajanpad Era from Kushinagar as capital of
                eastern Koshala.Later one of descendant of King Vishwa Sen
                (i.e.most probably 86th generation) King Bhim Malla went to
                conquer the pargana of Salempur, Uttar Pradesh and Majhauli,
                where he founded a fort and established the Majhauli Raj around
                1100 to 1300 CE.
              </p>
              <p className="font-serif">
                As the kings of Majhauli Raj were descendants of King Vishwasen
                of Malla Mahajanpad, they stills put this name as a surname i.e.
                Vishen/Bisen short form of Vishwasen in their names. They are
                Suryavanshi Rajput and claim to be sons of God Laxmana from his
                one of the sons Chandraketu (had got title Malla for being
                extraordinary wrestler or fighter of that time) who was ruler of
                Malla Rastra or Malla Mahajanpada in ancient India. Later many
                kings who were of Majhauli Kingdom established many estates of
                names Manakpur (Estate), Bhadri (Estate), Raja Madhav Mall
                (Madhuban), Kalakankar (Estate) and many more in North India.
              </p>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                मझौली राज एक बिसेन (या विसेन) सामंतवादी रियासत का मुख्य केंद्र
                था, जिसकी स्थापना लगभग 1100 से 1300 ईस्वी के बीच मानी जाती है।
                राजा विश्वसेन (अनुमानित काल: 1000 से 1200 ईसा पूर्व) मल्ल देश
                (जिसे मल्ल भूमि या मल्ल राष्ट्र कहा जाता है, बाद में मल्ल
                महाजनपद) के एकमात्र प्रमुख शासकों में से एक थे। उन्होंने महाजनपद
                युग से पूर्व कुशीनगर (पूर्वी कोशल की राजधानी) से शासन किया था।
                बाद में उनके एक वंशज (संभवत: 86वीं पीढ़ी में) राजा भीम मल्ल ने
                उत्तर प्रदेश के सलेमपुर परगना और मझौली को जीत लिया, जहाँ
                उन्होंने एक किला बनवाया और लगभग 1100 से 1300 ईस्वी के बीच मझौली
                राज की स्थापना की।
              </p>
              <p className="font-serif">
                चूंकि मझौली राज के राजा मल्ल महाजनपद के राजा विश्वसेन के वंशज
                थे, इसलिए वे आज भी अपने नाम के साथ विश्वेन/बिसेन (जो कि विश्वसेन
                का संक्षिप्त रूप है) उपनाम का प्रयोग करते हैं। वे सूर्यवंशी
                राजपूत माने जाते हैं और स्वयं को भगवान लक्ष्मण के पुत्र
                चंद्रकेतु (जिन्हें उस समय की कुश्ती और युद्ध-कला में प्रवीण होने
                के कारण मल्ल की उपाधि मिली थी) की संतान मानते हैं। बाद में मझौली
                राज के कई राजाओं ने भारत के उत्तरी भागों में कई रियासतों की
                स्थापना की जैसे — मनकापुर (एस्टेट), भदरी (एस्टेट), राजा माधव
                मल्ल (मधुबन), कालाकांकर (एस्टेट) आदि।
              </p>
            </div>
          )}

          {/* right Image */}
          <div className="md:col-span-1">
            <Image
              src="/assets/img/majhauli/majhauliraj13.jpg"
              alt="madhuban-img"
              width={600}
              height={400}
              className="rounded-lg shadow-lg border-3 border-gray-300 cursor-pointer"
              onClick={() =>
                openModal({
                  url: "/assets/img/majhauli/majhauliraj13.jpg",
                  estate: "Majhauli Fort Entrance",
                  estateHindi: "मझौली किला प्रवेशद्वार",
                })
              }
            />
            <div className="flex items-center justify-center">
              <h2>
                {language === "english"
                  ? "Majhauli Fort Entrance"
                  : "मझौली किला प्रवेशद्वार"}
              </h2>
            </div>
            {/* <div className="border-1 border-gray-300 p-2 flex flex-col items-center">
                    <div className="flex flex-col md:flex-row justify-center">
                      <Image
                        src="/assets/img/majhauli/majhauliraj13.jpg"
                        alt="majhauli-img"
                        width={200}
                        height={50}
                        className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                        onClick={() =>
                          openModal({ url: "/assets/img/majhauli/majhauliraj13.jpg" })
                        }
                      />
                    </div>

                    <p>
                      {language === "english"
                        ? "Majhauli Fort Entrance"
                        : "मझौली किला प्रवेशद्वार"}
                    </p>
                  </div> */}
          </div>
        </div>

        {/* Madhuban Zamindari */}
        <div className="flex items-center gap-4 my-5">
          <div className="h-px flex-grow bg-gray-300"></div>
          <span className="text-gray-500 text-2xl whitespace-nowrap">
            {language === "english" ? "MADHUBAN ZAMINDARI" : "बुद्ध काल"}
          </span>
          <div className="h-px flex-grow bg-gray-300"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Image */}
          <div className="md:col-span-1 ">
            <Image
              src="/assets/img/madhuban/madhuban1.jpg"
              alt="madhuban-img"
              width={600}
              height={400}
              className="rounded-lg shadow-lg border-3 border-gray-300 cursor-pointer"
              onClick={() =>
                openModal({
                  url: "/assets/img/madhuban/madhuban1.jpg",
                  estate: "Ruins of Raja Fateh Bahadur Mall's Haveli",
                  estateHindi: "राजा फतेह बहादुर मल्ल की हवेली के अवशेष",
                })
              }
            />
            <div className="flex items-center justify-center">
              <h2>
                {language === "english"
                  ? "Ruins of Raja Fateh Bahadur Mall's Haveli"
                  : "राजा फतेह बहादुर मल्ल की हवेली के अवशेष"}
              </h2>
            </div>
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14323.669579911992!2d83.67328034658887!3d26.1668195922816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39922eb427a6b111%3A0x15404933bf53d77f!2sMadhuban%2C%20Uttar%20Pradesh%20221603!5e0!3m2!1sen!2sin!4v1753207345187!5m2!1sen!2sin"
              width="100%"
              height="300"
              className="w-full rounded-md border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <br />

            <div className="md:col-span-1">
              <div className="border-1 border-gray-300 p-2 flex flex-col items-center">
                <div className="flex flex-col md:flex-row justify-center">
                  <Image
                    src="/assets/img/madhuban/proof2.jpg"
                    alt="madhuban-img"
                    width={200}
                    height={50}
                    className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                    onClick={() =>
                      openModal({
                        url: "/assets/img/madhuban/proof2.jpg",
                        // estate: "(Page 1)",
                        // estateHindi: "(पृष्ठ 1)",
                      })
                    }
                  />
                </div>
                <p>
                  {language === "english"
                    ? "Mention of Raja Madhav Mall in Visen Vansh Vatika"
                    : "विसेन वंश वाटिका में राजा माधव मल्ल का उल्लेख मिलता है।"}
                </p>
              </div>
            </div>

          </div>

          {/* Bio */}
          {language === "english" ? (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                Raja Madhav Mall was a prominent Rajput ruler from the Vishen
                (also called Bisen) dynasty, historically linked to the Majhauli
                Raj estate in eastern Uttar Pradesh. He was the second son of
                Raja Dev Mall, the 95th ruler of the Majhauli line.
              </p>
              <p className="font-serif">
                In the mid-16th century, Raja Madhav Mall established the region
                known as Madhuban/Mallān (in present-day Mau district, Uttar Pradesh),
                which became an influential settlement for his descendants. This
                area is now the Madhuban tehsil, comprising numerous villages
                and a significant population.
              </p>
              <p className="font-serif">
                Raja Madhav Mall had two sons: Raja Nath Mall and Raja Ajay
                Bahadur Mall (also known as Fateh Bahadur Mall). Their
                descendants took on the surname &quot;Mall&quot;, and many settled across
                eastern UP — especially in Madhuban, Mau, Gorakhpur and Deoria,
                and villages like Hasanpur, Bahrampur, Jajoli, Ahirauli, and
                Parshurampur. The villages these descendants resides are
              </p>
              <p className="font-serif">
                Lakhnaur, Jaauli-Kothgharana, Bhelurr, Ufrauli, Lakuragram,
                Karanpura, Jogiya(Gorakhpur), Poti, Khirikhot, Gangeveer,
                Nevada, Nathupur, Usari, Ahirauli, Laalanpur, Bahrampur.
              </p>
              <p className="font-serif font-bold">
                <strong>
                  <em> Debunked Myth (due to lack of evidence) written by Lal Khadag Bahadur Mall</em>
                </strong>
              </p>
              <div className="relative p-6 bg-white font-serif">
                {/* Debunked Watermark */}
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   text-gray-600 text-5xl font-bold opacity-20 select-none pointer-events-none 
                   rotate-[-45deg]">
                  DEBUNKED
                </span>

                {/* Main content */}
                <p className="font-serif leading-relaxed text-base">
                  Lal Khadag Bahadur Mall, in his book
                  <span className="font-bold"><em>&quot;Vishen Vansh Vatika&quot;</em></span> (written in 1887 AD),
                  mentioned Maharaja Madhav Mall but did not include his sons,
                  Raja Nath Bahadur Mall and Babu Fateh Bahadur Mall.
                  He described the Malls of Madhuban as descendants of Mayyur Bhat through his Kurmi wife.
                  He also noted that Raja Nath Mall, mentioned in
                  <em>&quot;Turk-e-Jahangiri&quot;</em>, was mistakenly referred to as Raja Bhim Mall
                  due to a translation error caused by the misplacement of a single dot.
                </p>


                <div className="mt-6 mb-6 text-center border-1 border-[#eee]">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-6">
                    <div className="flex flex-col items-center">
                      <p className="text-lg font-semibold">Raja Nath Mall</p>
                      <p className="text-3xl mt-2">راجا ناتھ ملّ</p>
                    </div>

                    <div className="hidden md:block w-px h-16 bg-gray-300 opacity-50"></div>

                    <div className="flex flex-col items-center">
                      <p className="text-lg font-semibold">Raja Bhim Mall</p>
                      <p className="text-3xl mt-2">راجا بھیم ملّ</p>
                    </div>
                  </div>
                  <p>
                    There is a significant difference in the way their names are written in Persian.
                  </p>
                </div>

                <p className="font-serif leading-relaxed text-base">
                  However, since Raja Nath Mall is mentioned thrice in
                  <em>&quot;Turk-e-Jahangiri&quot;</em>, the claim that the name Raja Bhim Mall was a misprint is not valid.
                  Furthermore, this myth was criticized by several historians and kshatriyas of that time
                  and was later debunked. It was also perpetuated by the British in their census records.
                </p>
              </div>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                राजा माधव मल्ल एक प्रमुख राजपूत शासक थे, जो विशेन (या बीसेन) वंश
                से संबंधित थे और उनका ऐतिहासिक संबंध उत्तर प्रदेश के पूर्वी भाग
                में स्थित मझौली राज रियासत से था। वे राजा देव मल्ल के द्वितीय
                पुत्र थे, जो मझौली वंश के 95वें शासक माने जाते हैं।
              </p>
              <p className="font-serif">
                16वीं शताब्दी के मध्य में, राजा माधव मल्ल ने मधुबन नामक क्षेत्र
                की स्थापना की (जो वर्तमान में उत्तर प्रदेश के मऊ ज़िले में स्थित
                है)। यह क्षेत्र उनके वंशजों के लिए एक प्रभावशाली बस्ती बन गया और
                आज यह मधुबन तहसील के रूप में जाना जाता है, जिसमें अनेक गाँव और
                बड़ी जनसंख्या शामिल है।
              </p>
              <p className="font-serif">
                राजा माधव मल्ल के दो पुत्र थे: राजा नत्थ मल्ल और राजा अजय बहादुर
                मल्ल (जिन्हें फतेह बहादुर मल्ल के नाम से भी जाना जाता है)। इनके
                वंशजों ने &quot;मल्ल&quot; उपनाम को अपनाया और वे पूर्वी उत्तर प्रदेश के
                विभिन्न क्षेत्रों में बस गए — विशेष रूप से मधुबन, मऊ, गोरखपुर,
                देवरिया और हसनपुर, बहारामपुर, जाजौली, अहरौली और परशुरामपुर जैसे
                गाँवों में।
              </p>
              <p className="font-serif font-bold">
                <strong>
                  <em>लाल खड़ग बहादुर मल्ल द्वारा लिखा गया (प्रमाणों के अभाव में) खंडित मिथक</em>
                </strong>
              </p>
              <div className="relative p-6 bg-white font-serif">
                {/* Debunked Watermark */}
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   text-gray-600 text-5xl font-bold opacity-20 select-none pointer-events-none 
                   rotate-[-45deg]">
                  खण्डित मिथक
                </span>

                {/* Main content */}
                <p className="font-serif leading-relaxed text-base">
                  लाल खड़ग बहादुर मल्ल ने अपनी पुस्तक
                  <span className="font-bold"><em>&quot;विषेण वंश वाटिका&quot;</em></span> (सन् 1887 ईस्वी में लिखी गई) में
                  महाराजा माधव मल्ल का उल्लेख किया है,
                  लेकिन उनके पुत्रों राजा नत्थ बहादुर मल्ल और बाबू फतेह बहादुर मल्ल का नाम नहीं दिया।
                  उन्होंने मधुबन के मल्लों को मयूर भट्ट और उनकी कुर्मी पत्नी से उत्पन्न वंशज बताया।
                  उन्होंने यह भी उल्लेख किया कि
                  <em>&quot;तुर्क-ए-जहांगीरी&quot;</em> में वर्णित राजा नत्थ मल्ल को अनुवाद की एक त्रुटि के कारण
                  राजा भीम मल्ल लिखा गया, जो केवल एक बिंदु की गलत स्थिति के कारण हुआ था।
                </p>

                <div className="mt-6 mb-6 text-center border border-[#eee] rounded-md">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-6">
                    <div className="flex flex-col items-center">
                      <p className="text-lg font-semibold">राजा नत्थ मल्ल</p>
                      <p className="text-3xl mt-2">راجا ناتھ ملّ</p>
                    </div>

                    <div className="hidden md:block w-px h-16 bg-gray-300 opacity-50"></div>

                    <div className="flex flex-col items-center">
                      <p className="text-lg font-semibold">राजा भीम मल्ल</p>
                      <p className="text-3xl mt-2">راجا بھیم ملّ</p>
                    </div>
                  </div>

                  <p className="font-serif text-base pb-4">
                    फारसी (पर्शियन) भाषा में उनके नामों के लिखने के तरीके में स्पष्ट अंतर दिखाई देता है।
                  </p>
                </div>

                <p className="font-serif leading-relaxed text-base">
                  हालांकि, चूंकि <em>&quot;तुर्क-ए-जहांगीरी&quot;</em> में राजा नत्थ मल्ल का उल्लेख तीन बार मिलता है,
                  इसलिए यह दावा कि &quot;राजा भीम मल्ल&quot; नाम छपाई की गलती थी — सही नहीं है।
                  इस मिथक की उस समय कई इतिहासकारों और क्षत्रिय राजाओं ने आलोचना की थी,
                  और बाद में इसे असत्य घोषित कर खारिज कर दिया गया।
                  यह भ्रम ब्रिटिश जनगणना अभिलेखों में भी आगे चलकर दोहराया गया।
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Mughal Period */}
        <div className="flex items-center gap-4 my-5">
          <div className="h-px flex-grow bg-gray-300"></div>
          <span className="text-gray-500 text-2xl whitespace-nowrap">
            {language === "english" ? "MUGHAL PERIOD" : "मुग़ल काल"}
          </span>
          <div className="h-px flex-grow bg-gray-300"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 my-3">
          {/* left Image */}
          <div className="md:col-span-1">
            <div className="border-1 border-gray-300 p-2 flex flex-col items-center">
              <div className="flex flex-col md:flex-row justify-center">
                <Image
                  src="/assets/img/majhauli/proof3.png"
                  alt="majhauli-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({
                      url: "/assets/img/majhauli/proof3.png",
                      // estate: "(Page 1)",
                      // estateHindi: "(पृष्ठ 1)",
                    })
                  }
                />
                <Image
                  src="/assets/img/majhauli/proof4.png"
                  alt="majhauli-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({
                      url: "/assets/img/majhauli/proof4.png",
                      // estate: "(Page 2)",
                      // estateHindi: "(पृष्ठ 2)",
                    })
                  }
                />
              </div>

              <p>
                {language === "english"
                  ? "Mention of Raja Nath Mall of Majhauli in Tuzuk-i-Jahangiri"
                  : "तुझुक-ए-जहांगीरी में मझौली के राजा नत्थ मल्ल का उल्लेख मिलता है।"}
              </p>
            </div>
          </div>

          {/* Bio */}
          {language === "english" ? (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                The first written record of any king of Majhauli appears in the
                <strong>
                  <em> Tuzuk-i-Jahangiri </em>
                </strong>
                , where Raja Nath Mall is mentioned twice, with a gap of ten
                years between the two references. The first mention is dated the
                21st of second Jumada(corresponding to 14th October, 1606), and
                the second appears on the 5th of Amurdad (corresponding to 25th
                July, 1615).
              </p>
              {/* october, 1606 // 25 July */}
              <p className="font-serif">
                The first reference appears on the page titled
                <strong> Remarkable Letter of Aziz Koka</strong>, where it
                states:
              </p>
              <p className="font-serif mx-5 md:mx-10">
                <em>
                  &quot;I gave 5,000 rupees to Nathu Mal(?), Raja of
                  Manjholi.&quot;
                </em>
              </p>
              <p className="font-serif mt-4">
                The second reference appears on the page titled
                <strong> Hindu Raja Turns Musulman</strong>, where it states:
              </p>
              <p className="font-serif mx-5 md:mx-10">
                <em>
                  &quot;On the 5th Amurdad, to the mansab of Raja Nathmal, which
                  was 1,500 personal and 1,100 horse, an addition of 500
                  personal and 100 horse was made.&quot;
                </em>
              </p>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                मझौली के किसी भी राजा का पहला लिखित उल्लेख
                <strong>
                  <em> तुजुक-ए-जहाँगीरी &nbsp;</em>
                </strong>
                में मिलता है, जहाँ राजा नत्थ मल का दो बार उल्लेख हुआ है — दोनों
                के बीच दस वर्षों का अंतर है। पहला उल्लेख दूसरी जमादि (22वीं
                तारीख) के दिनांक (14 अक्टूबर, 1606) का है, और दूसरा अमुर्दाद की
                5वीं तारीख (25 जुलाई, 1615) का है।
              </p>
              <p className="font-serif">
                पहला उल्लेख
                <strong> अज़ीज़ कोका का उल्लेखनीय पत्र </strong>
                शीर्षक वाले पृष्ठ पर मिलता है, जहाँ लिखा है:
              </p>
              <p className="font-serif mx-5 md:mx-10">
                <em>
                  &quot;मैंने नत्थू मल(?), मंझोली के राजा को 5,000 रुपये
                  दिए।&quot;
                </em>
              </p>
              <p className="font-serif mt-4">
                दूसरा उल्लेख
                <strong> हिंदू राजा मुसलमान बना </strong>
                शीर्षक वाले पृष्ठ पर मिलता है, जहाँ लिखा है:
              </p>
              <p className="font-serif mx-5 md:mx-10">
                <em>
                  &quot;5वीं अमुर्दाद को, राजा नत्थमल की मनसबदारी जो 1,500
                  व्यक्तिगत और 1,100 घुड़सवार थी, उसमें 500 व्यक्तिगत और 100
                  घुड़सवार की वृद्धि की गई।&quot;
                </em>
              </p>
            </div>
          )}
        </div>

        {/* Battle of Tonsa */}
        <div className="flex items-center gap-4 my-5">
          <div className="h-px flex-grow bg-gray-300"></div>
          <span className="text-gray-500 text-2xl whitespace-nowrap">
            {language === "english" ? "BATTLE OF TONSA" : "जंग-ए-टौंस"}
          </span>
          <div className="h-px flex-grow bg-gray-300"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 my-3">
          {/* Bio */}
          {language === "english" ? (
            <>
              <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
                <p className="font-serif">
                  The Battle of Jang-e-Tauns, fought in the early 17th century, was a decisive
                  conflict in the region of present-day Mau district. Raja Natth Bahadur Mall
                  Vishen of Natthupur and his brother Babu Ajay Bahadur Mall Vishen displayed
                  exceptional skill in warfare. Together, they defeated Prince Khurram Khan,
                  the future Mughal emperor, and magnanimously spared his life. In recognition
                  of his valor in this victory, Babu Ajay Bahadur Mall was honored with the
                  title &quot;Fatah Bahadur Mall.&quot; Years later, after Emperor Jahangir&apos;s death on
                  6 February 1628, Khurram Khan ascended the Mughal throne as Shah Jahan.
                  Determined to avenge his earlier defeat, he launched campaigns against the
                  states that had opposed him at Jang-e-Tauns. His armies destroyed forts at
                  Madhuban, Kakaradih, and Fatehpur before advancing on Natthupur.
                </p>
                <p className="font-serif">
                  During this campaign, the rulers of Natthupur were traveling in South India,
                  leaving the fort vulnerable. At this critical moment, Chief Minister Shaheed
                  Mohan Pandey took command of the defenses. Demonstrating extraordinary courage
                  and loyalty, he rallied the remaining soldiers to resist the Mughal forces.
                  Though a contingent of soldiers from a particular caste fled in fear, Mohan
                  Pandey continued the fight alone. The Mughals captured him and demanded
                  information about the king and the treasury. Out of devotion to his state,
                  he refused to divulge anything, enduring a week of torture before being
                  martyred by being burned alive.
                </p>
                <p className="font-serif mt-4">
                  Before dying, Mohan Pandey pronounced a curse on the fleeing soldiers and their
                  descendants, declaring that none of them or their lineage would prosper in or
                  around Natthupur. His samadhi (memorial) stands in the western garden of
                  Natthupur village, where descendants of Raja Natth Bahadur Mall Vishen continue
                  to honor his memory. The Battle of Jang-e-Tauns and the heroic defense led by
                  Mohan Pandey remain enduring symbols of bravery, loyalty, and the high price
                  of freedom in regional history.
                </p>
                <p className="font-serif mt-4 font-bold">
                  This account originated as a local folk tale, preserving the memory of the
                  battle and Mohan Pandey&apos;s heroism. Later, after extensive research, <em>Shri Mahtab
                    Narayan Mall</em> documented this event in the book <em>&quot;Visen Vansh Darpan&quot;</em>.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
                <p className="font-serif">
                  जंग-ए-टौंस की लड़ाई, जो 17वीं सदी के प्रारंभ में लड़ी गई थी, वर्तमान
                  मऊ जिले के क्षेत्र में एक निर्णायक संघर्ष थी। नत्थुपुर के राजा नत्थ बहादुर
                  मल्ल विशेन और उनके भाई बाबू अजय बहादुर मल्ल विशेन ने युद्धकला में
                  अद्वितीय कौशल दिखाया। दोनों ने मिलकर खुर्रम खां, जो भविष्य में मुग़ल
                  सम्राट बने, को पराजित किया और उनकी जान बचा दी। इस विजय के सम्मान में
                  बाबू अजय बहादुर मल्ल को &quot;फतह बहादुर मल्ल&quot; की उपाधि दी गई।
                  काफी वर्षों बाद, शहंशाह जहाँगीर की मृत्यु के पश्चात् 6 फरवरी 1628 को
                  खुर्रम खां ने आगरा का शासन संभाला और शाहजहाँ के नाम से राज्याभिषेक
                  किया। अपनी पिछली हार का बदला लेने के लिए उन्होंने उन राज्यों पर
                  अभियान चलाया जिन्होंने जंग-ए-टौंस में उनका विरोध किया था। उनकी सेनाओं
                  ने मधुबन, ककराडीह और फतहपुर के किलों को ध्वस्त किया और नत्थुपुर
                  की ओर बढ़ीं।
                </p>
                <p className="font-serif">
                  इस अभियान के दौरान नत्थुपुर के शासक दक्षिण भारत की यात्रा पर थे,
                  जिससे किला असुरक्षित रह गया। इस कठिन समय में महामंत्री शहीद मोहन पाण्डेय
                  ने किले की रक्षा की कमान संभाली। उन्होंने अद्भुत साहस और निष्ठा दिखाते
                  हुए शेष सैनिकों को मुग़ल सेना का मुकाबला करने के लिए प्रेरित किया।
                  हालांकि एक विशेष जाति के कुछ सैनिक भय के कारण भाग गए, मोहन पाण्डेय
                  अकेले लड़ते रहे। मुग़लों ने उन्हें बंदी बना लिया और राजा तथा खजाने
                  के बारे में जानकारी मांगी। अपने राज्य के प्रति भक्ति के कारण उन्होंने
                  कुछ भी नहीं बताया और लगातार एक सप्ताह तक कष्ट सहने के बाद उन्हें
                  जिंदा जला दिया गया।
                </p>
                <p className="font-serif mt-4">
                  शहीद होने से पहले मोहन पाण्डेय ने भाग गए सैनिकों और उनके वंश पर
                  श्राप दिया कि यदि उनका या उनके वंश का कोई भी सदस्य नत्थुपुर या
                  उसके आस-पास घर बनाएगा तो उसका कल्याण नहीं होगा और वह सपरिवार
                  नष्ट हो जाएगा। उनका ब्रह्मस्थान नत्थुपुर गाँव के पश्चिमी बागीचे
                  में स्थित है, जहाँ राजा नत्थ बहादुर मल्ल विशेन के वंशज उनकी पूजा
                  करते हैं। जंग-ए-टौंस और मोहन पाण्डेय के वीरतापूर्ण संघर्ष की
                  स्मृति आज भी बहादुरी, निष्ठा और स्वतंत्रता के उच्च मूल्य का प्रतीक
                  मानी जाती है।
                </p>
                <p className="font-serif mt-4 font-bold">
                  यह घटना मूल रूप से स्थानीय लोककथा के रूप में प्रचलित थी, जिसने
                  जंग और मोहन पाण्डेय की वीरता की स्मृति को संरक्षित किया। बाद में,
                  विस्तृत शोध के पश्चात <em>महताब नारायण मल्ल</em> ने इसे पुस्तक
                  <em>&quot;विशेन वंश दर्पण&quot;</em> में प्रकाशित किया।
                </p>
              </div>
            </>
          )}

          {/* right Image */}
          <div className="md:col-span-1">
            <div className="border-1 border-gray-300 p-2 flex flex-col items-center">
              <div className="flex flex-col md:flex-row justify-center">
                <Image
                  src="/assets/img/madhuban/rajanathmall.png"
                  alt="majhauli-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({ tagEng: "Raja Nath Mall Vishen", tagHindi: "राजा नाथ मल्ल विशेन", url: "/assets/img/madhuban/rajanathmall.png" })
                  }
                />
                <Image
                  src="/assets/img/madhuban/babufatehbahadurmall.png"
                  alt="majhauli-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({ tagEng: "Babu Ajay Bahadur Mall Vishen", tagHindi: "बाबू अजय बहादुर मल्ल विशेन", url: "/assets/img/madhuban/babufatehbahadurmall.png" })
                  }
                />
              </div>

              <p>
                {language === "english"
                  ? "Raja Nath Mall Vishen on left and Babu Ajay Bahadur Mall Vishen on right"
                  : "बाईं ओर राजा नाथ मल्ल विशेन और दाईं ओर बाबू अजय बहादुर मल्ल विशेन।"}
              </p>
            </div>
            <div className="border-1 border-gray-300 p-2 flex flex-col items-center mt-2">
              <div className="flex flex-col md:flex-row justify-center">
                <Image
                  src="/assets/img/madhuban/mohanpandey.png"
                  alt="majhauli-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({ url: "/assets/img/madhuban/mohanpandey.png" })
                  }
                />
                <Image
                  src="/assets/img/madhuban/mohanpandey.jpg"
                  alt="majhauli-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({ url: "/assets/img/madhuban/mohanpandey.jpg" })
                  }
                />
              </div>

              <p>
                {language === "english"
                  ? "Martyrs' Memorial of Mohan Pandey, Commander-in-Chief of Raja Nath Mall's Army"
                  : "शहीद स्मारक : मोहन पांडेय, राजा नत्थ मल्ल की सेना के प्रधान सेनापति।"}
              </p>
            </div>
          </div>
        </div>

        {/* Britisher's Period */}
        <div className="flex items-center gap-4 my-5">
          <div className="h-px flex-grow bg-gray-300"></div>
          <span className="text-gray-500 text-2xl whitespace-nowrap">
            {language === "english"
              ? "BRITISHER'S PERIOD"
              : "अंग्रेज़ों का काल"}
          </span>
          <div className="h-px flex-grow bg-gray-300"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 my-3">

          {/* Left Image */}
          <div className="md:col-span-1">
            <div className="border-1 border-gray-300 p-2 flex flex-col items-center">
              <div className="flex justify-center">
                <Image
                  src="/assets/img/madhuban/census_1_1881.jpg"
                  alt="madhuban-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({
                      url: "/assets/img/madhuban/census_1_1881.jpg",
                      tagEng: "Record of Census of 1881",
                      tagHindi:
                        "1881 की जनगणना का अभिलेख",
                    })
                  }
                />
                <Image
                  src="/assets/img/madhuban/census_2_1881.jpg"
                  alt="madhuban-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({
                      url: "/assets/img/madhuban/census_2_1881.jpg",
                      tagEng: "Record of Census of 1881",
                      tagHindi:
                        "1881 की जनगणना का अभिलेख",
                    })
                  }
                />
              </div>

              <p>
                {language === "english"
                  ? "Record of Census of 1881"
                  : "1881 की जनगणना का अभिलेख"}
              </p>
            </div>
          </div>

          {/* Bio */}
          {language === "english" ? (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                According to the report <strong><em>&quot;Report on the Census of the North-Western Provinces and Oudh and the Native States of Rampur and Garhwal, taken on 17 February 1881&quot;</em></strong>, the Mal (i.e., Mall) of Azamgarh (Madhuban was part of Azamgarh at that time) were landowners (Zamindars) and were involved in farming.
              </p>

              <p className="font-serif">
                The total population of the Mal (i.e., Mall) community was recorded as 3,218 individuals. Out of this total population, 1,635 were males while 1,583 were females, showing a nearly balanced distribution between the male and female population within the community. These figures were documented in the census records of 1881 and reflect the demographic presence of the Mal (Mall) community in the Azamgarh region during that period.
              </p>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                1923 के न्यायालय के अभिलेख के अनुसार, मधुबन (जो उस समय उत्तर प्रदेश के आज़मगढ़ जिले का भाग था) मजहौली राज के स्वामित्व के अधीन एक इलाका था।
              </p>

              <p className="font-serif">
                इसमें यह भी उल्लेख है कि राजा देसमल (अर्थात् राजा देव मल्ल) के दो पुत्र थे— राय मल उर्फ परशाद मल और मदहो मल (अर्थात् राजा माधव मल्ल)। ज्येष्ठ पुत्र राय मल मजहौली राज्य के गद्दी-नशीन तथा उसके स्वामी बने, जबकि कुछ इलाके मदहो मल को उनके पालन-पोषण के लिए बाबुआई अनुदान के रूप में प्रदान किए गए। उनके वंशज उस समय (1923 में) मोहन पोंक (अर्थात् मोहन पोखरा) और खरधनिया (अर्थात् मधुबन) गांवों में बाबू के रूप में निवास कर रहे थे।
              </p>
              <p className="font-serif mt-4">
              </p>
            </div>
          )}

        </div>
        <div className="grid md:grid-cols-3 gap-6 my-3">

          {/* Left Image */}
          <div className="md:col-span-1">
            <div className="border-1 border-gray-300 p-2 flex flex-col items-center">
              <div className="flex justify-center">
                <Image
                  src="/assets/img/madhuban/maulanaFarooqi.png"
                  alt="madhuban-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({
                      url: "/assets/img/madhuban/maulanaFarooqi.png",
                    })
                  }
                />
              </div>

              <p>
                {language === "english"
                  ? "While describing the glory of the Mall lineage, Maulana Mohammad Abdul Ghafoor Farooqi, a retired Sub-Judge, wrote this in 1889 AD."
                  : "मल्ल वंश के गौरव का वर्णन करते हुए मौलाना मोहम्मद अब्दुल गफूर फारूखी, एक रिटायर्ड सब-जज, ने 1889 ई० में यह लिखा।"}
              </p>
            </div>
          </div>

          {/* Bio */}
          {language === "english" ? (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                In 1889 AD, Maulana Mohammad Abdul Ghafoor Farooqi, a retired Sub-Judge, described the glory of the Mall lineage.
                He wrote that the Mall community was regarded with great respect in its district. Even in his time, six taluqs
                and several scattered villages remained under their proprietary possession, the total area of which was popularly
                known as Mallan. However, due to the changes of time, a large portion of their zamindari passed into the hands of
                other communities.

                It is said that until the early rule of Awadh, the extent of their zamindari spread up to seven kos. The taluqa of
                Dubari was also included within it. The village named Bisen Dubari still stands as testimony to this fact.
              </p>

              <p className="font-serif">
                The large earthen reservoirs found in the Mallan region bear witness to the ancient grandeur and prosperity of
                these people. These remains are traces of forts (kots) which, in earlier times, were constructed by the great
                taluqdars and rulers of this land for their protection.
              </p>

              <p className="font-serif mt-4">
                Among these remains, the fort of Madhuban is particularly prominent. On seeing it and considering the local oral
                traditions, one may form the opinion that it was the principal seat of this community. For this reason, a vast and
                strong fort was constructed there. Likewise, the series of ponds at Natthupur stands as an example of the wealth
                and enterprise of the Malls.
              </p>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                सन 1889 ई० में सेवानिवृत्त सब-जज मौलाना मोहम्मद अब्दुल गफूर फारूखी ने मल्ल वंश की प्रतिष्ठा और गौरव का वर्णन किया।
                उन्होंने लिखा कि मल्ल समुदाय अपने जिले में अत्यंत सम्मान की दृष्टि से देखा जाता था। उस समय भी छह तालुके
                और कई बिखरे हुए गाँव उनके स्वामित्व में थे, जिनका समग्र क्षेत्र प्रचलित रूप से "मल्लान" के नाम से जाना जाता था।
                किन्तु समय के परिवर्तन के साथ उनकी ज़मींदारी का एक बड़ा भाग अन्य समुदायों के हाथों में चला गया।

                कहा जाता है कि अवध के प्रारम्भिक शासनकाल तक उनकी ज़मींदारी का विस्तार लगभग सात कोस तक फैला हुआ था।
                दुबारी का तालुका भी उसी में सम्मिलित था। "बिसेन दुबारी" नामक गाँव आज भी इस तथ्य का प्रमाण प्रस्तुत करता है।
              </p>

              <p className="font-serif">
                मल्लान क्षेत्र में पाए जाने वाले बड़े-बड़े मिट्टी के जलाशय इस समुदाय की प्राचीन समृद्धि और वैभव के साक्षी हैं।
                ये सभी अवशेष उन किलों (कोटों) के चिन्ह हैं, जिन्हें प्राचीन काल में इस भूमि के महान तालुकेदारों और शासकों ने
                अपनी सुरक्षा के लिए बनवाया था।
              </p>

              <p className="font-serif mt-4">
                इन अवशेषों में मधुबन का किला विशेष रूप से प्रमुख है। इसे देखकर और स्थानीय जनश्रुतियों पर विचार करने से यह
                प्रतीत होता है कि यह स्थान इस समुदाय की मुख्य राजधानी या प्रमुख केंद्र रहा होगा। इसी कारण वहाँ एक विशाल
                और सुदृढ़ किले का निर्माण कराया गया था। इसी प्रकार नत्थूपुर के तालाबों की श्रृंखला मल्लों की समृद्धि
                और उद्यमशीलता का एक और उदाहरण प्रस्तुत करती है।
              </p>
            </div>
          )}

        </div>
        <div className="grid md:grid-cols-3 gap-6 my-3">

          {/* Bio */}
          {language === "english" ? (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                According to a court record of 1923, Madhuban — which was then a part of Azamgarh district in Uttar Pradesh — was an ilaqa under the ownership of Majhauli Raj.
              </p>

              <p className="font-serif mt-4">
                The record also explains that during the British rule, Majhauli had ceased to function as an independent state. However, it continued to retain the character of an impartible estate governed by the Mitakshara law and long-standing family customs. According to this system, whenever a Raja of Majhauli died, the estate passed to the senior-most male member of the senior-most branch of the deceased Raja’s male lineage. If such a member was not available, the estate passed to the senior-most male member of the next senior branch of the family. This system followed the rule of male lineal primogeniture.
              </p>

              <p className="font-serif">
                Under this tradition, only one person became the gaddi-nashin (ruler) and the sole owner in possession of the Majhauli estate. The junior male members of the royal family did not inherit the estate but were provided maintenance through Babuai grants, which included certain lands or cash allowances. The widow of the deceased Raja and other female members of the family were not given rights of inheritance. Because of this system of succession, the gaddi of Majhauli estate was never left vacant.
              </p>

              <p className="font-serif">
                The record further mentions that Raja Desmal (also known as Raja Dev Mall) had two sons: Rai Mal, also called Prahsad Mal, and Madho Mal (later known as Raja Madhav Mall). After the death of Raja Dev Mall, the eldest son Rai Mal became the gaddi-nashin and the owner of the Majhauli estate. Madho Mall was granted certain ilaqas as a Babuai grant. According to the 1923 record, his descendants were living as Babus in the villages of Mohan Ponk (now Mohan Pokhara) and Khardhania (Madhuban).
              </p>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                1923 के एक न्यायालय अभिलेख के अनुसार, मधुबन — जो उस समय उत्तर प्रदेश के आजमगढ़ जिले का भाग था — मझौली राज के अधिकार में एक इलाका था।
              </p>

              <p className="font-serif mt-4">
                इस अभिलेख में यह भी उल्लेख है कि ब्रिटिश शासन के दौरान मझौली एक स्वतंत्र राज्य के रूप में समाप्त हो गया था, लेकिन इसके बावजूद यह एक अविभाज्य (Impartible) एस्टेट के रूप में बना रहा। यह एस्टेट मिताक्षरा विधि तथा परिवार की प्राचीन परंपराओं और प्रथाओं के अनुसार संचालित होता था। इस व्यवस्था के अनुसार, मझौली के किसी राजा की मृत्यु होने पर एस्टेट का अधिकार उसके वंश की सबसे वरिष्ठ शाखा के सबसे बड़े पुरुष सदस्य को प्राप्त होता था। यदि उस शाखा में ऐसा सदस्य उपलब्ध न हो, तो अधिकार परिवार की अगली वरिष्ठ शाखा के सबसे बड़े पुरुष सदस्य को दिया जाता था। इस प्रकार उत्तराधिकार का यह नियम पुरुष वंशानुक्रम (Male Lineal Primogeniture) पर आधारित था।
              </p>

              <p className="font-serif">
                इस परंपरा के अनुसार केवल एक ही व्यक्ति गद्दी-नशीन बनता था और वही मझौली एस्टेट का वास्तविक स्वामी तथा अधिकारधारी होता था। संयुक्त परिवार के अन्य कनिष्ठ पुरुष सदस्यों को एस्टेट में भाग नहीं मिलता था, बल्कि उनके भरण-पोषण के लिए बाबूई अनुदान (Babuai Grant) के रूप में कुछ भूमि या नकद धनराशि प्रदान की जाती थी। वहीं मृत राजा की विधवा तथा परिवार की अन्य महिला सदस्यों को उत्तराधिकार में हिस्सा नहीं दिया जाता था। इसी कारण मझौली एस्टेट की गद्दी कभी भी खाली नहीं रहती थी।
              </p>

              <p className="font-serif">
                अभिलेख में यह भी उल्लेख है कि राजा देसमल (अर्थात राजा देव मल्ल) के दो पुत्र थे — राय मल्ल, जिन्हें प्रहसाद मल्ल भी कहा जाता था, और माधो मल्ल (जो आगे चलकर राजा माधव मल्ल के नाम से प्रसिद्ध हुए)। राजा देव मल्ल की मृत्यु के बाद उनके ज्येष्ठ पुत्र राय मल्ल गद्दी-नशीन बने और मझौली एस्टेट के स्वामी बने। जबकि माधो मल्ल को बाबूई अनुदान के रूप में कुछ इलाके प्रदान किए गए। 1923 के अभिलेख के अनुसार उनके वंशज उस समय मोहन पोंक (वर्तमान मोहन पोखरा) और खर्दनिया (मधुबन) गांवों में बाबू के रूप में निवास कर रहे थे।
              </p>
            </div>
          )}

          {/* Right Image */}
          <div className="md:col-span-1">
            <div className="border-1 border-gray-300 p-2 flex flex-col items-center">
              <div className="flex justify-center">
                <Image
                  src="/assets/img/madhuban/case1.png"
                  alt="madhuban-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({
                      url: "/assets/img/madhuban/case1.png",
                      // estate: "Letter of Raja Awadesh Mall to Madhuban People",
                      // estateHindi:
                      //   "राजा अवधेश मल्ल का मधुबन की प्रजा के नाम पत्र।",
                    })
                  }
                />
                <Image
                  src="/assets/img/madhuban/case2.png"
                  alt="madhuban-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({
                      url: "/assets/img/madhuban/case2.png",
                      // estate: "Letter of Raja Awadesh Mall to Madhuban People",
                      // estateHindi:
                      //   "राजा अवधेश मल्ल का मधुबन की प्रजा के नाम पत्र।",
                    })
                  }
                />
              </div>

              <p>
                {language === "english"
                  ? "Record of Proceedings (In Court of the subordinate judge of Gorakhpur)"
                  : "कार्यवाही का अभिलेख (गोरखपुर के अधीनस्थ न्यायाधीश की अदालत में)।"}
              </p>
            </div>
          </div>

        </div>
        <div className="grid md:grid-cols-3 gap-6 my-3">

          {/* Bio */}
          {language === "english" ? (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                The letter was sent by the District Magistrate of Deoria to the Uttar Pradesh State Information Commission, Lucknow, regarding a complaint filed by Ratan Mall Bisen, resident of House No. 23/81, Tubewell Colony, Deoria. The applicant had submitted a request dated 11 December 2007 under the Right to Information Act, 2005 seeking clarification about the classification of the “Mal/Mall” caste in the Census of India 1931 (United Provinces of Agra and Oudh, Part-1). Specifically, he asked whether the Mal (Mall) community had been recognized as a sub-caste of Rajputs according to that census record. The matter was listed before the Commission, and the District Magistrate's office was asked to present its response on 25 July 2008.
              </p>
              <p className="font-serif mt-4">
                In response, the District Magistrate stated that the applicant himself had attached a photocopy of the relevant page from the 1931 Census report along with his application. According to that document, the Mal (Mall) caste is recorded under the Rajput category and treated as a sub-caste within the Rajput community. Therefore, the information sought by the applicant was already clarified through the census document itself. The District Magistrate's office submitted this explanation to the Commission and also communicated the information to the applicant for his reference.
              </p>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                यह पत्र देवरिया के जिलाधिकारी द्वारा उत्तर प्रदेश राज्य सूचना आयोग, लखनऊ को भेजा गया था, जो रतन मल्ल विसेन, निवासी मकान संख्या 23/81, ट्यूबवेल कॉलोनी, देवरिया द्वारा दायर की गई शिकायत से संबंधित था। आवेदक ने दिनांक 11 दिसंबर 2007 को सूचना का अधिकार अधिनियम, 2005 के अंतर्गत आवेदन प्रस्तुत कर यह जानकारी मांगी थी कि भारत की जनगणना 1931 (यूनाइटेड प्रोविंसेज ऑफ आगरा एंड अवध, भाग-1) में “मल/मल्ल” जाति का वर्गीकरण किस प्रकार किया गया है। विशेष रूप से उन्होंने यह जानना चाहा था कि क्या उस जनगणना अभिलेख में मल (मल्ल) समुदाय को राजपूतों की उपजाति के रूप में मान्यता दी गई है। यह प्रकरण आयोग के समक्ष सूचीबद्ध किया गया था और जिलाधिकारी कार्यालय से 25 जुलाई 2008 को अपना पक्ष प्रस्तुत करने के लिए कहा गया था।
              </p>

              <p className="font-serif mt-4">
                इसके उत्तर में जिलाधिकारी ने बताया कि आवेदक ने अपने आवेदन के साथ 1931 की जनगणना रिपोर्ट के संबंधित पृष्ठ की छायाप्रति स्वयं संलग्न की थी। उस दस्तावेज़ के अनुसार मल (मल्ल) जाति को राजपूत वर्ग के अंतर्गत दर्ज किया गया है और इसे राजपूत समुदाय की एक उपजाति के रूप में माना गया है। अतः आवेदक द्वारा मांगी गई जानकारी उसी जनगणना दस्तावेज़ से स्पष्ट हो जाती है। जिलाधिकारी कार्यालय ने यह स्पष्टीकरण आयोग को प्रस्तुत किया तथा इसकी सूचना आवेदक को भी अवगत करा दी।
              </p>
            </div>
          )}

          {/* Right Image */}
          <div className="md:col-span-1">
            <div className="border-1 border-gray-300 p-2 flex flex-col items-center">
              <div className="flex justify-center">
                <Image
                  src="/assets/img/madhuban/rti2007.jpg"
                  alt="madhuban-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({
                      url: "/assets/img/madhuban/rti2007.jpg",
                      // estate: "Letter of Raja Awadesh Mall to Madhuban People",
                      // estateHindi:
                      //   "राजा अवधेश मल्ल का मधुबन की प्रजा के नाम पत्र।",
                    })
                  }
                />
              </div>

              <p>
                {language === "english"
                  ? "2007's RTI Response"
                  : "2007 की आरटीआई का उत्तर"}
              </p>
            </div>
          </div>

        </div>

        {/* Post Independence Period */}
        <div className="flex items-center gap-4 my-5">
          <div className="h-px flex-grow bg-gray-300"></div>
          <span className="text-gray-500 text-2xl whitespace-nowrap">
            {language === "english"
              ? "POST INDEPENDENCE PERIOD"
              : "स्वतंत्रता प्राप्ति के बाद का काल"}
          </span>
          <div className="h-px flex-grow bg-gray-300"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 my-3">
          {/* left Image */}
          <div className="md:col-span-1">
            <div className="border-1 border-gray-300 p-2 flex flex-col items-center">
              <div className="flex justify-center">
                <Image
                  src="/assets/img/madhuban/letter.jpg"
                  alt="madhuban-img"
                  width={200}
                  height={50}
                  className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                  onClick={() =>
                    openModal({
                      url: "/assets/img/madhuban/letter.jpg",
                      // estate: "Letter of Raja Awadesh Mall to Madhuban People",
                      // estateHindi:
                      //   "राजा अवधेश मल्ल का मधुबन की प्रजा के नाम पत्र।",
                    })
                  }
                />
              </div>

              <p>
                {language === "english"
                  ? "Letter of Raja Awadesh Mall to Madhuban People"
                  : "राजा अवधेश मल्ल का मधुबन की प्रजा के नाम पत्र।"}
              </p>
            </div>
          </div>

          {/* Bio */}
          {language === "english" ? (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                A letter was written by Raja Awadesh Mall, King of Majhauli Raj
                to the people of Madhuban during the Uttar Pradesh Legislative
                Assembly elections. In it, he introduces himself as a candidate
                from the Congress Party and expresses deep gratitude for the
                continued loyalty, sympathy, and support he has received from
                the people, who are described as part of the larger Majhauli
                royal family.
              </p>
              <p className="font-serif">
                He acknowledges the changing political landscape—particularly
                that the Congress Party is no longer in power—and openly states
                that the usual support in terms of transportation, workers, and
                finances is now limited. Therefore, he earnestly seeks
                assistance from the people in the form of financial, human, and
                logistical support. The letter becomes especially emotional and
                personal as he requests a public meeting in Madhuban, where he
                hopes to meet everyone and seek their blessings and guidance.
              </p>
              <p className="font-serif mt-4">
                Overall, the letter is not only a political communication but
                also reflects the tone of a family elder reaching out to his
                extended kin, filled with tradition, humility, and a sense of
                shared responsibility in the democratic process.
              </p>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
              <p className="font-serif">
                यह पत्र राजा अवधेश मल्ल, जो मझौली राज के शासक थे, द्वारा उत्तर
                प्रदेश विधान सभा चुनावों के दौरान मधुबन की जनता को लिखा गया था।
                इसमें उन्होंने स्वयं को कांग्रेस पार्टी के उम्मीदवार के रूप में
                प्रस्तुत किया और मधुबनवासियों से प्राप्त निरंतर निष्ठा,
                सहानुभूति और समर्थन के लिए गहरी कृतज्ञता व्यक्त की। उन्होंने
                मधुबन की जनता को मझौली राजपरिवार का अभिन्न अंग बताया।
              </p>
              <p className="font-serif">
                उन्होंने बदलते राजनीतिक परिदृश्य को स्वीकार करते हुए यह स्पष्ट
                किया कि कांग्रेस पार्टी अब सत्ता में नहीं है और पहले की तरह
                परिवहन, कार्यकर्ता तथा आर्थिक सहायता जैसे संसाधन अब सीमित हैं।
                इसलिए उन्होंने जनता से वित्तीय, मानवीय और साधनात्मक रूप में
                सहयोग की अपील की। यह पत्र उस समय और अधिक भावनात्मक व आत्मीय बन
                जाता है जब वह मधुबन में एक सार्वजनिक बैठक आयोजित करने का आग्रह
                करते हैं, जहाँ वे सभी से मिलकर आशीर्वाद और मार्गदर्शन प्राप्त
                करना चाहते हैं।
              </p>
              <p className="font-serif mt-4">
                कुल मिलाकर, यह पत्र केवल एक राजनीतिक संदेश नहीं है, बल्कि यह एक
                परिवार के बुजुर्ग द्वारा अपने विस्तारित परिजनों से किया गया
                आत्मीय संवाद भी है, जिसमें परंपरा, विनम्रता और लोकतांत्रिक
                प्रक्रिया में साझा जिम्मेदारी की भावना समाहित है।
              </p>
            </div>
          )}
        </div>

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
