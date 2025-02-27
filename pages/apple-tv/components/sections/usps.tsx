import React from "react";
import Container from "../container";
import FadeIn from "../fade-in";

export default function Usps() {
  return (
    <Container className="text-fg text-4xl/10 font-bold space-y-14 max-w-[692px] py-36">
      <FadeIn>
        <p>New Apple Originals every month - always ad-free.</p>
      </FadeIn>

      <FadeIn>
        <p>
          Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
          sticks.
        </p>
      </FadeIn>
      <FadeIn>
        <p>Watch in 4K HDR video with immersive Spatial Audio.</p>
      </FadeIn>
      <FadeIn>
        <p>Share a single subscription with up to 5 people.</p>
      </FadeIn>
    </Container>
  );
}
