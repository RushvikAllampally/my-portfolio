"use client";

import { handleScroll } from "@/app/utils/utils";
import React, { useEffect, useState } from "react";

const Nav: React.FC = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const links = [
    { name: "about", id: "about" },
    { name: "skills", id: "skills" },
    { name: "work", id: "work" },
    { name: "experience", id: "experience" },
  ];

  return (
    <nav className="flex gap-8">
      {links.map((link) => {
        return (
          <div
            className={`${
              activeSection === link.id &&
              "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            <a href={`#${link.id}`} onClick={(e) => handleScroll(e, link.id)}>
              {link.name}
            </a>
          </div>
        );
      })}
    </nav>
  );
};
export default Nav;
