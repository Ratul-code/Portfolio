import React, { useState } from "react";
import "./about.css";
import Education from "./Education";
import Experience from "./Experience";
import MainSkill from "./MainSkill";
const About = () => {
  const [active, setActive] = useState("mainSkill");
  const handleClick = (e) => {
    if (e.target.innerHTML === "Main Skills") {
      setActive("mainSkill");
    }
    if (e.target.innerHTML === "Experience") {
      setActive("experience");
    }
    if (e.target.innerHTML === "Education &amp; Certification") {
      setActive("education");
    }
  };
  return (
    <div id="about" className="flex bg-[#f2f2f2] flex-col gap-3 md:gap-8 md:flex-row flex-wrap xl:flex-nowrap p-2 xsm:p-5 sm:py-[1rem] sm:px-[3rem] min-h-screen">
      <div className=" p-5 sm:p-16 md:p-0 w-full flex-[5] lg:p-13 flex justify-center items-center ">
        <img
          loading="lazy"  
          className="w-[100%] h-[500px] xl:min-h-[580px] object-contain"
          src={require("../../assets/images/ratul.jpg")}
          alt=""
        />
      </div>
      <div className="flex-[6] w-full flex flex-col justify-center gap-[8px]">
        <h1 className=" animated-text text-[40px] md:text-[48px] lg:text-[60px]  font-[700]">About Me</h1>
        <p className=" mb-3 text-[17px] leading-[30px] font-[300] text-[#717173]">
        Hi I am Ratul . Currently I’m a college first year student and  I’ve passed my school recently. I’ve been introduced to web development a long ago. I started the journey with HTML,CSS and JavaScript and did all the jobs alone. I taught myself seeking help from social media,online and other platforms that enhanced my development skills as well as my communication skills. Being a School Student I never applied for any internships or jobs and Now I’m expecting You to hire me.
        </p>
        <div className="hidden xl:flex flex-col ">
          <div className="mt-3 portfolio__about-links flex justify-between gap-4 mb-4">
            <a className={`${active==="mainSkill"&& "active animated-text-small"}`} onClick={handleClick}>Main Skills</a>
            <a className={`${active==="education"&& "active animated-text-small"}`} onClick={handleClick}>Education & Certification</a>
            <a className={`${active==="experience"&& "active animated-text-small"}`} onClick={handleClick}>Experience</a>
          </div>
          <div className="portfolio__about-links__info max-h-[200px] xl:h-[340px] flex flex-col gap-5 pt-7 overflow-scroll">
            {active === "mainSkill" && <MainSkill />}
            {active === "experience" && <Experience />}
            {active === "education" && <Education />}
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:hidden w-full">
          {/* <h2 className="self-center font-[600px] text-[20px] tracking-wider text-[#6b3030]">Skills</h2> */}
        <div className="flex-wrap sm:flex-nowrap mt-3 portfolio__about-links flex justify-between gap-4 mb-4">
          <a className={`${active==="mainSkill"&& "active animated-text-small"}`} onClick={handleClick}>Main Skills</a>
          <a className={`${active==="education"&& "active animated-text-small"}`} onClick={handleClick}>Education & Certification</a>
          <a className={`${active==="experience"&& "active animated-text-small"}`} onClick={handleClick}>Experience</a>
        </div>
        <div className="portfolio__about-links__info max-h-[340px] xl:h-[340px] flex flex-col gap-5 pt-7 overflow-scroll">
          {active === "mainSkill" && <MainSkill />}
          {active === "experience" && <Experience />}
          {active === "education" && <Education />}
        </div>
      </div>



    </div>
  );
};

export default About;
