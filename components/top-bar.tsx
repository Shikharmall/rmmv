"use client"

import LanguageContext from "@/context/languageContext"
import { useContext, useState } from "react"

export function TopBar() {
    const [fontSize, setFontSize] = useState("normal")
    const [colorScheme, setColorScheme] = useState("default")
    const { language, setLanguage } = useContext(LanguageContext)

    const colorOptions = [
        { id: "gray", color: "bg-gray-400" },
        { id: "black", color: "bg-black" },
        { id: "green", color: "bg-green-600" },
        { id: "brown", color: "bg-amber-700" },
    ]

    return (
        <div className="bg-[#fefee3] border-b border-gray-200 py-2 px-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
                <div className="flex items-center gap-4">
                    <button className="text-gray-700 hover:text-orange-500 font-medium tracking-wide">
                        SKIP TO MAIN CONTENT
                    </button>
                    <span className="text-gray-300">|</span>
                    <button className="text-gray-700 hover:text-orange-500 font-medium tracking-wide">
                        SCREEN READER
                    </button>
                    <div className="flex items-center gap-2 ml-2">
                        <button
                            onClick={() => setFontSize("small")}
                            className={`text-gray-700 hover:text-orange-500 ${fontSize === "small" ? "text-orange-500" : ""}`}
                        >
                            A-
                        </button>
                        <button
                            onClick={() => setFontSize("normal")}
                            className={`text-gray-700 hover:text-orange-500 ${fontSize === "normal" ? "text-orange-500" : ""}`}
                        >
                            A
                        </button>
                        <button
                            onClick={() => setFontSize("large")}
                            className={`text-gray-700 hover:text-orange-500 ${fontSize === "large" ? "text-orange-500" : ""}`}
                        >
                            A+
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                        {colorOptions.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => setColorScheme(option.id)}
                                className={`w-4 h-4 ${option.color} border border-gray-300 ${colorScheme === option.id ? "ring-2 ring-orange-500" : ""
                                    }`}
                                aria-label={`${option.id} color scheme`}
                            />
                        ))}
                    </div>
                    <button className="text-gray-700 hover:text-orange-500 font-medium cursor-pointer"
                        onClick={() => {
                            language === "english"
                                ? (setLanguage("hindi"),
                                    localStorage.setItem("language", "hindi"))
                                : (setLanguage("english"),
                                    localStorage.setItem("language", "english"));
                        }}
                    >
                        {language === "english" ? "हिंदी" : "English"}
                    </button>
                </div>
            </div>
        </div>
    )
}
