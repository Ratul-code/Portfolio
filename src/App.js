import "./App.css";
import { Navbar, Hero, About, Projects, Contact, Footer } from "./components/index";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";
import { useEffect, useState } from "react";
import {FaAngleUp} from "react-icons/fa";
import {animateScroll as scroll} from "react-scroll"

const theme = createTheme({
  palette: {
    primary: {
      main: '#552424',
      light:"#fff"
    },
    white: {
      main: '#fff',
    },
  },
});
function App() {
  const [bignav, setBignav] = useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>300){
        setBignav(true)
      }else{
        setBignav(false);
      }
      return window.removeEventListener("scroll",null)
    })
  },[])
  return (
    <>
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Contact/>
      <Footer/>
      {bignav&&<div onClick={()=>scroll.scrollToTop()} className="swirl-in-fwd bg-[#552424] z-40 w-[50px] h-[50px] rounded-[50%] flex justify-center items-center cursor-pointer fixed bottom-12 right-5 transition-all duration-300 ease-in-out hover:scale-[1.1]">
      <FaAngleUp color="#fff" size={20} />
      </div>}
      </ThemeProvider>
    </>
  );
}

export default App;
