"use client";

import React from "react";

/**
 * CaseStudyShowcase
 * 
 * A premium, interactive 3D device showcase component featuring a MacBook, iPhone, and iPad.
 * Designed for "Sake-level" visual excellence in portfolio case studies.
 */

interface CaseStudyShowcaseProps {
  title: string;
  description: string;
  link: string;
  linkText?: string;
  desktopImage: string;
  mobileImage: string;
  tabletImage: string;
  accentColorClass?: string; // Tailwind color class like 'amber-600'
  accentBorderClass?: string; // Tailwind border class like 'border-amber-600'
  mobileBgColor?: string; // Hex color or tailwind class
  tabletBgColor?: string; // Hex color or tailwind class
}

export const CaseStudyShowcase: React.FC<CaseStudyShowcaseProps> = ({
  title,
  description,
  link,
  linkText = "Koko projekti →",
  desktopImage,
  mobileImage,
  tabletImage,
  accentColorClass = "amber-600",
  accentBorderClass = "border-amber-600",
  mobileBgColor = "white",
  tabletBgColor = "white",
}) => {
  const getBgStyles = (color: string) => {
    const isHex = color.startsWith("#");
    return {
      style: isHex ? { backgroundColor: color } : {},
      className: isHex ? "" : color
    };
  };

  const mobileBg = getBgStyles(mobileBgColor);
  const tabletBg = getBgStyles(tabletBgColor);

  return (
    <div className="relative w-full max-w-6xl mx-auto py-2 lg:py-4 flex flex-col lg:flex-row items-center gap-4 lg:gap-12 overflow-visible">
      
      {/* Vasen puoli: Tekstit & Kuvaus */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6 z-10 px-6">
        <div className="w-full border-t border-stone-200 pt-8 mt-4"></div>
        <h2 className="text-4xl lg:text-5xl font-serif leading-tight text-stone-900 -mt-2">
          {title}
        </h2>
        <p className="text-lg text-stone-600 leading-relaxed">
          {description}
        </p>
        <div className="mt-4">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`text-${accentColorClass} font-bold hover:opacity-80 transition border-b-2 ${accentBorderClass} pb-1`}
          >
            {linkText}
          </a>
        </div>
      </div>

      {/* Oikea puoli: Elävä 3D Mockup */}
      <div className="w-full lg:w-2/3 h-[450px] md:h-[500px] lg:h-[700px] -mt-8 lg:mt-0 perspective-container relative flex items-center justify-center lg:ml-8 transform-gpu overflow-visible">
        
        {/* MacBook Pro Model */}
        <div className="absolute w-[95%] lg:w-[90%] max-w-[850px] transition-transform duration-700 hover:scale-[1.02] z-10 pb-12">
          <div className="w-full aspect-[16/10] border-[4px] lg:border-[6px] border-b-[12px] lg:border-b-[20px] border-[#0a0a0a] bg-[#0a0a0a] rounded-t-lg lg:rounded-t-2xl relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 lg:w-24 h-1.5 lg:h-3 bg-[#0a0a0a] rounded-b-md lg:rounded-b-lg z-30 flex items-center justify-center">
              <div className="w-0.5 h-0.5 lg:w-1 lg:h-1 bg-[#222] rounded-full ring-1 ring-stone-800/50 shadow-inner"></div>
            </div>
            <img 
              src={desktopImage} 
              alt={`${title} Desktop`} 
              className="w-full h-auto min-h-full object-cover object-top" 
              style={{ imageRendering: "-webkit-optimize-contrast" }}
            />
          </div>
          <div className="w-[104%] lg:w-[106%] h-3 lg:h-4 bg-gradient-to-r from-stone-400 via-stone-100 to-stone-400 -ml-[2%] lg:-ml-[3%] rounded-b-lg lg:rounded-b-2xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative z-20 overflow-hidden">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 lg:w-20 h-1 lg:h-1.5 bg-stone-300 rounded-b-full"></div>
          </div>
        </div>

        {/* iPhone Model */}
        <div className="absolute w-[30%] md:w-[32%] lg:w-[22%] max-w-[200px] aspect-[9/18] iphone-tilt transition-transform duration-700 hover:-translate-y-4 hover:scale-105 z-30 left-2 md:left-12 lg:left-0 bottom-[-42px] md:bottom-[-20px] lg:bottom-6">
          <div className="w-full h-full border-[3px] lg:border-[5px] border-stone-800 bg-black rounded-[1.2rem] lg:rounded-[1.8rem] overflow-hidden shadow-[20px_20px_50px_rgba(0,0,0,0.7)] relative">
            <div className="absolute top-0.5 lg:top-1 w-full flex justify-between px-3 lg:px-5 z-50 text-[4px] lg:text-[6px] font-medium text-stone-900 pointer-events-none">
              <span className="font-bold">9.41</span>
              <div className="flex items-center gap-0.5">
                <svg className="w-1.5 lg:w-2 h-1.5 lg:h-2 opacity-90" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21l-12-14.333c0 0 4.867-3.667 12-3.667s12 3.667 12 3.667l-12 14.333z" />
                </svg>
                <div className="w-[7px] lg:w-[10px] h-[3.5px] lg:h-[5px] border-[0.3px] border-stone-800 rounded-[0.5px] p-[0.2px] relative ml-0.5">
                  <div className="w-full h-full bg-stone-900 rounded-[0.2px]"></div>
                  <div className="absolute -right-[0.8px] top-1/2 -translate-y-1/2 w-[0.5px] h-[1px] bg-stone-800 rounded-r-[0.2px]"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-0.5 lg:top-1 left-1/2 -translate-x-1/2 w-[28%] h-[8px] lg:h-[12px] bg-black rounded-full z-[60] shadow-inner flex items-center justify-end px-1">
              <div className="w-0.5 h-0.5 lg:w-1 lg:h-1 bg-[#1a1a1a] rounded-full border border-stone-800"></div>
            </div>
            <div className="absolute top-16 -left-[1px] w-[1px] h-6 bg-stone-700/50 rounded-l-md"></div>
            <div className="absolute top-28 -left-[1px] w-[1px] h-10 bg-stone-700/50 rounded-l-md"></div>
            <div className="absolute top-44 -left-[1px] w-[1px] h-10 bg-stone-700/50 rounded-l-md"></div>
            <div className="absolute top-32 -right-[1px] w-[1px] h-14 bg-stone-700/50 rounded-r-md"></div>
            <div className={`w-full h-full ${mobileBg.className} pt-4 lg:pt-5 overflow-hidden`} style={mobileBg.style}>
              <img 
                src={mobileImage} 
                alt={`${title} Mobile`} 
                className="w-full h-auto origin-top" 
                style={{ imageRendering: "-webkit-optimize-contrast" }}
              />
            </div>
          </div>
        </div>

        {/* iPad Model */}
        <div 
          className="absolute w-[62%] md:w-[55%] lg:w-[45%] max-w-[460px] aspect-[4/3] transition-transform duration-700 hover:-translate-y-4 hover:scale-105 z-20 -right-2 lg:-right-10 bottom-[-25px] md:bottom-[-10px] lg:bottom-4" 
          style={{ transform: "translateZ(60px) rotateY(-3deg) rotateX(4deg) rotateZ(-1deg)", transformStyle: "preserve-3d" }}
        >
          <div className="w-full h-full border-[4px] lg:border-[7px] border-[#151515] bg-[#0a0a0a] rounded-xl lg:rounded-[1.5rem] overflow-hidden shadow-[15px_20px_40px_rgba(0,0,0,0.6)] relative">
            <div className="absolute top-0.5 lg:top-1 w-full flex justify-between px-1.5 lg:px-2.5 z-50 text-[3.5px] lg:text-[5px] font-medium text-stone-900 pointer-events-none">
              <span className="font-bold">9.41</span>
              <div className="flex items-center gap-1">
                <svg className="w-1.5 lg:w-2 h-1.5 lg:h-2 opacity-70" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21l-12-14.333c0 0 4.867-3.667 12-3.667s12 3.667 12 3.667l-12 14.333z" />
                </svg>
                <div className="w-[6px] lg:w-[9px] h-[3px] lg:h-[4.5px] border-[0.3px] border-stone-800 rounded-[0.5px] p-[0.2px] relative">
                   <div className="w-full h-full bg-stone-900 rounded-[0.1px]"></div>
                   <div className="absolute -right-[0.8px] top-1/2 -translate-y-1/2 w-[0.8px] h-[1px] bg-stone-800 rounded-sm"></div>
                </div>
              </div>
            </div>
            <div className={`w-full h-full ${tabletBg.className} pt-3 lg:pt-4 overflow-hidden`} style={tabletBg.style}>
              <img 
                src={tabletImage} 
                alt={`${title} Tablet`} 
                className="w-full h-auto min-h-full object-cover object-top scale-[1.01] origin-top" 
                style={{ imageRendering: "-webkit-optimize-contrast" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
