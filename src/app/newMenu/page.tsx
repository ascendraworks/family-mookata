import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

function newMenu() {
    return (
        <div className="flex flex-col">
            <div className="relative">
                <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 311" fill="none">
                    <defs>
                    <clipPath id="clip-shape">
                        <path d="M0 0L1440 133.189V258.941L0 311V0Z" />
                    </clipPath>
                    </defs>
                    <g clip-path="url(#clip-shape)">
                        <path d="M0 0L1440 133.189V258.941L0 311V0Z" fill="#FFB24F" />
                        <image className="absolute right-0" href="./img/banner.png" x="45%" y="-90%" />
                    </g>
                </svg>
                <div className="flex flex-col absolute gap-2 top-[40%] left-[5%] max-lg:top-[35%] max-md:top-[30%]">
                    <h1 className="text-5xl text-white font-bold italic max-lg:text-4xl">Our Menu</h1>
                    <p className="text-xl text-white italic max-lg:text-lg max-md:text-base">Premium meats & fresh seafood</p>
                </div>
            </div>
            <div className="max-md:hidden">
                <div className="flex flex-col border-b-2 border-[#FFB24F] px-12 pt-12 pb-8 gap-2">
                    <h1 className="text-5xl font-bold italic">Meats</h1>
                    <p className="text-xl italic">Filler text</p>
                </div>
                <div className="flex">
                    <div className="w-fit flex flex-col border-r-2 border-[#FFB24F] px-12 py-8 gap-8 max-md:hidden">
                        <p className="text-2xl max-lg:text-lg">Meats</p>
                        <p className="text-2xl max-lg:text-lg">Seafood</p>
                        <p className="text-2xl max-lg:text-lg">Vegetables</p>
                    </div>
                    <div className="w-4/5 flex grid grid-cols-4 py-8 px-12 gap-8 max-md:w-full max-lg:grid-cols-3">
                        <Card className="h-fit basis-1/4 bg-[#FFF7ED] border-2 border-[#FFB24F] shadow-lg overflow-hidden p-0 gap-0 box-border max-md:basis-1/3">
                            <CardHeader className="px-4 pt-4">
                                <img className="w-full rounded-lg aspect-square object-cover" src="./img/sheila.jpg" />
                            </CardHeader>
                            <CardContent className="flex justify-center pt-4 pb-6">
                                <p className="text-xl font-bold text-center max-lg:text-base">Garlic Pork Slice</p>
                            </CardContent>
                        </Card>
                        <Card className="h-fit basis-1/4 bg-[#FFF7ED] border-2 border-[#FFB24F] shadow-lg overflow-hidden p-0 gap-0 box-border max-md:basis-1/3">
                            <CardHeader className="px-4 pt-4">
                                <img className="w-full rounded-lg aspect-square object-cover" src="./img/sheila.jpg" />
                            </CardHeader>
                            <CardContent className="flex justify-center pt-4 pb-6">
                                <p className="text-xl font-bold text-center max-lg:text-base">Garlic Pork Slice</p>
                            </CardContent>
                        </Card>
                        <Card className="h-fit basis-1/4 bg-[#FFF7ED] border-2 border-[#FFB24F] shadow-lg overflow-hidden p-0 gap-0 box-border max-md:basis-1/3">
                            <CardHeader className="px-4 pt-4">
                                <img className="w-full rounded-lg aspect-square object-cover" src="./img/sheila.jpg" />
                            </CardHeader>
                            <CardContent className="flex justify-center pt-4 pb-6">
                                <p className="text-xl font-bold text-center max-lg:text-base">Garlic Pork Slice</p>
                            </CardContent>
                        </Card>
                        <Card className="h-fit basis-1/4 bg-[#FFF7ED] border-2 border-[#FFB24F] shadow-lg overflow-hidden p-0 gap-0 box-border max-md:basis-1/3">
                            <CardHeader className="px-4 pt-4">
                                <img className="w-full rounded-lg aspect-square object-cover" src="./img/sheila.jpg" />
                            </CardHeader>
                            <CardContent className="flex justify-center pt-4 pb-6">
                                <p className="text-xl font-bold text-center max-lg:text-base">Garlic Pork Slice</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <Accordion className="md:hidden" type="single" collapsible>
                <AccordionItem className="border-[#FFB24F]" value="item-1">
                    <AccordionTrigger className="items-center px-8">
                        <div className="flex flex-col px-12 pt-12 pb-8 gap-2">
                            <h1 className="text-5xl font-bold italic">Meats</h1>
                            <p className="text-xl italic">Filler text</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8">
                        <div className="w-4/5 flex grid grid-cols-4 py-8 px-12 gap-8 max-md:w-full max-lg:grid-cols-3 max-md:grid-cols-2">
                            <Card className="h-fit basis-1/4 bg-[#FFF7ED] border-2 border-[#FFB24F] shadow-lg overflow-hidden p-0 gap-0 box-border max-md:basis-1/3">
                                <CardHeader className="px-4 pt-4">
                                    <img className="w-full rounded-lg aspect-square object-cover" src="./img/sheila.jpg" />
                                </CardHeader>
                                <CardContent className="flex justify-center pt-4 pb-6">
                                    <p className="text-xl font-bold text-center">Garlic Pork Slice</p>
                                </CardContent>
                            </Card>
                            <Card className="h-fit basis-1/4 bg-[#FFF7ED] border-2 border-[#FFB24F] shadow-lg overflow-hidden p-0 gap-0 box-border max-md:basis-1/3">
                                <CardHeader className="px-4 pt-4">
                                    <img className="w-full rounded-lg aspect-square object-cover" src="./img/sheila.jpg" />
                                </CardHeader>
                                <CardContent className="flex justify-center pt-4 pb-6">
                                    <p className="text-xl font-bold text-center">Garlic Pork Slice</p>
                                </CardContent>
                            </Card>
                            <Card className="h-fit basis-1/4 bg-[#FFF7ED] border-2 border-[#FFB24F] shadow-lg overflow-hidden p-0 gap-0 box-border max-md:basis-1/3">
                                <CardHeader className="px-4 pt-4">
                                    <img className="w-full rounded-lg aspect-square object-cover" src="./img/sheila.jpg" />
                                </CardHeader>
                                <CardContent className="flex justify-center pt-4 pb-6">
                                    <p className="text-xl font-bold text-center">Garlic Pork Slice</p>
                                </CardContent>
                            </Card>
                            <Card className="h-fit basis-1/4 bg-[#FFF7ED] border-2 border-[#FFB24F] shadow-lg overflow-hidden p-0 gap-0 box-border max-md:basis-1/3">
                                <CardHeader className="px-4 pt-4">
                                    <img className="w-full rounded-lg aspect-square object-cover" src="./img/sheila.jpg" />
                                </CardHeader>
                                <CardContent className="flex justify-center pt-4 pb-6">
                                    <p className="text-xl font-bold text-center">Garlic Pork Slice</p>
                                </CardContent>
                            </Card>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem className="border-[#FFB24F]" value="item-2">
                    <AccordionTrigger className="items-center px-8">
                        <div className="flex flex-col px-12 pt-12 pb-8 gap-2">
                            <h1 className="text-5xl font-bold italic">Seafood</h1>
                            <p className="text-xl italic">Filler text</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8">
                        <div className="w-4/5 flex grid grid-cols-4 py-8 px-12 gap-8 max-md:w-full max-lg:grid-cols-3 max-md:grid-cols-2">
                            <Card className="h-fit basis-1/4 bg-[#FFF7ED] border-2 border-[#FFB24F] shadow-lg overflow-hidden p-0 gap-0 box-border max-md:basis-1/3">
                                <CardHeader className="px-4 pt-4">
                                    <img className="w-full rounded-lg aspect-square object-cover" src="./img/sheila.jpg" />
                                </CardHeader>
                                <CardContent className="flex justify-center pt-4 pb-6">
                                    <p className="text-xl font-bold text-center">Garlic Pork Slice</p>
                                </CardContent>
                            </Card>
                            <Card className="h-fit basis-1/4 bg-[#FFF7ED] border-2 border-[#FFB24F] shadow-lg overflow-hidden p-0 gap-0 box-border max-md:basis-1/3">
                                <CardHeader className="px-4 pt-4">
                                    <img className="w-full rounded-lg aspect-square object-cover" src="./img/sheila.jpg" />
                                </CardHeader>
                                <CardContent className="flex justify-center pt-4 pb-6">
                                    <p className="text-xl font-bold text-center">Garlic Pork Slice</p>
                                </CardContent>
                            </Card>
                            <Card className="h-fit basis-1/4 bg-[#FFF7ED] border-2 border-[#FFB24F] shadow-lg overflow-hidden p-0 gap-0 box-border max-md:basis-1/3">
                                <CardHeader className="px-4 pt-4">
                                    <img className="w-full rounded-lg aspect-square object-cover" src="./img/sheila.jpg" />
                                </CardHeader>
                                <CardContent className="flex justify-center pt-4 pb-6">
                                    <p className="text-xl font-bold text-center">Garlic Pork Slice</p>
                                </CardContent>
                            </Card>
                            <Card className="h-fit basis-1/4 bg-[#FFF7ED] border-2 border-[#FFB24F] shadow-lg overflow-hidden p-0 gap-0 box-border max-md:basis-1/3">
                                <CardHeader className="px-4 pt-4">
                                    <img className="w-full rounded-lg aspect-square object-cover" src="./img/sheila.jpg" />
                                </CardHeader>
                                <CardContent className="flex justify-center pt-4 pb-6">
                                    <p className="text-xl font-bold text-center">Garlic Pork Slice</p>
                                </CardContent>
                            </Card>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem className="border-[#FFB24F]" value="item-3">
                    <AccordionTrigger className="items-center px-8">
                        <div className="flex flex-col px-12 pt-12 pb-8 gap-2">
                            <h1 className="text-5xl font-bold italic">Vegetables</h1>
                            <p className="text-xl italic">Filler text</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8">
                        <div className="w-4/5 flex grid grid-cols-4 py-8 px-12 gap-8 max-md:w-full max-lg:grid-cols-3 max-md:grid-cols-2">
                            <Card className="h-fit basis-1/4 bg-[#FFF7ED] border-2 border-[#FFB24F] shadow-lg overflow-hidden p-0 gap-0 box-border max-md:basis-1/3">
                                <CardHeader className="px-4 pt-4">
                                    <img className="w-full rounded-lg aspect-square object-cover" src="./img/sheila.jpg" />
                                </CardHeader>
                                <CardContent className="flex justify-center pt-4 pb-6">
                                    <p className="text-xl font-bold text-center">Garlic Pork Slice</p>
                                </CardContent>
                            </Card>
                            <Card className="h-fit basis-1/4 bg-[#FFF7ED] border-2 border-[#FFB24F] shadow-lg overflow-hidden p-0 gap-0 box-border max-md:basis-1/3">
                                <CardHeader className="px-4 pt-4">
                                    <img className="w-full rounded-lg aspect-square object-cover" src="./img/sheila.jpg" />
                                </CardHeader>
                                <CardContent className="flex justify-center pt-4 pb-6">
                                    <p className="text-xl font-bold text-center">Garlic Pork Slice</p>
                                </CardContent>
                            </Card>
                            <Card className="h-fit basis-1/4 bg-[#FFF7ED] border-2 border-[#FFB24F] shadow-lg overflow-hidden p-0 gap-0 box-border max-md:basis-1/3">
                                <CardHeader className="px-4 pt-4">
                                    <img className="w-full rounded-lg aspect-square object-cover" src="./img/sheila.jpg" />
                                </CardHeader>
                                <CardContent className="flex justify-center pt-4 pb-6">
                                    <p className="text-xl font-bold text-center">Garlic Pork Slice</p>
                                </CardContent>
                            </Card>
                            <Card className="h-fit basis-1/4 bg-[#FFF7ED] border-2 border-[#FFB24F] shadow-lg overflow-hidden p-0 gap-0 box-border max-md:basis-1/3">
                                <CardHeader className="px-4 pt-4">
                                    <img className="w-full rounded-lg aspect-square object-cover" src="./img/sheila.jpg" />
                                </CardHeader>
                                <CardContent className="flex justify-center pt-4 pb-6">
                                    <p className="text-xl font-bold text-center">Garlic Pork Slice</p>
                                </CardContent>
                            </Card>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>

        
    );
}

export default newMenu;
