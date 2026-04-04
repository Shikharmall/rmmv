import React from 'react';
import Image from "next/image";
import SubHeading from "./SubHeading";

function TonsaBattle({ language, openModal }) {
    return (
        <>
            <SubHeading language={language} english="BATTLE OF TONSA" hindi="जंग-ए-टौंस" />
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
                                src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1773593553/rmmv/madhuban/rajanathmall_flr0d5.png"
                                alt="rajanathmall-img"
                                width={200}
                                height={50}
                                className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                                onClick={() =>
                                    openModal({
                                        tagEng: "Raja Nath Mall Vishen",
                                        tagHindi: "राजा नाथ मल्ल विशेन",
                                        url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773593553/rmmv/madhuban/rajanathmall_flr0d5.png"
                                    })
                                }
                            />
                            <Image
                                src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591044/rmmv/madhuban/babufatehbahadurmall_nrqssy.png"
                                alt="majhauli-img"
                                width={200}
                                height={50}
                                className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                                onClick={() =>
                                    openModal({
                                        tagEng: "Babu Ajay Bahadur Mall Vishen",
                                        tagHindi: "बाबू अजय बहादुर मल्ल विशेन",
                                        url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591044/rmmv/madhuban/babufatehbahadurmall_nrqssy.png"
                                    })
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
                                src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591063/rmmv/madhuban/mohanpandey_lkrg6t.png"
                                alt="mohanpandey-img"
                                width={200}
                                height={50}
                                className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                                onClick={() =>
                                    openModal({ url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591063/rmmv/madhuban/mohanpandey_lkrg6t.png" })
                                }
                            />
                            <Image
                                src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591062/rmmv/madhuban/mohanpandey_updxle.jpg"
                                alt="mohanpandey-img"
                                width={200}
                                height={50}
                                className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                                onClick={() =>
                                    openModal({ url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591062/rmmv/madhuban/mohanpandey_updxle.jpg" })
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
        </>
    )
}

export default TonsaBattle
