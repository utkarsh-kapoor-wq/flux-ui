"use client";

import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const bottleRef = useRef(null);

  return (
    <section
      className=" relative h-screen w-full bg-white flex items-center justify-center overflow-hidden">

      <div
        ref={bottleRef}
        className="
          relative w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px] ">
        <Image
          src="/1.png"
          alt="Bottle"
          width={400}
          height={1000}
          priority
          className="w-full h-auto select-none"
        />
      </div>
    </section>
  );
}
