import {
    BookOpenText,
    Briefcase,
    Lightbulb,
    PiggyBank,
    Heart,
    UtensilsCrossed,
    Megaphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
  
  export default function newAbout() {
    return (
      <div className="bg-white flex flex-col w-full text-gray-800">
        <section className="w-full h-[500px] relative">
            <img className="w-full h-full object-cover" src="./img/seafoodbuffet/seafood-buffet-1.jpg" />
            <div className="w-full h-full bg-black opacity-60 absolute top-0"></div>
            <div className="flex flex-col gap-4 absolute top-1/3 left-24 text-white max-md:left-8 max-md:top-1/4">
                <h1 className="text-8xl font-bold italic">Our Story</h1>
                <p className="text-3xl italic">Lorem Ipsum</p>
            </div>
        </section>
        <section className="flex justify-end items-center relative">
            <div className="bg-[#ffb24f] absolute rounded-t-xl p-6 top-[-122px] left-16 max-md:p-3 max-md:rounded-t-lg max-md:top-[-82px] max-md:left-8">
                <h2 className="text-4xl font-bold italic max-md:text-xl">OUR MISSION</h2>
            </div>
            <img className="w-1/2 h-[500px] object-cover rounded-r-2xl absolute left-0 max-md:w-3/5 max-md:h-[300px]" src="./img/cheese.png" />
            <div className="w-1/2 h-full flex flex-col bg-[#ffb24f] py-12 gap-4 text-7xl overflow-hidden max-md:w-2/5 max-md:text-4xl max-md:py-4">
                <h3 className="font-bold italic text-nowrap">OUR MISSION OUR MISSION</h3>
                <h3 className="font-bold italic text-nowrap text-white">OUR MISSION OUR MISSION</h3>
                <h3 className="font-bold italic text-nowrap">OUR MISSION OUR MISSION</h3>
                <h3 className="font-bold italic text-nowrap text-white">OUR MISSION OUR MISSION</h3>
            </div>
        </section>
        <section className="flex my-16 mx-24 gap-16 max-lg:flex-col max-sm:mx-8">
            <div className="w-2/5 flex flex-col gap-8 max-lg:w-full">
                <img className="w-full h-full rounded-xl object-cover shadow-xl" src="./img/chopstick/chopstick-4.jpg" />
                <p className="text-3xl italic max-sm:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            </div>
            <div className="w-3/5 flex flex-col gap-8 max-lg:w-full max-lg:flex-col-reverse">
                <p className="text-3xl italic max-sm:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                <img className="w-full h-full rounded-xl object-cover shadow-xl" src="./img/group.png" />
            </div>
        </section>
        <section className="flex items-center relative mt-28">
            <div className="bg-[#ffb24f] absolute rounded-t-xl p-6 top-[-122px] right-16 max-md:p-3 max-md:rounded-t-lg max-md:top-[-82px] max-md:right-8">
                <h2 className="text-4xl font-bold italic max-md:text-xl">OUR STORY</h2>
            </div>
            <div className="w-1/2 h-full flex flex-col bg-[#ffb24f] py-12 gap-4 text-7xl overflow-hidden max-md:w-2/5 max-md:text-4xl max-md:py-4">
                <h3 className="font-bold italic text-nowrap">OUR STORY OUR STORY</h3>
                <h3 className="font-bold italic text-nowrap text-white">OUR STORY OUR STORY</h3>
                <h3 className="font-bold italic text-nowrap">OUR STORY OUR STORY</h3>
                <h3 className="font-bold italic text-nowrap text-white">OUR STORY OUR STORY</h3>
            </div>
            <img className="w-1/2 h-[500px] object-cover rounded-l-2xl absolute right-0 max-md:w-3/5 max-md:h-[300px]" src="./img/yishun.jpg" />
        </section>
        <section className="flex flex-col mx-24 mb-20 relative max-sm:mx-8">
            <div className="flex mt-[100px] pb-16 gap-8 relative">
                <div className="min-w-[10px] h-[100px] bg-[#ffb24f] absolute top-[-100px] left-5"></div>
                <div className="min-w-[50px] h-[50px] bg-[#ffb24f] rounded-full"></div>
                <div className="min-w-[10px] h-full bg-[#ffb24f] absolute left-5"></div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-bold italic max-sm:text-xl">A Challenging Start</h3>
                    <p className="text-3xl italic max-sm:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
            </div>
            <div className="flex pb-16 gap-8 relative">
                <div className="min-w-[50px] h-[50px] bg-[#ffb24f] rounded-full"></div>
                <div className="min-w-[10px] h-full bg-[#ffb24f] absolute left-5"></div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-bold italic max-sm:text-xl">A Challenging Start</h3>
                    <p className="text-3xl italic max-sm:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
            </div>
            <div className="flex pb-16 gap-8 relative">
                <div className="min-w-[50px] h-[50px] bg-[#ffb24f] rounded-full"></div>
                <div className="min-w-[10px] h-full bg-[#ffb24f] absolute left-5"></div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-bold italic max-sm:text-xl">A Challenging Start</h3>
                    <p className="text-3xl italic max-sm:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
            </div>
            <div className="flex pb-16 gap-8 relative">
                <div className="min-w-[50px] h-[50px] bg-[#ffb24f] rounded-full"></div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-bold italic max-sm:text-xl">A Challenging Start</h3>
                    <p className="text-3xl italic max-sm:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
            </div>
        </section>
        <section className="w-full bg-[#ffb24f] relative">
            <div className="bg-black absolute rounded-t-xl p-6 top-[-88px] left-24 max-md:p-3 max-md:rounded-t-lg max-md:top-[-52px] max-md:left-8">
                <h2 className="text-4xl text-white font-bold italic max-md:text-xl">JOIN US</h2>
            </div>
            <div className="bg-white flex flex-col items-center mx-24 my-12 p-16 gap-4 rounded-xl shadow-xl text-center max-sm:mx-8">
                <h2 className="text-5xl font-bold italic max-sm:text-3xl">Become Part of Our Family</h2>
                <p className="text-3xl max-sm:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                <Button className="bg-[#ffb24f] text-2xl px-8 py-6 font-bold italic mt-4">Find Us</Button>
            </div>
        </section>
      </div>
    );
  }
