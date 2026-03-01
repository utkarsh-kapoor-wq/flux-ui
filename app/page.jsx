import Hero from "@/components/Hero";
import Navbar from "@/components/navbar";
import Carousel3D from "@/components/Carousel3D";

const images = [
  "/assets/Group364.png",
  "/assets/Group365.png",
  "/assets/Group366.png",
  "/assets/Group367.png",
  "/assets/Group368.png",
  "/assets/Group369.png",
  "/assets/Group370.png",
  "/assets/Group371.png",
  "/assets/Group372.png",
  "/assets/Group373.png",
  "/assets/Group374.png",
]; 
export default function Home() {
  return (
    <>
      <Navbar/>
      <Carousel3D images={images} />;
      <Hero />
    </>
  );
}
