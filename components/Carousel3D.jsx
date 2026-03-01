"use client";

import Image from "next/image";
import useCarousel3D from "./useCarousel3D";
export default function Carousel3D({ images }) {
  const { containerRef, slidesRef, hoverMove } =
    useCarousel3D(images.length);

  let hoverTimer = null;

  function onMouseMove(e) {
    const rect = containerRef.current.getBoundingClientRect();
    const dir = e.clientX < rect.left + rect.width / 2 ? -1 : 1;

    if (!hoverTimer) {
      hoverTimer = setInterval(() => hoverMove(dir), 1200);
    }
  }

  function onMouseLeave() {
    clearInterval(hoverTimer);
    hoverTimer = null;
  }

  return (
    <div
      ref={containerRef}
      className="carousel"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="slide"
          ref={(el) => (slidesRef.current[i] = el)}
        >
          <Image src={src} alt="" fill />
        </div>
      ))}
    </div>
  );
}
