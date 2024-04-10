'use client'
import React, { useEffect, useState } from "react";
import MySlider from "./components/SliderCard/MySlider";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import { Hind } from "next/font/google";
import AboutMe from "./components/AboutMe/AboutMe";
import Testimonial from "./components/Testimonial/Testimonial";
import CallToAction from "./components/CallToAction/CallToAction";

const hind = Hind({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
  });
  
export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="min-h-screen relative">
      <HomeComponent/> 
      <div
      className="mt-0 pt-5 -mb-40"
      id="portfolio"
      style={{
        backgroundImage:
        "linear-gradient(-62deg, #EEF7FB 0 50%,  white 0% 100%)",
        width: "100%",
      }}
      >
          <div className="container m-auto">
          <p
            className="text-[300px]  text-[#F7FBFD] md:pl-[50px] px-5 max-w-[750px] w-[100%] overflow-hidden"
            style={{ transform: "translate(0px,-20px)" }}
          >
            Portfolio
          </p>
          <div className="" style={{ transform: "translate(0px, -290px)" }}>
            <p className="text-[#48AFDE]  md:pl-[80px] px-5 font-extrabold text-5xl">
              Recent Works
            </p>
            <p
              className={`max-w-2xl md:pl-[80px] px-5 font-[300] text-[16px] text-[#47626D] leading-8 mt-5 ${hind.className}`}
            >
              Here are a few of my most recent work. As a 
              full-stack web Engineer, I constantly prioritise 100% client
              satisfaction. I always enjoy working on my projects, so each one
              is a new adventure for me. While working on each new project, I
              attempt to learn new things. As a result, my coding skills are always topnotch.
            </p>
          </div>
        </div>
        <div 
        style={{ transform: "translate(0px,-230px)" }}
        >
          <MySlider/>
        </div>
      </div>
      <AboutMe/>
      <Testimonial/>
      <CallToAction/>
    </main>
  );
}
