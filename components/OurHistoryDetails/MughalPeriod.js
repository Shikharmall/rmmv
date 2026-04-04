import React from 'react';
import Image from "next/image";
import SubHeading from "./SubHeading";

function MughalPeriod({ language, openModal }) {
    return (
        <>
            <SubHeading language={language} english="MUGHAL PERIOD" hindi="मुग़ल काल" />
            <div className="grid md:grid-cols-3 gap-6 my-3">
                {/* left Image */}
                <div className="md:col-span-1">
                    <div className="border-1 border-gray-300 p-2 flex flex-col items-center">
                        <div className="flex flex-col md:flex-row justify-center">
                            <Image
                                src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591481/rmmv/majhauli/proof3_fucpx3.png"
                                alt="nathmallTurk-img"
                                width={200}
                                height={50}
                                className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                                onClick={() =>
                                    openModal({
                                        url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591481/rmmv/majhauli/proof3_fucpx3.png"
                                    })
                                }
                            />
                            <Image
                                src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591503/rmmv/majhauli/proof4_yaeaag.png"
                                alt="nathmallTurk-img"
                                width={200}
                                height={50}
                                className="m-1 cursor-pointer" // shadow-lg border-3 border-gray-300
                                onClick={() =>
                                    openModal({
                                        url: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591503/rmmv/majhauli/proof4_yaeaag.png"
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
        </>
    )
}

export default MughalPeriod
