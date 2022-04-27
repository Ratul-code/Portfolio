import { Button } from "@mui/material";
import React, { useState } from "react";
import {PortfolioProjectSection} from "./style"
const Project = ({ background, text, title,link }) => {
  return (
    // <div
    //   style={{ backgroundImage: `url(${background})` }}
    //   className="portfolio__projects-project h-[500px] sm:min-h-[400px] w-full flex flex-col justify-end gap-5 px-6 items-center"
    // >
    <PortfolioProjectSection bg={background}>
      <p className="text-[16px] text-gray-300">{text}</p>
      <h1 className="text-[22px] font-[600] text-white">{title}</h1>
      {/* <a target="_blank" href={link} className="text-white border-[2px] border-solid border-[white]"> */}
      <a target="_blank" href={link} ><Button
        color="white"
        variant="outlined"
        size="small"
        sx={{
          mb: "20%",
          border: "2px solid white",
          mt: "12px",
          px: "20px",
          py: "5px",
          transition:"all 0.2s ease",
          borderRadius: "5px",
          ":hover": {
            bgcolor: "#552424",
            border: "2px solid #552424",
          },
        }}
      >
        View Details
      </Button>
      </a>
      {/* </a> */}
    {/* </div> */}
    </PortfolioProjectSection>
  );
};
// style={{backgroundImage: `url(${background})`}}

export default Project;
