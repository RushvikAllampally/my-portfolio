"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaJava,
  FaDatabase,
  FaJenkins,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaNodeJs,
  FaAws,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiPostgresql,
  SiMongodb,
  SiApachekafka,
  SiSnowflake,
  SiTekton,
  SiIntellijidea,
  SiTailwindcss,
  SiNextdotjs,
  SiStorybook,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const techStack = [
  {
    heading: "Frontend",
    value: "frontend",
    description:
      "Expertise in building responsive and dynamic user interfaces using the latest web technologies.",
    skillList: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3 />, name: "CSS3" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaFigma />, name: "Figma" },
    ],
  },
  {
    heading: "Backend",
    value: "backend",
    description:
      "Specialized in creating robust and scalable server-side applications and microservices.",
    skillList: [
      { icon: <FaJava />, name: "Java" },
      { icon: <SiSpringboot />, name: "Spring Boot" },
      { icon: <FaNodeJs />, name: "Node.js" },
    ],
  },
  {
    heading: "Database",
    value: "database",
    description:
      "Proficient in managing and optimizing various databases for efficient data storage and retrieval.",
    skillList: [
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiSnowflake />, name: "Snowflake" },
      { icon: <SiApachekafka />, name: "Apache Kafka" },
      { icon: <FaDatabase />, name: "SQL" },
      { icon: <GrMysql />, name: "MySQL" },
    ],
  },
  {
    heading: "DevOps",
    value: "devops",
    description:
      "Skilled in CI/CD pipelines, containerization, and cloud services to ensure smooth deployment processes.",
    skillList: [
      { icon: <FaJenkins />, name: "Jenkins" },
      { icon: <SiTekton />, name: "Tekton" },
      { icon: <FaDocker />, name: "Docker" },
      { icon: <FaAws />, name: "AWS" },
    ],
  },
  {
    heading: "Tools & Libraries",
    value: "tools",
    description:
      "Familiar with a variety of tools and libraries to enhance development efficiency and code quality.",
    skillList: [
      { icon: <FaGitAlt />, name: "Git" },
      // { icon: <FaMaven />, name: "Maven" },
      // { icon: <SiVscode />, name: "VS Code" },
      { icon: <SiIntellijidea />, name: "IntelliJ IDEA" },
      { icon: <SiStorybook />, name: "Storybook" },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6, ease: "easeIn" }}
      className="min-h-[80h] w-full flex flex-col items-center justify-center py-12 xl:py-0"
    >
      <div className="text-center h1 text-accent my-10">My Tech Stack</div>
      <div className="container mx-auto">
        <Tabs
          defaultValue="frontend"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="database">Database</TabsTrigger>
            <TabsTrigger value="devops">DevOps</TabsTrigger>
            <TabsTrigger value="tools">Tools & Libraries</TabsTrigger>
          </TabsList>

          <div className="w-full">
            {techStack.map((tech, index) => {
              return (
                <TabsContent value={tech.value} className="w-full">
                  <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                      <h3 className="text-4xl font-bold">{tech.heading}</h3>
                      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                        {tech.description}
                      </p>
                    </div>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                        {tech.skillList.map((skill, index) => {
                          return (
                            <li key={index}>
                              <TooltipProvider
                                delayDuration={100}
                              >
                                <Tooltip>
                                  <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                    <motion.div
                                      whileHover={{
                                        scale: 1.5,
                                        transition: { duration: 1 },
                                      }}
                                      className="text-6xl hover:text-accent transition-all duration-200 flex flex-col items-center gap-4"
                                    >
                                      <span>{skill.icon}</span>
                                      <p className="capitalize text-sm">
                                        {skill.name}
                                      </p>
                                    </motion.div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="capitalize">{skill.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </li>
                          );
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Skills;
