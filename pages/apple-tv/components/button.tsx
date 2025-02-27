import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "#root/lib/utils/styles";

const variants = cva("bg-fg text-bg2 px-6 py-1.5 rounded-full", {
  variants: {
    size: {
      small: "text-xs px-[10px] py-[3px]",
      medium: "text-sm px-[22px] py-[12px]",
      large: "text-lg px-4 py-2",
    },
  },
  defaultVariants: { size: "medium" },
});

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof variants> & {
    asChild?: boolean;
  };

export const Button = ({
  className,
  size,
  asChild = false,
  ...props
}: ButtonProps) => {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      data-slot="button"
      className={cn(variants({ size, className }))}
      {...props}
    />
  );
};
