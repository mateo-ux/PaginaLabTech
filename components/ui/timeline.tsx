"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

interface TimelineEntry {
    year: string;
    title: string;
    description: string;
    icon?: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div ref={containerRef} className="w-full">
            <div ref={ref} className="relative max-w-5xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div key={index} className="flex justify-start pt-10 md:pt-20 md:gap-10">
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-brand-blue border border-brand-green p-2" />
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-brand-blue">
                                {item.year}
                            </h3>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-brand-blue">
                                {item.year}
                            </h3>
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                                {item.icon && <div className="text-4xl mb-4">{item.icon}</div>}
                                <h4 className="text-2xl font-bold text-brand-black mb-4">
                                    {item.title}
                                </h4>
                                <p className="text-brand-black/70 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: "100%",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-brand-green to-transparent"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-brand-blue via-brand-green to-transparent rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};