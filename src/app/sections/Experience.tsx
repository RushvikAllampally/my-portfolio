"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "@/components/LiIcon";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  projects,
  technologies,
}: any) => {
  const ref = useRef(null);
  return (
    <li
      key={time}
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 
    w-[75%] mx-auto flex flex-col justify-center"
    >
      <LiIcon reference={ref} />
      <div>
        <h2 className="capitalize h3">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-accent h3 capitalize"
          >
            @{company}
          </a>
        </h2>
        <p className={`capitalize text-white/80`}>
          {time} | {address}
        </p>
        <div className="mt-2">
          <p className="font-bold">Projects:</p>
          <ul className="list-disc ml-5">
            {projects.map((project: any, index: number) => (
              <li key={index} className="text-white/80">
                {project}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-2">
          <p className="font-bold">Technologies:</p>
          <p className="text-white/80">{technologies}</p>
        </div>
      </div>
    </li>
  );
};

const Experience: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-8">
      <h1 className="h1 mb-8 w-full text-center">Experience</h1>
      <div ref={ref} className="w-[75%] mx-auto relative -z-1">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-8 top-0 w-[4px] h-full bg-white origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position={"Intern"}
            company={"Deloitte"}
            companyLink={"https://www2.deloitte.com/us/"}
            time="Feb 2022 - Mar 2022"
            address={"Hyderabad, India"}
            projects={[
              "Identity and Access Management (IAM)",
              "Enhanced authentication and role-based access control for client systems",
            ]}
            technologies={
              "IAM solutions, identity governance, authentication, role-based access control"
            }
          />
          <Details
            position={"Intern"}
            company={"Phenom People"}
            companyLink={"https://phenom.com/"}
            time="Apr 2022 - Jun 2022"
            address={"Hyderabad, India"}
            projects={[
              "Developed RESTful APIs using Java and Spring Boot",
              "Enhanced UI with React.js",
              "Conducted unit testing with JUnit and Mockito",
              "Collaborated on database management with PostgreSQL",
            ]}
            technologies={
              "Java, Spring Boot, React.js, PostgreSQL, JUnit, Mockito"
            }
          />
          <Details
            position={"Product Development Engineer"}
            company={"Phenom People"}
            companyLink={"https://phenom.com/"}
            time="Jun 2022 - Aug 2024"
            address={"Hyderabad, India"}
            projects={[
              "Led the development of a backend microservice with Java, Spring Boot, and PostgreSQL",
              "Implemented UI enhancements, Tekton pipelines for automation, and cron jobs for system monitoring and maintenance",
              "Created APIs with Spring Boot and MongoDB for the AppStudio Project",
              "Integrated Snowflake DB with JDBC for scalable user insights APIs in the User Insights Project",
              "Built a comprehensive UI and reusable components for the HRIT Dashboard Development",
            ]}
            technologies={
              "Java, Spring Boot, PostgreSQL, MongoDB, Snowflake DB, JDBC, Tekton, React.js"
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
