import { Phone, Instagram, Facebook } from "lucide-react";

function NewFooter() {
    return (
        <div className="h-1/3 w-full flex justify-between bg-[#FFB24F] px-12 py-8 max-sm:flex-col max-sm:gap-8">
            <div className="flex flex-col gap-2">
                <h1 className="text-5xl text-white font-bold italic">Family Mookata</h1>
                <p className="text-xl text-white">Cheapest Mookata Buffet in Singapore starting from <span className="text-orange-500 font-bold italic">ONLY</span> $9.90</p>
            </div>
            <div className="flex flex-col text-white gap-4">
                <div className="flex gap-4">
                    <Phone />
                    <div>
                        <p>+65 8927 2782 (AMK & Yishun)</p>
                        <p>+65 8188 4738 (Bedok)</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Instagram />
                    <p>Instagram</p>
                </div>
                <div className="flex gap-4">
                    <Facebook />
                    <p>Facebook</p>
                </div>
                <div className="flex gap-4">
                    <img className="w-6 h-6 invert" src="/tiktok.svg" />
                    <p>TikTok</p>
                </div>
            </div>
        </div>
    );
}

export default NewFooter;
