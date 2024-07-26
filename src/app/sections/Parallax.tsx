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
      className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary via-gray-900 to-gray-800 z-10"
    >
      <motion.h1
        className="text-[68px] xl:text-[100px] leading-[1.1] font-bold text-center"
        style={{ y: textBg }}
      >
        What I know
      </motion.h1>
      <motion.div className="w-full h-full absolute z-[13]">
        <Image
          src="/assets/mountains.png"
          alt="Mountains"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <motion.div className="w-full h-full absolute z-[12]" style={{ y: yBg }}>
        <div className="h-[500px] sm:h-full w-full relative">
          <Image
            src="/assets/planets.png"
            alt="Planets"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </motion.div>
      <motion.div className="w-full h-full absolute z-[11]" style={{ x: yBg }}>
        <Image
          src="/assets/stars.png"
          alt="Stars"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
    </div>
  );
};

export default Parallax;
