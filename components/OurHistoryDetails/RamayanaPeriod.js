import React from 'react';
import Image from "next/image";
import SubHeading from "./SubHeading";

function RamayanaPeriod({ language, openModal }) {

    return (
        <>
            <SubHeading language={language} english="RAMAYANA PERIOD" hindi="रामायण काल" />
            <div className="grid md:grid-cols-3 gap-6 my-3">

                {/* left Image */}
                <div className="md:col-span-1">
                    <div className="border-1 border-gray-300 p-2 flex flex-col items-center">
                        <div className="flex flex-col md:flex-row justify-center">
                            <Image
                                src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591385/rmmv/mallmahajanpada/ramayana1_gc4dzo.png"
                                alt="ramayana-img"
                                width={200}
                                height={50}
                                className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                                onClick={() =>
                                    openModal({
                                        url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591385/rmmv/mallmahajanpada/ramayana1_gc4dzo.png",
                                    })
                                }
                            />
                            <Image
                                src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591385/rmmv/mallmahajanpada/ramayana2_qayfmc.png"
                                alt="ramayana-img"
                                width={200}
                                height={50}
                                className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                                onClick={() =>
                                    openModal({
                                        url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591385/rmmv/mallmahajanpada/ramayana2_qayfmc.png",
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
        </>
    )
}

export default RamayanaPeriod;
