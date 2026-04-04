import React from 'react';
import Image from "next/image";
import SubHeading from "./SubHeading";

function MajhuliEstate({ language, openModal }) {
    return (
        <>
            <SubHeading language={language} english="MAJHAULI ESTATE" hindi="मझौली रियासत" />
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
                        src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591478/rmmv/majhauli/majhauliraj13_heenab.jpg"
                        alt="madhuban-img"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg border-3 border-gray-300 cursor-pointer"
                        onClick={() =>
                            openModal({
                                url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591478/rmmv/majhauli/majhauliraj13_heenab.jpg",
                                tagEng: "Majhauli Fort Entrance",
                                tagHindi: "मझौली किला प्रवेशद्वार",
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
        </>
    )
}

export default MajhuliEstate;
