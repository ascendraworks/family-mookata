import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UtensilsCrossed, BookOpenText, Briefcase, Lightbulb, PiggyBank, Heart } from "lucide-react";

function newAbout() {
    return (
        <div className="flex justify-center">
            <div className="max-w-[1440px] px-12 pt-4">
                <div className="flex flex-col items-center pb-8 gap-4 max-sm:px-8">
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="text-5xl font-bold italic">Discover Family Mookata</h1>
                        <p className="text-xl italic text-center">Your go-to destination for authentic Thai Mookata, where flavor meets family and affordability.</p>
                    </div>
                </div>
                <Card className="flex flex-row rounded-xl mt-4 mb-8 border-2 border-orange-500 overflow-hidden py-0 gap-0">
                    <img className="w-1/2 h-full" src="./img/about.png" />
                    <CardContent className="flex flex-col px-12 py-8 gap-4">
                        <div className="flex items-center gap-4">
                            <UtensilsCrossed className="h-8 w-8 text-orange-500" />
                            <h2 className="text-3xl text-orange-500 font-bold">More than just a meal</h2>
                        </div>
                        <p>At Family Mookata, we bring Thai BBQ and steamboat culture to Singapore in the most delicious, affordable way possible. We take pride in marinating our meats and preparing our signature chili in-house, ensuring fresh, bold flavors with no MSG or preservatives. Combined with fresh seafood and rich, handmade broths, it’s perfect for both family dinners and late-night cravings.</p>
                    </CardContent>
                </Card>
                <div className="flex flex-col items-center mt-16 mb-8">
                    <BookOpenText className="h-12 w-12 text-[#FFA500] mx-auto mb-3" />
                    <h2 className="text-3xl sm:text-5xl font-bold">Our Journey</h2>
                    <p className="text-xl mt-2">The story of Family Mookata, built on resilience and love for food.</p>
                </div>
                <div className="flex my-8 gap-8">
                    <Card className="bg-white shadow-lg border-2 border-orange-500 flex flex-col">
                        <CardHeader className="text-center">
                            <Briefcase className="h-10 w-10 text-[#FF8C00] mx-auto mb-2" />
                            <CardTitle className="text-xl text-[#FF8C00] font-semibold">A Challenging Start</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-600 space-y-3 text-sm flex-grow">
                            <p className="text-center">
                                In 2020, COVID-19 brought widespread job losses, affecting our founder. With a large family to support, the high cost of dining out became a pressing concern.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-white shadow-lg border-2 border-orange-500 flex flex-col mt-0 md:mt-4 lg:mt-0">
                        <CardHeader className="text-center">
                            <Lightbulb className="h-10 w-10 text-[#FF8C00] mx-auto mb-2" />
                            <CardTitle className="text-xl text-[#FF8C00] font-semibold">The Idea Ignites</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-600 space-y-3 text-sm flex-grow">
                            <p className="text-center">
                                This challenge, coupled with a deep love for family meals and gatherings, sparked the vision for Family Mookata – a place for affordable, joyful dining.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white shadow-lg border-2 border-orange-500 flex flex-col">
                        <CardHeader className="text-center">
                            <PiggyBank className="h-10 w-10 text-[#FF8C00] mx-auto mb-2" />
                            <CardTitle className="text-xl text-[#FF8C00] font-semibold">Our Unique Offer</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-600 space-y-3 text-sm flex-grow">
                            <p className="text-center">
                                Driven by passion and accessibility, we launched <em>Singapore’s FIRST CHEAPEST Mookata buffet</em>, designed for everyone to enjoy without financial worry.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white shadow-lg border-2 border-orange-500 flex flex-col mt-0 md:mt-4 lg:mt-0">
                        <CardHeader className="text-center">
                            <Heart className="h-10 w-10 text-[#FF8C00] mx-auto mb-2" />
                            <CardTitle className="text-xl text-[#FF8C00] font-semibold">More Than a Meal</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-600 space-y-3 text-sm flex-grow">
                            <p className="text-center">
                                Family Mookata is built on resilience, love, and the joy of shared food. It’s a welcoming space for all to gather, connect, and create memories.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default newAbout;
