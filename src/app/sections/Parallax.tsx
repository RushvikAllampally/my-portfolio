"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

const Parallax: React.FC = () => {
  const ref: any = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className="h-screen w-full relative flex items-center
       justify-center overflow-hidden
       bg-gradient-to-b from-primary via-gray-900 to-gray-800 z-10"
    >
      <motion.h1
        className="text-[68px] xl:text-[100px] leading-[1.1] font-bold"
        style={{ y: textBg }}
      >
        What I know
      </motion.h1>
      <motion.div
        className="w-full h-full absolute bg-cover 
      bg-bottom z-[13] bg-[url('/assets/mountains.png')]"
      ></motion.div>
      <motion.div
        style={{ y: yBg }}
        className="w-full h-full absolute bg-cover 
      bg-bottom z-[12] bg-[url('/assets/planets.png')]"
      ></motion.div>
      <motion.div
        style={{ x: yBg }}
        className="w-full h-full absolute bg-cover 
      bg-bottom z-[11] bg-[url('/assets/stars.png')]"
      ></motion.div>
    </div>
  );
};
export default Parallax;
