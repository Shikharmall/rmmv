import React from 'react';
import Image from "next/image";
import SubHeading from "./SubHeading";

function MahabharatPeriod({ language, openModal }) {
    return (
        <>
            <SubHeading language={language} english="MAHABHARAT PERIOD" hindi="महाभारत काल" />
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

                        {/* <p className="font-serif mx-5 md:mx-10">
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
                          </p> */}
                    </div>
                ) : (
                    <div className="md:col-span-2 space-y-4 text-justify leading-relaxed">
                        <p className="font-serif">
                            मल्ल राज्य के राजा का उल्लेख महर्षि <strong>व्यास</strong> द्वारा रचित महाभारत (सभा पर्व, अध्याय XXX) में भी मिलता है। इसमें वर्णन है कि भीम के दिग्विजय अभियान के दौरान उन्होंने अनेक उत्तरी राज्यों को पराजित किया, जिनमें <strong><em>मल्लों का राजा</em></strong> भी शामिल था। यह अभियान युधिष्ठिर के राजसूय यज्ञ के लिए उनके राज्य की सीमा का विस्तार करने के उद्देश्य से किया गया था। ग्रंथ में यह भी कहा गया है कि भीम ने <strong><em>दक्षिणी मल्लों और भगवन्त पर्वतों को भी पराजित किया</em></strong>, जिससे वह क्षेत्र भी युधिष्ठिर के अधिकार में आ गया।
                        </p>

                        <p className="font-serif">
                            मल्ल राज्य के राजा का उल्लेख महर्षि <strong>व्यास</strong> द्वारा रचित महाभारत (भीष्म पर्व, अध्याय XXX) में भी मिलता है। इसमें वर्णन है कि भीम के दिग्विजय अभियान के दौरान उन्होंने अनेक उत्तरी राज्यों को पराजित किया, जिनमें <strong><em>मल्लों का राजा</em></strong> भी सम्मिलित था, और इस प्रकार युधिष्ठिर के राजसूय यज्ञ के लिए उनके राज्य की प्रभुता का विस्तार किया गया। ग्रंथ में यह भी उल्लेख है कि भीम ने <strong><em>दक्षिणी मल्लों तथा भगवन्त पर्वतों को भी परास्त किया</em></strong>, जिससे वह प्रदेश भी युधिष्ठिर के अधीन आ गया।
                        </p>
                    </div>
                )}

                {/* right Image */}
                <div className="md:col-span-1">
                    <div className="border border-gray-300 p-3 flex flex-col items-center">

                        <div className="flex flex-wrap justify-center gap-2">
                            <Image
                                src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591333/rmmv/mallmahajanpada/mahabharat1-sabha-parva1_psl8ok.png"
                                alt="mahabharat-sabha-parva1-img"
                                width={200}
                                height={50}
                                className="cursor-pointer w-full sm:w-[180px] md:w-[200px]"
                                onClick={() =>
                                    openModal({
                                        url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591333/rmmv/mallmahajanpada/mahabharat1-sabha-parva1_psl8ok.png",
                                    })
                                }
                            />

                            <Image
                                src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591336/rmmv/mallmahajanpada/mahabharat1-sabha-parva2_n9vfec.png"
                                alt="mahabharat-sabha-parva2-img"
                                width={200}
                                height={50}
                                className="cursor-pointer w-full sm:w-[180px] md:w-[200px]"
                                onClick={() =>
                                    openModal({
                                        url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591336/rmmv/mallmahajanpada/mahabharat1-sabha-parva2_n9vfec.png",
                                    })
                                }
                            />

                            <Image
                                src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591332/rmmv/mallmahajanpada/mahabharat1-bhisma-parva1_vji7wf.png"
                                alt="mahabharat-bhisma-parva-img"
                                width={200}
                                height={50}
                                className="cursor-pointer w-full sm:w-[180px] md:w-[200px]"
                                onClick={() =>
                                    openModal({
                                        url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591332/rmmv/mallmahajanpada/mahabharat1-bhisma-parva1_vji7wf.png",
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
        </>
    )
}

export default MahabharatPeriod;
