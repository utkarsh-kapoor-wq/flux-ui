"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { initHeroAnimations, initGridAnimations, cleanupAnimations } from "./heroAnimations";

export default function Hero() {
    const sectionRef = useRef(null);
    const gridSectionRef = useRef(null);
    const bottleRef = useRef(null);
    const bottle1Ref = useRef(null);
    const bottle2Ref = useRef(null);
    const headingRef = useRef(null);
    const rightTextRef = useRef(null);
    const leftTextRef = useRef(null);
    const heading2Ref = useRef(null);
    const rightText2Ref = useRef(null);
    const leftText2Ref = useRef(null);
    const col1Ref = useRef(null);
    const col2Ref = useRef(null);
    const col3Ref = useRef(null);
    const col4Ref = useRef(null);
    const col5Ref = useRef(null);
    const col6Ref = useRef(null);


    useEffect(() => {
        initHeroAnimations({
            sectionRef,
            bottleRef,
            bottle1Ref,
            bottle2Ref,
            headingRef,
            rightTextRef,
            leftTextRef,
            heading2Ref,
            rightText2Ref,
            leftText2Ref,
        });

        initGridAnimations({
            gridSectionRef,
            col1Ref,
            col2Ref,
            col3Ref,
            col4Ref,
            col5Ref,
            col6Ref,
        });

        return () => cleanupAnimations();
    }, []);

    return (
        <>
            <section ref={sectionRef} className="relative h-screen w-full bg-white overflow-hidden">
                {/* Heading */}
                <h1 ref={headingRef} className="absolute top-[15%] right-[8%] text-[28px] md:text-[36px] font-medium tracking-wide text-black max-w-[420px] text-right">
                    Unlock the essence of an ancient craft
                </h1>

                {/* Right paragraph */}
                <p ref={rightTextRef} className="absolute top-[35%] right-[8%] text-[12px] md:text-[14px] text-gray-600 max-w-[260px] text-right leading-relaxed">
                    We got our hands on the all natural finest ingredients that would recreate the magic of Kombucha
                </p>

                {/* Left bottom text */}
                <p ref={leftTextRef} className="absolute bottom-[18%] left-[8%] text-[12px] md:text-[14px] text-gray-600 max-w-[200px] leading-relaxed">
                    Crafted with care and brewed to perfection
                </p>


                {/* second text */}
                <h1 ref={heading2Ref} className="absolute top-[12%] left-1/2 -translate-x-1/2 text-[28px] md:text-[42px] font-medium tracking-widest text-black max-w-[700px] text-center opacity-0 leading-tight">
                    Beyond a beverage,<br />it's nature's symphony
                </h1>

                <p ref={rightText2Ref} className="absolute top-[40%] left-[8%] text-[11px] md:text-[13px] text-gray-600 max-w-[220px] text-left leading-relaxed opacity-0 tracking-wide">
                    A perfect alternative from all artificial or excessively sugared beverages
                </p>

                <p ref={leftText2Ref} className="absolute bottom-[12%] right-[8%] text-[14px] md:text-[18px] text-gray-600 max-w-[250px] leading-relaxed opacity-0 text-right tracking-wide">
                    Embrace<br />the new Kulture
                </p>

                {/* Bottle */}
                <div className="h-full w-full flex items-center justify-center">
                    <div ref={bottleRef} className="relative w-[55vw] max-w-[420px] sm:w-[45vw] md:w-[360px] lg:w-[420px]">
                        <div ref={bottle1Ref} className="absolute inset-0">
                            <Image
                                src="/1.png"
                                alt="Bottle 1"
                                width={500}
                                height={1200}
                                priority
                                className="w-full h-auto select-none"
                            />
                        </div>
                        <div ref={bottle2Ref} className="opacity-0">
                            <Image
                                src="/2.png"
                                alt="Bottle 2"
                                width={500}
                                height={1200}
                                className="w-full h-auto select-none"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid Section */}
            <section ref={gridSectionRef} className="relative h-screen w-full bg-white overflow-hidden flex items-center justify-center">
                <div className="grid grid-cols-6 gap-x-20  opacity-0" id="grid">
                    <div ref={col1Ref} className="flex flex-col items-center gap-16">
                        <Image src="/1.png" width={260} height={600} alt="" />
                        <span className="text-[16vw] font-bold leading-none">S</span>
                    </div>

                    <div ref={col2Ref} className="flex flex-col items-center gap-16">
                        <span className="text-[16vw] font-bold leading-none">B</span>
                        <Image src="/2.png" width={260} height={600} alt="" />
                    </div>

                    <div ref={col3Ref} className="flex flex-col items-center gap-16">
                        <Image src="/3.png" width={260} height={600} alt="" />
                        <span className="text-[16vw] font-bold leading-none">O</span>
                        <span className="w-full h-5 bg-black"></span>
                    </div>

                    <div ref={col4Ref} className="flex flex-col items-center gap-16">
                        <span className="text-[16vw] font-bold leading-none">O</span>
                        <Image src="/4.png" width={260} height={600} alt="" />
                    </div>

                    <div ref={col5Ref} className="flex flex-col items-center gap-16">
                        <Image src="/5.png" width={260} height={600} alt="" />
                        <span className="text-[16vw] font-bold leading-none">C</span>
                    </div>

                    <div ref={col6Ref} className="flex flex-col items-center gap-16">
                        <span className="text-[16vw] font-bold leading-none">H</span>
                        <Image src="/6.png" width={260} height={600} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
}
