"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export default function useCarousel3D(slideCount) {
  const containerRef = useRef(null);
  const slidesRef = useRef([]);
  const offset = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const slides = slidesRef.current;

    if (!container || slides.length === 0) return;

    const isMobile = window.innerWidth < 600;
    const depthOffset = isMobile ? 320 : 200;
    const angle = isMobile ? 36 : 20;

    const slideWidth = slides[0].offsetWidth;
    const totalWidth = slideWidth * slideCount;

    const o = 1 / (180 / angle);
    const r = (angle * Math.PI) / 180 / 2;

    const wrap = gsap.utils.wrap(-totalWidth, totalWidth);

    function render() {
      const centerX = container.offsetWidth / 2;

      slides.forEach((slide, i) => {
        const baseX = i * slideWidth;
        const x = wrap(baseX + offset.current);

        const progress = (x - centerX) / slideWidth;

        const s = 1 - Math.cos(progress * o * Math.PI);
        const bendX = progress * (slideWidth / 3) * s;
        const z =
          0.5 * slideWidth / Math.sin(r) * s - depthOffset;
        const rotateY = progress * angle;

        slide.style.transform = `
          translateX(${x + bendX}px)
          translateZ(${z}px)
          rotateY(${rotateY}deg)
        `;
      });
    }

    gsap.ticker.add(render);

    Draggable.create(container, {
      type: "x",
      inertia: true,
      dragResistance: 0.9,
      onDrag() {
        offset.current += this.deltaX;
      },
      onThrowUpdate() {
        offset.current += this.deltaX;
      }
    });

    return () => {
      gsap.ticker.remove(render);
    };
  }, [slideCount]);

  function hoverMove(direction) {
    gsap.to(offset, {
      current: `+=${direction * 280}`,
      duration: 0.9,
      ease: "power3.out"
    });
  }

  return {
    containerRef,
    slidesRef,
    hoverMove
  };
}
