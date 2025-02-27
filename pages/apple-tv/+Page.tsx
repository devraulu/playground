import React from "react";
import Container from "./components/container";
import Hero from "./components/sections/hero";
import Usps from "./components/sections/usps";
import VideoCarousel from "./components/sections/video-carousel";

export default function AppleTvPage() {
  return (
    <>
      <main className="">
        <div className="bg-bg">
          <Hero />
          <Usps />
        </div>
        {/* <Container>3 col layout</Container> */}
        <VideoCarousel />
        <div className="h-[300vh]"></div>
      </main>
    </>
  );
}
