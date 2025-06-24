"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".fade-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white flex flex-col w-full text-gray-800">
      <style jsx>{`
        @keyframes flowRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes flowLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .flow-right {
          animation: flowRight 60s linear infinite;
        }

        .flow-left {
          animation: flowLeft 60s linear infinite;
        }

        .scrolling-text {
          display: flex;
          white-space: nowrap;
        }

        .fade-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section className="w-full h-[500px] relative">
        <img
          className="w-full h-full object-cover"
          src="./img/seafoodbuffet/seafood-buffet-1.jpg"
        />
        <div className="w-full h-full bg-black opacity-60 absolute top-0"></div>
        <div className="flex flex-col gap-4 absolute top-1/3 left-24 text-white max-md:left-8 max-md:top-1/4 fade-on-scroll">
          <h1 className="text-8xl font-bold italic">Our Story</h1>
          <p className="text-3xl italic">
            Fresh Ingredients. Warm Atmosphere. Lasting Memories.
          </p>
        </div>
      </section>

      <section className="flex justify-end items-center relative fade-on-scroll">
        <div className="bg-[#ffb24f] absolute rounded-t-xl p-6 top-[-118px] left-16 max-md:p-3 max-md:rounded-t-lg max-md:top-[-82px] max-md:left-8">
          <h2 className="text-3xl font-bold italic max-md:text-xl">
            OUR MISSION
          </h2>
        </div>
        <img
          className="w-1/2 h-[500px] object-cover rounded-r-2xl absolute left-0 max-md:w-3/5 max-md:h-[300px]"
          src="./img/cheese.png"
        />
        <div className="w-1/2 h-full flex flex-col bg-[#ffb24f] py-12 gap-4 text-7xl overflow-hidden max-md:w-2/5 max-md:text-4xl max-md:py-4">
          <div className="scrolling-text">
            <h3 className="font-bold italic text-nowrap flow-right pr-8">
              OUR MISSION OUR MISSION OUR MISSION OUR MISSION OUR MISSION OUR
              MISSION OUR MISSION OUR MISSION OUR MISSION OUR MISSION OUR
              MISSION OUR MISSION
            </h3>
            <h3 className="font-bold italic text-nowrap flow-right pr-8">
              OUR MISSION OUR MISSION OUR MISSION OUR MISSION OUR MISSION OUR
              MISSION OUR MISSION OUR MISSION OUR MISSION OUR MISSION OUR
              MISSION OUR MISSION
            </h3>
          </div>
          <div className="scrolling-text">
            <h3 className="font-bold italic text-nowrap text-white flow-left pr-8">
              OUR MISSION OUR MISSION OUR MISSION OUR MISSION OUR MISSION OUR
              MISSION OUR MISSION OUR MISSION OUR MISSION OUR MISSION OUR
              MISSION OUR MISSION
            </h3>
            <h3 className="font-bold italic text-nowrap text-white flow-left pr-8">
              OUR MISSION OUR MISSION OUR MISSION OUR MISSION OUR MISSION OUR
              MISSION OUR MISSION OUR MISSION OUR MISSION OUR MISSION OUR
              MISSION OUR MISSION
            </h3>
          </div>
          <div className="scrolling-text">
            <h3 className="font-bold italic text-nowrap flow-right pr-8">
              OUR MISSION OUR MISSION OUR MISSION OUR MISSION OUR MISSION OUR
              MISSION OUR MISSION OUR MISSION OUR MISSION OUR MISSION OUR
              MISSION OUR MISSION
            </h3>
            <h3 className="font-bold italic text-nowrap flow-right pr-8">
              OUR MISSION OUR MISSION OUR MISSION OUR MISSION OUR MISSION OUR
              MISSION OUR MISSION OUR MISSION OUR MISSION OUR MISSION OUR
              MISSION OUR MISSION
            </h3>
          </div>
          <div className="scrolling-text">
            <h3 className="font-bold italic text-nowrap text-white flow-left pr-8">
              OUR MISSION OUR MISSION OUR MISSION OUR MISSION OUR MISSION OUR
              MISSION OUR MISSION OUR MISSION OUR MISSION OUR MISSION OUR
              MISSION OUR MISSION
            </h3>
            <h3 className="font-bold italic text-nowrap text-white flow-left pr-8">
              OUR MISSION OUR MISSION OUR MISSION OUR MISSION OUR MISSION OUR
              MISSION OUR MISSION OUR MISSION OUR MISSION OUR MISSION OUR
              MISSION OUR MISSION
            </h3>
          </div>
        </div>
      </section>

      <section className="flex my-16 mx-24 gap-16 max-lg:flex-col max-sm:mx-8">
        {/* Left column: image + closing paras */}
        <div className="w-2/5 flex flex-col gap-8 max-lg:w-full fade-on-scroll">
          <img
            className="w-full h-full rounded-xl object-cover shadow-xl"
            src="./img/chopstick/chopstick-4.jpg"
          />

          <p className="text-xl leading-relaxed max-sm:text-base">
            <span className="font-semibold">
              Affordable pricing, premium experience.
            </span>{" "}
            Our regulars call us{" "}
            <span className="font-bold text-orange-600">
              Singapore&apos;s best-value mookata
            </span>{" "}
            — top-quality food, without the premium price tag.
          </p>

          <p className="text-xl leading-relaxed max-sm:text-base">
            <span className="font-semibold">More than a meal,</span> Family
            Mookata is where{" "}
            <span className="font-semibold">families gather</span>,{" "}
            <span className="font-semibold">friends reconnect</span>, and great
            conversations happen over a sizzling grill.
          </p>
        </div>

        {/* Right column: image + intro paras */}
        <div className="w-3/5 flex flex-col gap-8 max-lg:w-full max-lg:flex-col-reverse fade-on-scroll">
          <p className="text-3xl font-bold leading-snug max-sm:text-2xl">
            Bringing Authentic Thai BBQ & Steamboat to Singapore —{" "}
            <span className="text-orange-600">
              Fresh, Bold, Always Affordable.
            </span>
          </p>

          <p className="text-xl leading-relaxed max-sm:text-base">
            <span className="font-semibold">
              Every cut of meat is marinated in-house.
            </span>{" "}
            Our <span className="font-semibold">signature chili</span> is
            prepared fresh daily. No shortcuts.{" "}
            <span className="italic">No MSG. No preservatives.</span> Just{" "}
            <span className="font-semibold">bold, honest flavors</span> that
            keep you coming back.
          </p>

          <p className="text-xl leading-relaxed max-sm:text-base">
            From <span className="font-semibold">premium seafood</span> to rich{" "}
            <span className="font-semibold">handmade broths</span>, every
            ingredient is selected for maximum flavor, every time you dine with
            us.
          </p>
          <img
            className="w-full h-full rounded-xl object-cover shadow-xl"
            src="./img/group.png"
          />
        </div>
      </section>

      <section className="flex items-center relative mt-28 fade-on-scroll">
        <div className="bg-[#ffb24f] absolute rounded-t-xl p-6 top-[-118px] right-16 max-md:p-3 max-md:rounded-t-lg max-md:top-[-82px] max-md:right-8">
          <h2 className="text-3xl font-bold italic max-md:text-xl">
            OUR STORY
          </h2>
        </div>
        <div className="w-1/2 h-full flex flex-col bg-[#ffb24f] py-12 gap-4 text-7xl overflow-hidden max-md:w-2/5 max-md:text-4xl max-md:py-4">
          <div className="scrolling-text">
            <h3 className="font-bold italic text-nowrap flow-right pr-8">
              OUR STORY OUR STORY OUR STORY OUR STORY OUR STORY OUR STORY OUR
              STORY OUR STORY OUR STORY OUR STORY OUR STORY OUR STORY
            </h3>
            <h3 className="font-bold italic text-nowrap flow-right pr-8">
              OUR STORY OUR STORY OUR STORY OUR STORY OUR STORY OUR STORY OUR
              STORY OUR STORY OUR STORY OUR STORY OUR STORY OUR STORY
            </h3>
          </div>
          <div className="scrolling-text">
            <h3 className="font-bold italic text-nowrap text-white flow-left pr-8">
              OUR STORY OUR STORY OUR STORY OUR STORY OUR STORY OUR STORY OUR
              STORY OUR STORY OUR STORY OUR STORY OUR STORY OUR STORY
            </h3>
            <h3 className="font-bold italic text-nowrap text-white flow-left pr-8">
              OUR STORY OUR STORY OUR STORY OUR STORY OUR STORY OUR STORY OUR
              STORY OUR STORY OUR STORY OUR STORY OUR STORY OUR STORY
            </h3>
          </div>
          <div className="scrolling-text">
            <h3 className="font-bold italic text-nowrap flow-right pr-8">
              OUR STORY OUR STORY OUR STORY OUR STORY OUR STORY OUR STORY OUR
              STORY OUR STORY OUR STORY OUR STORY OUR STORY OUR STORY
            </h3>
            <h3 className="font-bold italic text-nowrap flow-right pr-8">
              OUR STORY OUR STORY OUR STORY OUR STORY OUR STORY OUR STORY OUR
              STORY OUR STORY OUR STORY OUR STORY OUR STORY OUR STORY
            </h3>
          </div>
          <div className="scrolling-text">
            <h3 className="font-bold italic text-nowrap text-white flow-left pr-8">
              OUR STORY OUR STORY OUR STORY OUR STORY OUR STORY OUR STORY OUR
              STORY OUR STORY OUR STORY OUR STORY OUR STORY OUR STORY
            </h3>
            <h3 className="font-bold italic text-nowrap text-white flow-left pr-8">
              OUR STORY OUR STORY OUR STORY OUR STORY OUR STORY OUR STORY OUR
              STORY OUR STORY OUR STORY OUR STORY OUR STORY OUR STORY
            </h3>
          </div>
        </div>
        <img
          className="w-1/2 h-[500px] object-cover rounded-l-2xl absolute right-0 max-md:w-3/5 max-md:h-[300px]"
          src="./img/yishun.jpg"
        />
      </section>

      <section className="flex flex-col mx-24 mb-20 relative max-sm:mx-8">
        <div className="flex mt-[100px] pb-16 gap-8 relative fade-on-scroll">
          <div className="min-w-[10px] h-[100px] bg-[#ffb24f] absolute top-[-100px] left-5"></div>
          <div className="min-w-[50px] h-[50px] bg-[#ffb24f] rounded-full"></div>
          <div className="min-w-[10px] h-full bg-[#ffb24f] absolute left-5"></div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold italic max-sm:text-xl">
              A Challenging Start
            </h3>
            <p className="text-2xl italic max-sm:text-xl">
              In 2020, COVID-19 brought widespread job losses, affecting our
              founder. With a large family to support, the high cost of dining
              out became a pressing concern.
            </p>
          </div>
        </div>
        <div className="flex pb-16 gap-8 relative fade-on-scroll">
          <div className="min-w-[50px] h-[50px] bg-[#ffb24f] rounded-full"></div>
          <div className="min-w-[10px] h-full bg-[#ffb24f] absolute left-5"></div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold italic max-sm:text-xl">
              The Idea Ignites
            </h3>
            <p className="text-2xl italic max-sm:text-xl">
              This challenge, coupled with a deep love for family meals and
              gatherings, sparked the vision for Family Mookata – a place for
              affordable, joyful dining.
            </p>
          </div>
        </div>
        <div className="flex pb-16 gap-8 relative fade-on-scroll">
          <div className="min-w-[50px] h-[50px] bg-[#ffb24f] rounded-full"></div>
          <div className="min-w-[10px] h-full bg-[#ffb24f] absolute left-5"></div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold italic max-sm:text-xl">
              Our Unique Offer
            </h3>
            <p className="text-2xl italic max-sm:text-xl">
              Driven by passion and accessibility, we launched Singapore&apos;s
              FIRST CHEAPEST Mookata buffet, designed for everyone to enjoy
              without financial worry.
            </p>
          </div>
        </div>
        <div className="flex pb-16 gap-8 relative fade-on-scroll">
          <div className="min-w-[50px] h-[50px] bg-[#ffb24f] rounded-full"></div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold italic max-sm:text-xl">
              More Than a Meal
            </h3>
            <p className="text-2xl italic max-sm:text-xl">
              Family Mookata is built on resilience, love, and the joy of shared
              food. It&apos;s a welcoming space for all to gather, connect, and
              create memories.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#ffb24f] relative fade-on-scroll">
        <div className="bg-black absolute rounded-t-xl p-6 top-[-84px] left-24 max-md:p-3 max-md:rounded-t-lg max-md:top-[-52px] max-md:left-8">
          <h2 className="text-3xl text-white font-bold italic max-md:text-xl">
            JOIN US
          </h2>
        </div>
        <div className="bg-white flex flex-col items-center mx-24 my-12 p-16 gap-4 rounded-xl shadow-xl text-center max-sm:mx-8">
          <h2 className="text-4xl font-bold italic max-sm:text-3xl">
            Become Part of Our Family
          </h2>
          <p className="text-2xl max-sm:text-xl">
            Find a Family Mookata outlet near you and start your sizzling
            experience today.
          </p>
          <Button className="bg-[#ffb24f] text-xl px-8 py-6 font-bold italic mt-4">
            <a href="/locations">View Locations</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
