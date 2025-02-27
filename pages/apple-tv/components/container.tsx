import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Container({ children, ...props }: Props) {
  return (
    <div
      {...props}
      className={twMerge("mx-auto max-w-[900px] px-6", props.className)}
    >
      {children}
    </div>
  );
}
