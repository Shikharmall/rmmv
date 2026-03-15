"use client";
import { useContext, useEffect, useRef } from "react";
import COLORS from "@/utils/color";
import LanguageContext from "@/context/languageContext";
import { motion, useInView } from "framer-motion";

export default function GallerySection() {
  const { language } = useContext(LanguageContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const estates = [
    {
      id: 1,
      url: "https://twitter.com/aksharmaBharat/status/1969759203419144260",
    },
    {
      id: 2,
      url: "https://twitter.com/RPMALL09/status/1713463994307260799",
    },
    {
      id: 3,
      url: "https://twitter.com/RPMALL09/status/1705259895266947215",
    },
  ];

  // Load Twitter script only once
  useEffect(() => {
    if (!window.twttr) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.twttr.widgets.load();
    }
  }, []);

  // Re-render embeds after mount
  useEffect(() => {
    if (window.twttr) {
      window.twttr.widgets.load();
    }
  }, [estates]);

  const renderEstateCard = (estate, idx) => {
    return (
      <motion.div
        key={estate.id}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{
          duration: 0.5,
          delay: 0.2 + idx * 0.1,
        }}
        className="flex"
      >
        <div className="w-full px-4 py-6 flex justify-center">
          <div className="w-full max-w-md">
            <div className="bg-gray-50 rounded-xl p-4 shadow-inner h-full min-h-[520px] flex items-start justify-center">
              <blockquote className="twitter-tweet w-full">
                <a href={estate.url}></a>
              </blockquote>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="bg-[#f5e2c8] py-12">
      <div className="max-w-7xl mx-auto px-4" ref={ref}>
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block relative mb-5">
            <h2
              className="text-2xl font-semibold font-serif"
              style={{ color: COLORS.primary }}
            >
              {language === "english" ? "Connect" : "कनेक्ट"}
            </h2>
            <div
              className="absolute left-0 top-8 w-1/2 h-1"
              style={{ backgroundColor: COLORS.secondary }}
            ></div>
          </div>

          <h1 className="text-4xl text-[#082366]">
            {language === "english" ? "Social Connect" : "सोशल कनेक्ट"}
          </h1>
        </motion.div>

        {/* Equal height cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {estates.map(renderEstateCard)}
        </div>
      </div>
    </section>
  );
}