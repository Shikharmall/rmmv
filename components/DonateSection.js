"use client";
import Banner from "./common/Banner";
import LanguageContext from "@/context/languageContext";
import { useContext } from "react";

export default function DonateSection() {
  const { language } = useContext(LanguageContext);

  return (
    <section className="bg-white pb-12">
      {/* Heading */}
      <Banner
        title={language === "english" ? "Donate" : "डोनेट"}
        bgImage={
          "https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591410/rmmv/mallmahajanpada/warOverBuddhaRelics_u3t4ws.jpg"
        }
      />

      <div className="min-h-screen flex items-center justify-center bg-[#f5f2eb] p-6">
        <div className="relative max-w-6xl w-full bg-gradient-to-r from-[#a88c63] to-[#c5ae8a] rounded-3xl shadow-xl p-10 overflow-hidden border-[5px] border-[#de8328]/40 ">

          {/* Left Content */}
          <div className="max-w-lg relative z-10">
            <h1 className="text-4xl font-semibold text-white leading-snug">
              Help us to <span className="text-[#3a2f1f]">Spread Awareness</span>
              <br /> to save our Heritage
            </h1>

            <p className="text-[#3a2f1f] mt-4 text-sm leading-relaxed">
              Raja Madhav Mall Vishen of Madhuban Zamindari stands as a symbol
              of courage, honor, and the proud traditions of the Rajput lineage.
              His legacy reflects the values of bravery, sacrifice, and
              dedication to dharma that have guided generations. Through this
              initiative, we seek to preserve and spread awareness about the
              rich history, cultural heritage, and noble ideals of the Vishen
              Rajputs. With your support, we aim to protect this heritage,
              educate future generations, and ensure that the story of Raja
              Madhav Mall Vishen and the Madhuban Zamindari continues to inspire
              pride and unity for years to come.
            </p>

            {/* Progress Section */}
            <div className="mt-8">
              <div className="flex justify-between text-sm text-[#3a2f1f] mb-2">
                <span>₹ 0</span>
                <span>₹ 15 Lakhs</span>
              </div>

              <div className="w-full bg-[#e6dccd] rounded-full h-4 relative">
                <div className="bg-[#8b6f47] h-4 rounded-full w-2/3"></div>

                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#8b6f47] text-white text-xs px-3 py-1 rounded-md">
                  ₹ 12,34,567
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-6 mt-8 flex-wrap">
              <div className="bg-white/60 backdrop-blur-md border border-[#8b6f47] rounded-xl p-4 w-28 text-center">
                <p className="text-lg font-bold text-[#8b6f47]">₹ 15L</p>
                <p className="text-xs text-[#3a2f1f]">Target</p>
              </div>

              <div className="bg-white/60 backdrop-blur-md border border-[#8b6f47] rounded-xl p-4 w-28 text-center">
                <p className="text-lg font-bold text-[#8b6f47]">180</p>
                <p className="text-xs text-[#3a2f1f]">Days left</p>
              </div>

              <div className="bg-white/60 backdrop-blur-md border border-[#8b6f47] rounded-xl p-4 w-28 text-center">
                <p className="text-lg font-bold text-[#8b6f47]">1080</p>
                <p className="text-xs text-[#3a2f1f]">Donators</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-6 mt-8">
              <button className="bg-[#8b6f47] text-white px-6 py-3 rounded-lg hover:bg-[#7a5d3b] transition cursor-pointer">
                Donate Now
              </button>

              <button className="text-[#3a2f1f] underline cursor-pointer">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image with Gradient Blend */}
          <div className="absolute right-0 bottom-0 h-full w-[420px] hidden lg:block">
            <img
              // src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1773687816/rmmv/Lakshmana_at_Srivaikundam_e1065x.jpg"
              src="https://res.cloudinary.com/drb1ds8e3/image/upload/v1773688596/rmmv/download_tb2qss.png"
              alt="heritage"
              className="h-full w-full object-cover opacity-90"
            />

            {/* Gradient Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#c5ae8a]/60 to-[#a88c63]"></div> */}
          </div>

        </div>
      </div>
    </section>
  );
}