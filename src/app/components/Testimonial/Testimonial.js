
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Testimonial() {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 2000,
    arrows: false,
    autoplay: false,
    centerMode: true,
    centerPadding: "10px",
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="testimonial ">
    <div
      className="bg-[#E0F3FB] max-h-[450px] py-12 lg:px-12 md:px-5 px-3 rounded-lg hidden md:block "
      style={{
        backgroundImage:
          "linear-gradient(-62deg, #EEF7FB 0 50%, #EEF7FB 0% 100%)",
        width: "100%",
      }}
    >
      <div className="lg:container mx-auto   px-0 sm:max-h-[350px]">
        <div className="text-center">
          <h2 className="font-extrabold text-5xl mb-6 text-[#48AEDD]">
            What our customers Are Saying
          </h2>
          <p
            className={`max-w-2xl font-[200] font-recoletaBold mx-auto mb-12 lg:mb-24 `}
          >
            My clients and students are always pleased with my detailed
            skills  and explanations. Read what my clients are saying about how I helped
            them make a difference in their lives.
          </p>
        </div>
        <Slider {...settings} className="cursor-all-scroll">

          <div className="slider-card flex" style={{ paddingLeft: "0px" }}>
            <div
              className=" bg-white swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto   rounded-2xl p-4 lg:p-6 min-h-[250px]  swiper-slide-active"
              style={{
                backgroundImage:
                  "linear-gradient(5deg, #48AFDE 0 10%, white 0% 10%)",
              }}
            >
              <div className=" flex">
                <div className="min-w-[100px]">
                  <Image
                  height={25}
                  width={25}
                    className="mb-3 md:mb-0  h-20 w-20 rounded-full"
                    src="/avatar.png"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
                  <div className="font-medium text-base">Daisy Dominic</div>
                  <div
                    className={`font-[300] ${hind.className} font-medium text-[#48AEDD]`}
                  >
                    Decagon Student(Engineer)
                  </div>
                  <p
                    className={`mb-6 font-[200] font-recoletablack min-h-[70px] text-[15px] mt-3`}
                  >
                    Your passion for the subject matter is infectious, making every class engaging and inspiring. 
                    Your dedication to our learning goes beyond the curriculum. thank
                    you. nobody.. seriously nobody teaches this way explaining
                    every class and everything you write.
                    you are the best. the amazing guide. thanks Dammy. thanks a
                    ton.❤️❤️❤️❤️❤️
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*copy and paste  it as many times as you  like
   Render  the componanet within parant page.tsx
   */}

          <div className="slider-card flex" style={{ paddingLeft: "0px" }}>
            <div
              className="swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto  mt-5 rounded-2xl p-4 lg:p-6 min-h-[250px]swiper-slide-active"
              style={{
                backgroundImage:
                  "linear-gradient(5deg, #48AFDE 0 10%, white 0% 90%)",
              }}
            >
              <div className=" flex">
                <div className="min-w-[100px]">
                  <Image
                  height={25}
                  width={25}
                    className="mb-3 md:mb-0  h-20 w-20 rounded-full"
                    src="/avatar.png"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
                  <div className="font-medium text-base">John Oamen</div>
                  <div
                    className={`font-[300] ${hind.className} font-medium text-[#48AEDD]`}
                  >
                    CEO Cutstruct
                  </div>
                  <p
                    className={`mb-6 font-[200] font-recoletablack min-h-[70px] text-[15px] mt-3`}
                  >  
                  Working with Dammy has been nothing short of extraordinary. His expertise, 
                  dedication, and innovative thinking have been invaluable assets to our team 
                  and company. Time and time again, he have demonstrated an unparalleled commitment 
                  to excellence, consistently delivering top-notch solutions that exceed expectations. 
                  His ability to tackle complex problems with grace and efficiency is truly commendable.⭐️⭐️⭐️⭐️⭐️
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-card flex" style={{ paddingLeft: "0px" }}>
            <div
              className="swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto   rounded-2xl p-4 lg:p-6 min-h-[250px] bg-white swiper-slide-active"
              style={{
                backgroundImage:
                  "linear-gradient(5deg, #48AFDE 0 10%, white 0% 100%)",
              }}
            >
              <div className=" flex">
                <div className="min-w-[100px]">
                  <Image
                  height={25}
                  width={25}
                    className="mb-3 md:mb-0  h-20 w-20 rounded-full"
                    src="/avatar.png"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
                  <div className="font-medium text-base">Kelvin</div>
                  <div
                    className={`font-[300] ${hind.className} font-medium text-[#48AEDD]`}
                  >
                    WiseDrive(Co-founder)
                  </div>
                  <p
                    className={`mb-6 font-[200] font-recoletablack min-h-[70px] text-[15px] mt-3`}
                  >
                   Beyond Dammy&apos;s impressive coding skills, he bring a level of creativity 
                   and problem-solving acumen that is truly remarkable. His ability to translate 
                   our vision into reality, coupled with their relentless drive for excellence, 
                   sets them apart. I am incredibly grateful for his contributions and commitment 
                   to our shared goals. 💙💙💙💙💙
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-card flex" style={{ paddingLeft: "0px" }}>
            <div
              className="swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto   rounded-2xl p-4 lg:p-6 min-h-[250px] bg-white swiper-slide-active"
              style={{
                backgroundImage:
                  "linear-gradient(5deg, #48AFDE 0 10%, white 0% 100%)",
              }}
            >
              <div className=" flex">
                <div className="min-w-[100px]">
                  <Image
                  height={25}
                  width={25}
                    className="mb-3 md:mb-0  h-20 w-20 rounded-full"
                    src="/avatar.png"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
                  <div className="font-medium text-base">Amaka Success</div>
                  <div
                    className={`font-[300] ${hind.className} font-medium text-[#48AEDD]`}
                  >
                    Decagon Student(Engineer)
                  </div>
                  <p
                    className={`mb-6 font-[200] font-recoletablack min-h-[70px] text-[15px] mt-3`}
                  >
                    Studying under Dammy has been a transformative experience. His passion for 
                    the subject matter is palpable, and their dedication to our learning journey 
                    is evident in every interaction. Dammy has a unique ability to break down 
                    complex concepts into digestible pieces, making even the most challenging 
                    material accessible to all. Beyond the classroom, he serve as a mentor, 
                    offering guidance and support that extends far beyond the curriculum. 
                    I am immensely grateful for his mentorship and the impact he have had 
                    on my coding skills and personal growth. Thank you for inspiring us to reach new 
                    heights!.❤️❤️❤️❤️❤️
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-card flex" style={{ paddingLeft: "0px" }}>
            <div
              className="swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto   rounded-2xl p-4 lg:p-6 min-h-[250px] bg-white swiper-slide-active"
              style={{
                backgroundImage:
                  "linear-gradient(4deg, #48AFDE 0 10%, white 0% 100%)",
              }}
            >
              <div className=" flex">
                <div className="min-w-[100px]">
                  <Image
                  height={25}
                  width={25}
                    className="mb-3 md:mb-0  h-20 w-20 rounded-full"
                    src="/avatar.png"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
                  <div className="font-medium text-base">Joshua Dogubo</div>
                  <div
                    className={`font-[500] ${hind.className} font-medium text-[#48AEDD]`}
                  >
                    Decagon Student(Engineer)
                  </div>
                  <p
                    className={`mb-6 font-[200] font-recoletablack min-h-[70px] text-[15px] mt-3`}
                  >
                    
                   Being a student under Dammy has been an incredible experience. His passion for 
                   teaching is contagious, and his dedication to our success is unmatched. 
                   Dammy goes above and beyond to ensure that each of us not only understands the material 
                   but also feels empowered to excel.⭐️⭐️⭐️⭐️⭐️
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  </div>

  );
}
