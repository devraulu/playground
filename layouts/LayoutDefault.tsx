import React from "react";

import "#root/styles/base.css";

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={""}>
      <Content>{children}</Content>
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container">
      <div id="page-content" className={""}>
        {children}
      </div>
    </div>
  );
}
