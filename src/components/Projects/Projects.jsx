import { Button } from "@mui/material";
import React from "react";
import "./Project";
import Project from "./Project";
import "./projects.css";
const Projects = () => {
  return (
    <div id="projects" className="py-[3rem] md:px-[2rem] justify-end lg:px-[2rem] flex flex-col items-center w-full gap-8">
      <div className="text-center">
        <h1 className="text-[28px] xsm:text-[35px] sm:text-[50px] tracking-wide font-[600] animated-text" >My Latest Projects</h1>
        {/* <p className="max-w-[930px] mb-2 px-0 md:px-[12%] text-[#717173] font-[300]" >
          There are few awesome projects below that I have done.
        </p> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 2lg:grid-cols-3 w-full px-5 gap-7" >
            <Project link="http://texting-41cb9.firebaseapp.com" text="Firebase/React" title="Todoapp,Authentication and Chatroom using Firebase & React" background={`${require("../../assets/images/texting.png")}`}/>
            
            <Project link="https://virtualbanking-z74x8.firebaseapp.com/" text="React Ui/UX" title="Smooth Scrolling Landing Page using Styled-Components" background={`${require("../../assets/images/vbanking.png")}`}/>

            <Project link="http://gpt3-f822a.firebaseapp.com" text="React Ui/UX" title="Figma design to GPT3 landing page" background={`${require("../../assets/images/gpt3-2.png")}`}/>

            <Project link="https://clone-apps-99513.firebaseapp.com/" text="React Ui/UX" title="Awesome Netflix Front Page with Youtube Trailers" background={`${require("../../assets/images/netflix.png")}`}/>
        </div>
        {/* <Button
        color="white"
        variant="outlined"
        size="medium"
        sx={{
          border: "2px solid #552424",
          color:"#000",
          mt: "30px",
          px: "20px",
          py: "5px",
          transition:"all 0.2s ease",
          borderRadius: "5px",
          fontWeight:"600",
          ":hover": {
            bgcolor: "#552424",
            border: "2px solid #552424",
            color:"#fff",
            transform: "translateY(-3px)",
          },
        }}
      >
        View More
      </Button> */}
    </div>
  );
};

export default Projects;
