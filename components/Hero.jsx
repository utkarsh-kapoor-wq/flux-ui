"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const sectionRef = useRef(null);
    const bottleRef = useRef(null);
    const bottle1Ref = useRef(null);
    const bottle2Ref = useRef(null);
    const headingRef = useRef(null);
    const rightTextRef = useRef(null);
    const leftTextRef = useRef(null);
    const heading2Ref = useRef(null);
    const rightText2Ref = useRef(null);
    const leftText2Ref = useRef(null);


    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=250%",
                scrub: true,
                pin: true,
            },
        });

        // Bottle animation
        // Bottle scale (first phase)
        tl.fromTo(
            bottleRef.current,
            { rotate: 0, scale: 1 },
            { rotate: -12, scale: 1.5, x : -100 ,  ease: "none" }
        );
        // Heading from RIGHT
        tl.fromTo(headingRef.current, { x: 120, opacity: 0 }, { x: 0, opacity: 1, ease: "none" }, 0);

        // Right paragraph from RIGHT
        tl.fromTo(rightTextRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, ease: "none" }, 0.05);

        // Left bottom text from LEFT
        tl.fromTo(leftTextRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, ease: "none" }, 0.05);

        // Bottle rotate to RIGHT (second phase)
        // Rotate right + image crossfade
        // tl.to(bottleRef.current , {})
        tl.to(bottleRef.current, { duration: 0.5 }, ">");
        tl.to(bottleRef.current, { rotate: 18, x : 100 ,  ease: "none" }, ">");
        tl.to(bottle1Ref.current, { opacity: 0, ease: "out" }, "<30%");
        tl.to(bottle2Ref.current, { opacity: 1, ease: "out" }, "<");

        // Text exit while rotating right
        tl.to(headingRef.current, { x: 120, opacity: 0, ease: "none" }, "<");
        tl.to(rightTextRef.current, { x: 100, opacity: 0, ease: "none" }, "<");
        tl.to(leftTextRef.current, { x: -100, opacity: 0, ease: "none" }, "<");

        // Text 2 enters from BOTTOM after rotation starts
        tl.fromTo(
            heading2Ref.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, ease: "none" },
            "<20%"
        );

        tl.fromTo(
            rightText2Ref.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, ease: "none" },
            "<"
        );

        tl.fromTo(
            leftText2Ref.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, ease: "none" },
            "<"
        );


        tl.to([headingRef.current, rightTextRef.current, leftTextRef.current], {
            opacity: 0,
            y: -20,
            ease: "none",
        }, "<10%");



        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    return (
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
                    <Image
                        ref={bottle1Ref}
                        src="/1.png"
                        alt="Bottle 1"
                        width={500}
                        height={1200}
                        priority
                        className="absolute inset-0 w-full h-auto select-none"
                    />
                    <Image
                        ref={bottle2Ref}
                        src="/2.png"
                        alt="Bottle 2"
                        width={500}
                        height={1200}
                        className="inset-0 w-full h-auto select-none opacity-0"
                    />
                </div>
            </div>
        </section>
    );
}
