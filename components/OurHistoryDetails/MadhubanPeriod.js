import React from 'react';
import Image from "next/image";
import SubHeading from "./SubHeading";

function MadhubanEstate({ language, openModal }) {
    return (
        <>
            <SubHeading language={language} english="MADHUBAN ZAMINDARI" hindi="मधुबन जमींदारी" />
            <div className="grid md:grid-cols-3 gap-6">
                {/* Left Image */}
                <div className="md:col-span-1 ">
                    <Image
                        src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591058/rmmv/madhuban/madhuban1_euky3r.jpg"
                        alt="madhuban-img"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg border-3 border-gray-300 cursor-pointer"
                        onClick={() =>
                            openModal({
                                url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591058/rmmv/madhuban/madhuban1_euky3r.jpg",
                                tagEng: "Ruins of Raja Fateh Bahadur Mall's Haveli",
                                tagHindi: "राजा फतेह बहादुर मल्ल की हवेली के अवशेष",
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
                                    src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1775285122/rmmv/madhuban/proof2_ixpiiy.jpg"
                                    alt="madhuban-img"
                                    width={200}
                                    height={50}
                                    className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                                    onClick={() =>
                                        openModal({
                                            url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1775285122/rmmv/madhuban/proof2_ixpiiy.jpg"
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
        </>
    )
}

export default MadhubanEstate;
