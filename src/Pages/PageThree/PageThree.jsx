import "./PageThree.css";

import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Social from "../../Components/Social/Social";

const PageThree = () => {
  return (
    <>
      <div className="page-three-text-container">
        <h1>See You Around...</h1>

        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          esse ab minima doloremque, fugit nihil cumque voluptate asperiores,
          nam porro veritatis explicabo, dolorem quisquam vitae dicta blanditiis
          voluptatibus ex velit.
        </h2>

        <div className="socials">
          <Social Icon={FaWhatsapp} />
          <Social Icon={FaInstagram} />
          <Social Icon={FaDiscord} />
          <Social Icon={FaDribbble} />
          <Social Icon={FaGithub} />
        </div>
      </div>
    </>
  );
};

export default PageThree;
