import React from "react";
import { SiApple } from "@icons-pack/react-simple-icons";
import Container from "./container";
import { Button } from "./button";

export default function Header() {
  return (
    <>
      <header className="relative z-20 bg-bg2 text-fg">
        <Container className="flex items-center min-h-(--header-row-height)">
          <a href="/apple-tv" className="flex items-center text-xl px-6 -ml-6">
            <span className="sr-only">Back to homepage</span>
            <SiApple size={16} />
          </a>
        </Container>
      </header>
      <div className="sticky z-20 top-0 bg-bg2 text-fg">
        <Container className="flex items-center justify-between min-h-(--header-row-height)">
          <p className="text-xl font-semibold">Apple TV+</p>
          <Button size="small">Stream now</Button>
        </Container>
      </div>
    </>
  );
}
