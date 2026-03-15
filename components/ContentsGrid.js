"use client";
import Image from "next/image";
import ContentModel from "./common/ContentModel";
import { useState } from "react";

export default function ContentsGrid({ contents }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const openModal = (src) => {
    setSelectedContent(src);
    setModalOpen(true);
  };

  return (
    <>

      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {contents?.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded shadow-md cursor-pointer group"
              onClick={() => openModal(item)}
            >

              {item?.isVideo ? (
                <>

                  <video
                    src={item?.url}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">

                    <div className="bg-black/60 rounded-full p-4 group-hover:scale-110 transition">

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        className="w-8 h-8"
                      >

                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </>
              ) : (
                <Image
                  src={item?.url}
                  width={500}
                  height={300}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <ContentModel
        isOpen={isModalOpen}
        content={selectedContent}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}