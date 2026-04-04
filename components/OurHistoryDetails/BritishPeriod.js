import React from 'react';
import Image from "next/image";
import SubHeading from "./SubHeading";

function BritishPeriod({ language, openModal }) {
    return (
        <>

            <SubHeading language={language} english="BRITISHER'S PERIOD" hindi="अंग्रेज़ों का काल" />
            <div className="grid md:grid-cols-3 gap-6 my-3">

                {/* Left Image */}
                <div className="md:col-span-1">
                    <div className="border-1 border-gray-300 p-2 flex flex-col items-center">
                        <div className="flex flex-col md:flex-row justify-center">
                            <Image
                                src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591044/rmmv/madhuban/census_1_1881_pbt7mc.jpg"
                                alt="1881census-img"
                                width={200}
                                height={50}
                                className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                                onClick={() =>
                                    openModal({
                                        url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591044/rmmv/madhuban/census_1_1881_pbt7mc.jpg",
                                        tagEng: "Record of Census of 1881",
                                        tagHindi:
                                            "1881 की जनगणना का अभिलेख",
                                    })
                                }
                            />
                            <Image
                                src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591050/rmmv/madhuban/census_2_1881_yqyluq.jpg"
                                alt="1881census-img"
                                width={200}
                                height={50}
                                className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                                onClick={() =>
                                    openModal({
                                        url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591050/rmmv/madhuban/census_2_1881_yqyluq.jpg",
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
                                src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591060/rmmv/madhuban/maulanaFarooqi_hkfws5.png"
                                alt="maulanaFarooqi-img"
                                width={200}
                                height={50}
                                className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                                onClick={() =>
                                    openModal({
                                        url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591060/rmmv/madhuban/maulanaFarooqi_hkfws5.png",
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
                        <div className="flex flex-col md:flex-row justify-center">
                            <Image
                                src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591056/rmmv/madhuban/case1_q7ztpx.png"
                                alt="madhubancase-img"
                                width={200}
                                height={50}
                                className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                                onClick={() =>
                                    openModal({
                                        url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591056/rmmv/madhuban/case1_q7ztpx.png"
                                    })
                                }
                            />
                            <Image
                                src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591049/rmmv/madhuban/case2_dnqctv.png"
                                alt="madhubancase-img"
                                width={200}
                                height={50}
                                className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                                onClick={() =>
                                    openModal({
                                        url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591049/rmmv/madhuban/case2_dnqctv.png",
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
                                src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1775290223/rmmv/madhuban/rti2007_uumc16.jpg"
                                alt="rti2007-img"
                                width={200}
                                height={50}
                                className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                                onClick={() =>
                                    openModal({
                                        url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1775290223/rmmv/madhuban/rti2007_uumc16.jpg"
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
        </>
    )
}

export default BritishPeriod;
