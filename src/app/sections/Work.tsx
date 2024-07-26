"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "FullStack",
    title: "Employee Management Dashboard",
    description:
      "Optimize team performance, streamline operations with the Employee Management Dashboard. This tool provides real-time insights, task tracking, and top employee metrics, enhancing overall productivity and decision-making.",
    stack: [
      { name: "Html5/Css" },
      { name: "React Js" },
      { name: "Java" },
      { name: "Springboot" },
    ],
    image: "/assets/employee-manage-work.png",
    live: "",
    github: "https://github.com/RushvikAllampally/Full_Stack_Webpage",
  },
  {
    num: "02",
    category: "Android App",
    title: "Diaryverse",
    description:
      " Diaryverse is a versatile journaling app empowers you to capture every facet of your life with five unique" +
      " journal types, personalized entries, secure number lock, reminders, and insightful analytics.",
    // stack: [{ name: "Next.js" }, { name: "Tailwind Css" }, { name: "Node Js" }],
    stack: [{ name: "Java" }, { name: "Android Studio" }],
    image: "/assets/diaryverse-app-work.png",
    live: "https://play.google.com/store/apps/details?id=com.diary.superjournalapp&hl=en",
    github: "https://github.com/RushvikAllampally/super_journal_app",
  },
  {
    num: "03",
    category: "Chrome Extension",
    title: "Tabmergx",
    description:
      "Simplify browsing with TabMergeX, a Chrome extension that prevents duplicate tabs and reduces clutter. Helps stay organized and efficient with intelligent tab management.",
    stack: [
      { name: "Html5" },
      { name: "Css" },
      { name: "Javascript" },
      { name: "Chrome Extension" },
    ],
    image: "/assets/chrome-ext-work.png",
    live: "https://chromewebstore.google.com/detail/tabmergex/bpnbdgcejobimnffjhicdgmaahgbjgji",
    github: "",
  },
];

const Work: React.FC = () => {
  const [project, setProject] = useState<any>(projects[0]);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.6, ease: "easeIn" },
      }}
      className="h-full flex flex-col justify-center pt-20 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="text-center h1 text-accent my-10">Projects</div>
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div
            className="w-full xl:w-[50%] xl:h-[460px] flex flex-col 
          xl:justify-between order-2 xl:order-none"
          >
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold stroke-white stroke-1">
                {project.num}
              </div>
              <h2
                className="text-[42px] font-bold leading-none text-white
            group-hover:text-accent transition-all duration-500 capitalize"
              >
                {project.category} project
              </h2>
              <h3 className="h3">{project.title}</h3>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item: any, index: number) => {
                  return (
                    <li key={index} className="text-xl text-accent text-wrap	">
                      {item.name}
                      {/* to remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {/*live project link*/}
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger
                          className="w-[70px] h-[70px] rounded-full
                    bg-white/5 flex justify-center items-center group"
                        >
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {/*github project link*/}
                {project.github && (
                  <Link target="_blank" href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger
                          className="w-[70px] h-[70px] rounded-full
                    bg-white/5 flex justify-center items-center group"
                        >
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((data, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div
                      className="h-[460px] relative group flex 
                    justify-center items-center bg-pink-50/20"
                    >
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover rounded-xl"
                          alt="project preview"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider button */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
               xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary
               text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Work;
