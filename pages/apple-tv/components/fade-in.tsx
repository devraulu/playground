import { motion } from "motion/react";
import React from "react";
type Props = {
  children: React.ReactNode;
};

export default function FadeIn({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "100% 0px -300px 0px" }}
    >
      {children}
    </motion.div>
  );
}
