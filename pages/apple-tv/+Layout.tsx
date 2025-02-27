import React from "react";
import Header from "./components/header";
import "@fontsource-variable/inter";
import "./styles.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className=""
      style={{
        fontFamily: "Inter Variable, sans-serif",
      }}
    >
      <Header />
      {children}
    </div>
  );
}
