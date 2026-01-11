import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initHeroAnimations(refs) {
  const {
    sectionRef,
    bottleRef,
    bottle1Ref,
    bottle2Ref,
    bg1Ref,
    bg2Ref,
    headingRef,
    rightTextRef,
    leftTextRef,
    heading2Ref,
    rightText2Ref,
    leftText2Ref,
  } = refs;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top top",
      end: "+=300%",
      scrub: true,
      pin: true,
    },
  });


  // Bottle animation
  // Bottle scale (first phase)
  tl.fromTo(
    bottleRef.current,
    { rotate: 0, scale: 1 },
    { rotate: -12, scale: 1.5, x: -100, ease: "none" }
  );
  tl.to(bg1Ref.current , {
    rotate: -15,
    xPercent : 20,
    opacity : 1 ,
    ease : "none"
  },"<")

  // Heading from RIGHT
  tl.fromTo(
    headingRef.current,
    { x: 120, opacity: 0 },
    { x: 0, opacity: 1, ease: "none" },
    0
  );

  // Right paragraph from RIGHT
  tl.fromTo(
    rightTextRef.current,
    { x: 100, opacity: 0 },
    { x: 0, opacity: 1, ease: "none" },
    0.05
  );

  
  // Left bottom text from LEFT
  tl.fromTo(
    leftTextRef.current,
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, ease: "none" },
    0.05
  );

  // Bottle rotate to RIGHT (second phase)
  tl.to(bottleRef.current, { duration:0.75 }, ">");
  tl.to(bottleRef.current, { rotate: 18, x: 100, ease: "none" }, ">");
  
  // Background swap: fade out first_bg and fade in second_bg
  tl.to(bg1Ref.current , {
    opacity : 0 , 
    xPercent : -10,
    ease :"none"
  },"<").to(bg2Ref.current , { 
    opacity : 1 , 
    xPercent : -90 , 
    ease : "none"
  },"<")
 
  tl.to(bottle1Ref.current, { opacity: 0, ease: "out" }, "<30%");
  tl.to(bottle2Ref.current, { opacity: 1, ease: "out" }, "<");

  // Text exit while rotating right
  tl.to(headingRef.current, { x: 120, opacity: 0, ease: "none" }, "<");
  tl.to(rightTextRef.current, { x: 100, opacity: 0, ease: "none" }, "<");
  tl.to(leftTextRef.current, { x: -100, opacity: 0, ease: "none" }, "<");

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

  tl.to(
    [headingRef.current, rightTextRef.current, leftTextRef.current],
    {
      opacity: 0,
      y: -20,
      ease: "none",
    },
    "<10%"
  );

  tl.to(bottle2Ref.current, { rotate: -18, x: -100, ease: "none" });
  tl.to(
    [heading2Ref.current, rightText2Ref.current, leftText2Ref.current],
    {
      opacity: 0,
      y: -100,
      ease: "none",
    },
    "<"
  );

  return tl;
}
export function initGridAnimations(refs) {
  const {
    gridSectionRef,
    col1Ref,
    col2Ref,
    col3Ref,
    col4Ref,
    col5Ref,
    col6Ref,
  } = refs;

  const gridTl = gsap.timeline({
    scrollTrigger: {
      trigger: gridSectionRef.current,
      start: "top top",
      end: "+=800%",
      scrub: true,
      pin: true,
    },
  });

  gridTl.to([col1Ref.current, col3Ref.current, col5Ref.current], {
    yPercent: -210,
    ease: "none",
  });

  // EVEN columns go DOWN
  gridTl.to(
    [col2Ref.current, col4Ref.current, col6Ref.current],
    {
      yPercent: 51,
      ease: "none",
    },
    "<"
  );

  gridTl.to(".rest1", {
    opacity: 0,
    yPercent: -50,
    ease: "none",
  });

  gridTl.to(
    ".rest2",
    {
      opacity: 0,
      yPercent: 50,
      ease: "none",
    },
    "<"
  );

  return gridTl;
}

export function cleanupAnimations() {
  ScrollTrigger.getAll().forEach((t) => t.kill());
}
