import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="py-10 px-8 flex-wrap flex flex-col sm:flex-row  2lg:flex-nowrap gap-7 items-center justify-center sm:justify-between bg-[#2e2e30] text-white">
      <div className="flex w-auto 2lg:w-full  gap-4 max-h-[50px] items-center ">
        <img
          className="w-[40px]"
          src={require("../../assets/images/footer2.png")}
          alt=""
        />
        <h1 className="text-2xl tracking-widest font-semibold ">Portfolio</h1>
      </div>
      <div className="w-auto 2lg:w-full gap-3 portfolio__footer-icons_container justify-start flex ">
        <div>
          <a target="_blank" href="https://www.facebook.com/rafi.hasan.5205">
            <FaFacebookF size={22} />
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ratul-hasan-405550204/"
          >
            <GrLinkedinOption size={22} />
          </a>
        </div>
        <div>
          <a target="_blank" href="https://github.com/Ratul-code">
            <AiFillGithub size={22} />
          </a>
        </div>
        <div>
          <a target="_blank" href="https://www.instagram.com/_rattull_06/">
            <FaInstagram size={22} />
          </a>
        </div>
      </div>
      <div className="w-full flex text-center sm:text-right justify-center 2lg:justify-end">
        <p className="max-w-[450px]">
          Copyright © 2021 Rainbow-Themes. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
