"use client";

import React from "react";
// import { Link } from "react-scroll";
import { Button } from "./ui/button";
import Nav from "./Nav";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { handleScroll } from "@/app/utils/utils";

const Header: React.FC = () => {

  return (
    <header className="py-4 xl:py-8 text-white sticky top-0 bg-[#0c0c1d] z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#section1" onClick={(e) => handleScroll(e, "about")}>
          <h1 className="text-4xl font-semibold">
            Rushvik <span className="text-accent">.</span>
          </h1>
        </a>
        {/* desktop nav and hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />

          {/* <Link href="/">
            <Button> Hire me</Button>
          </Link> */}

          <a href={`#contact`} onClick={(e) => handleScroll(e, "contact")}>
            <Button> Hire me</Button>
          </a>
        </div>

        {/* mobile nav */}

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
export default Header;
