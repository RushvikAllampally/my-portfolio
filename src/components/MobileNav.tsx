"use client";

import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useEffect, useState } from "react";
import { handleScroll } from "@/app/utils/utils";

const links = [
  { name: "about", id: "about" },
  { name: "skills", id: "skills" },
  { name: "work", id: "work" },
  { name: "experience", id: "experience" },
  { name: "contact", id: "contact" },
];

const MobileNav: React.FC = () => {
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

  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className="flex justify-center items-center" />
      </SheetTrigger>
      <SheetContent>
        <div className="mt-32 mb-40 text-center text-2xl">
          <a href="#section1" onClick={(e) => handleScroll(e, "section1")}>
            <h1 className="text-4xl font-semibold">
              Rushvik <span className="text-accent">.</span>
            </h1>
          </a>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link) => {
            return (
              <div
                className={`${
                  activeSection === link.id &&
                  "text-accent border-b-2 border-accent"
                } capitalize text-xl hover:text-accent transition-all`}
              >
                <a
                  href={`#${link.id}`} 
                  onClick={(e) => handleScroll(e, link.id)}
                >
                  {link.name}
                </a>
              </div>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
