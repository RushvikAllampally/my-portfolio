import Link from "next/link";
import path from "path";

import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/RushvikAllampally" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/rushvikallampally/" },
  { icon: <FaTwitter />, path: "https://x.com/ARushvik?t=Q_Pn0foCBYbz86cLeW2nUA&s=08" },
];

interface StyleProps {
  containerStyles?: React.CSSProperties;
  iconStyles?: React.CSSProperties;
}

const Social: React.FC<any> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} rel="noopener noreferrer" target="_blank" className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};
export default Social;
