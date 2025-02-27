import React from "react";
import Container from "../container";
import { Button } from "../button";
import { SiAppletv } from "@icons-pack/react-simple-icons";
import { motion, useScroll, useTransform } from "motion/react";

function Hero() {
  const videoContainerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.3, 0]);

  return (
    <div className="relative bg-bg text-fg">
      <motion.div
        ref={videoContainerRef}
        style={{ opacity }}
        className="absolute left-0 -top-(--header-height) w-full h-[200vh] overflow-scroll"
      >
        <img
          className="w-full sticky top-0 h-screen object-cover"
          src="/apple-tv/images/hero-1319x742sr.webp"
        />
      </motion.div>

      <Container className="relative z-10 pb-10 h-(--hero-height) ">
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          whileInView={"visible"}
          viewport={{ amount: 1 }}
          exit="hidden"
          animate="hidden"
          className="flex flex-col justify-end items-start h-full"
        >
          <h1 className="font-bold text-5xl/12.5 mb-10">
            All Apple Originals.
            <br /> Only on Apple TV+.
          </h1>
          <Button size="large" className="mb-16">
            Stream now
          </Button>
          <p className="font-semibold text-base/12">
            Watch on the
            <SiAppletv size={20} className="inline-block mx-2" />
            app.
          </p>
        </motion.div>
      </Container>
    </div>
  );
}
export default Hero;
