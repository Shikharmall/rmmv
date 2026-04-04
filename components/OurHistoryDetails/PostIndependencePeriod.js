import React from 'react';
import Image from "next/image";
import SubHeading from "./SubHeading";

function PostIndependencePeriod({ language, openModal }) {

    return (
        <>
            <SubHeading language={language} english="POST INDEPENDENCE PERIOD" hindi="स्वतंत्रता प्राप्ति के बाद का काल" />
            <div className="grid md:grid-cols-3 gap-6 my-3">
                {/* left Image */}
                <div className="md:col-span-1">
                    <div className="border-1 border-gray-300 p-2 flex flex-col items-center">
                        <div className="flex justify-center">
                            <Image
                                src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591052/rmmv/madhuban/letter_htlrrb.jpg"
                                alt="madhuban-img"
                                width={200}
                                height={50}
                                className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                                onClick={() =>
                                    openModal({
                                        url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591052/rmmv/madhuban/letter_htlrrb.jpg",
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
        </>
    )
}

export default PostIndependencePeriod;
