import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Button } from "@mui/material";
import { Link as LinkS } from "react-scroll";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillGithub, AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
// border-[1px] border-black border-solid
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`bg-[#f1f1f1] z-[100] sticky top-0 left-0 flex w-full justify-between items-center px-10 pb-3 pt-3`}
    >
      <div className="w-full flex items-center gap-10">
        <img
          className="max-w-[45px] opacity-[0.7]"
          src={require("../../assets/images/logo.png")}
          alt=""
        />
        <div className="hidden xl:flex gap-6 portfolio__navlinks-container">
          <LinkS
            to="home"
            offset={-79.47}
            smooth
            activeClass="active"
            spy
            duration={500}
            className="portfolio__navlinks"
          >
            home
          </LinkS>
          <LinkS
            to="about"
            offset={-79.47}
            smooth
            activeClass="active"
            spy
            duration={500}
            className="portfolio__navlinks"
          >
            about
          </LinkS>
          <LinkS
            to="projects"
            offset={-70}
            smooth
            activeClass="active"
            spy
            duration={500}
            className="portfolio__navlinks"
          >
            project
          </LinkS>
          <LinkS
            to="contact"
            offset={0}
            smooth
            activeClass="active"
            spy
            duration={500}
            className="portfolio__navlinks"
          >
            contact
          </LinkS>
        </div>
      </div>
      <div className="flex justify-end gap-7 items-center w-full">
        <div className="hidden xsm:flex gap-6 portfolio__navicons-container">
          <a target="_blank" href="https://www.facebook.com/rafi.hasan.5205">
            <FaFacebookF size={22} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ratul-hasan-405550204/"
          >
            <GrLinkedinOption size={22} />
          </a>
          <a target="_blank" href="https://github.com/Ratul-code">
            <AiFillGithub size={22} />
          </a>
          <a target="_blank" href="https://www.instagram.com/_rattull_06/">
            <FaInstagram size={22} />
          </a>
        </div>
        <div className="hidden 2lg:flex">
          <LinkS
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            exact="true"
            offset={0}
            isDynamic
          >
            <Button
              size="large"
              sx={{
                py: "10px",
                ":hover": { background: "rgb(77, 39, 39)", color: "#fff" },
              }}
              variant="outlined"
              color="primary"
            >
              Contact
            </Button>
          </LinkS>
        </div>
        <div className="flex xl:hidden z-10 transition-all duration-[300ms] ease-in-out">
          {toggle ? (
            <AiOutlineClose
              className="z-10 cursor-pointer "
              color="rgb(77, 39, 39)"
              onClick={() => setToggle(false)}
              size={25}
            />
          ) : (
            <HiMenuAlt3
              className="cursor-pointer"
              color="#4b544b"
              onClick={() => setToggle(true)}
              size={25}
            />
          )}

          {toggle && (
            <div className="slide-in-right fixed bg-white w-[60vw] top-[0%] right-0 pt-[80px] px-[4%] flex flex-col h-full gap-[10%]">
              <LinkS
                to="home"
                offset={-79.47}
                smooth
                activeClass="active"
                spy
                duration={500}
                className="portfolio__navlinks"
              >
                home
              </LinkS>
              <LinkS
                to="about"
                offset={-79.47}
                smooth
                activeClass="active"
                spy
                duration={500}
                className="portfolio__navlinks"
              >
                about
              </LinkS>
              <LinkS
                to="projects"
                offset={-79.47}
                smooth
                activeClass="active"
                spy
                duration={500}
                className="portfolio__navlinks"
              >
                project
              </LinkS>
              <LinkS
                to="contact"
                offset={0}
                smooth
                activeClass="active"
                spy
                duration={500}
                className="portfolio__navlinks"
              >
                contact
              </LinkS>
              <div className="flex xsm:hidden justify-between gap-5 portfolio__navicons-container">
                <a
                  target="_blank"
                  href="https://www.facebook.com/rafi.hasan.5205"
                >
                  <FaFacebookF size={22} />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/ratul-hasan-405550204/"
                >
                  <GrLinkedinOption size={22} />
                </a>
                <a target="_blank" href="https://github.com/Ratul-code">
                  <AiFillGithub size={22} />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/_rattull_06/"
                >
                  <FaInstagram size={22} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
