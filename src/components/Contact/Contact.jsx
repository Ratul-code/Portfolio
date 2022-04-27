import { Button } from "@mui/material";
import React from "react";
import useForm from "../../utils/Form";
import "./contact.css";
const Contact = () => {
    const submitCallBack = ()=>{
        alert("submitted");
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          })
    }
  const { formData, setFormData, handleChange, handleSubmit } = useForm({
    name: "",
    email: "",
    subject: "",
    message: "",
  },submitCallBack);
  return (
    <div
      id="contact"
      className="py-20 px-14 items-center flex flex-col-reverse lg:flex-row gap-4"
    >
      <div className="flex flex-col gap-5 flex-grow-[7]">
        <div>
          <h1 className="animated-text text-[45px] font-[800]">Contact Me</h1>
          <p className="lg:max-w-[500px] leading-6 text-[#717173]">
          I am available for freelance work. Connect with me via phone: <span className="font-bold cursor-pointer">+8801894087254</span>  or email: <span className="font-bold cursor-pointer">rafiratul01@gmail.com</span> 
          </p>
        </div>
        <form onSubmit={handleSubmit} className="portfolio__contact-form flex flex-col gap-4 mt-4">
          <input
            required
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="Your Name"
          />
          <input
            required
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="Your Email"
          />
          <input
            required
            type="text"
            name="subject"
            onChange={handleChange}
            value={formData.subject}
            placeholder="Write a subject"
          />
          <textarea
            name="message"
            onChange={handleChange}
            value={formData.message}
            id="message"
            cols="30"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <Button
          type="submit"
            color="white"
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#552424",
              border: "2px solid #552424",
              color: "#fff",
              mt: "30px",
              px: "20px",
              py: "5px",
              transition: "all 0.2s ease",
              borderRadius: "5px",
              fontWeight: "600",
              letterSpacing: "3px",
              ":hover": {
                color: "#fff",
                transform: "translateY(-3px)",
              },
            }}
          >
            Submit Info
          </Button>
        </form>
      </div>
      <div className=" flex-grow-[5] flex items-center justify-center w-full lg:w-[50%]">
        <img
          className="min-h-[340px]"
          src={require("../../assets/images/contact.png")}
          alt=""
        />
      </div>
    </div>
  );
};

export default Contact;
