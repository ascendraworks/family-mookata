"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Flag, Clock, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function newLocations() {
    return (
        <div className="flex justify-center">
            <div className="max-w-[1440px]">
                <div className="flex flex-col items-center pb-8 gap-8">
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="text-5xl font-bold italic">Find Us</h1>
                        <p className="text-xl italic">Get directions to the outlet nearest to you</p>
                    </div>
                    <div className="bg-[#FFB24F] w-1/2 flex items-center rounded-lg p-3 pr-6 gap-6">
                        <Input className="bg-white" placeholder="Enter address or postal code" />
                        <Search className="h-8 w-8 text-white" />
                    </div>
                </div>
                <div className="w-full flex justify-center relative">
                    <img className="w-4/5" src="./img/new-map.png" />
                    <Flag className="h-[7%] w-[7%] text-[#FFB24F] absolute top-[15%] left-[45%]" />
                    <Flag className="h-[7%] w-[7%] text-[#FFB24F] absolute top-[40%] left-[55%]" />
                    <Flag className="h-[7%] w-[7%] text-[#FFB24F] absolute top-[45%] left-[70%]" />
                </div>
                <div className="flex flex-col items-center pt-8">
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="text-3xl font-bold italic">Directions to 670438</h1>
                        <p className="text-xl italic">Filler text</p>
                    </div>
                    <div className="w-full flex p-8 gap-4 max-md:flex-col">
                        <Card className="w-1/3 max-md:w-full">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold">Yishun Branch</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <Flag className="h-8 min-w-8" />
                                    <p>6 Yishun Industrial Street 1 Northview Bizhub, Singapore 760090</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Clock className="h-8 w-8" />
                                    <p>1PM - 11PM</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="h-8 w-8" />
                                    <p>+65 8927 2782</p>
                                </div>
                                <Button className="bg-[#FFB24F] mt-4">Directions</Button>
                            </CardContent>
                        </Card>
                        <Card className="w-1/3 max-md:w-full">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold">Yishun Branch</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <Flag className="h-8 min-w-8" />
                                    <p>6 Yishun Industrial Street 1 Northview Bizhub, Singapore 760090</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Clock className="h-8 w-8" />
                                    <p>1PM - 11PM</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="h-8 w-8" />
                                    <p>+65 8927 2782</p>
                                </div>
                                <Button className="bg-[#FFB24F] mt-4">Directions</Button>
                            </CardContent>
                        </Card>
                        <Card className="w-1/3 max-md:w-full">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold">Yishun Branch</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <Flag className="h-8 min-w-8" />
                                    <p>6 Yishun Industrial Street 1 Northview Bizhub, Singapore 760090</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Clock className="h-8 w-8" />
                                    <p>1PM - 11PM</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="h-8 w-8" />
                                    <p>+65 8927 2782</p>
                                </div>
                                <Button className="bg-[#FFB24F] mt-4">Directions</Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
