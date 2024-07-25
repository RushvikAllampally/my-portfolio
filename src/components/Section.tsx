import React, { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
