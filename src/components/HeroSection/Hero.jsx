import React from 'react'
import "./hero.css";
const Hero = () => {
  return (
    <header id="home" className='overflow-hidden section__padding portfolio__header max-w-[100vw] relative min-h-[500px] lg:min-h-[600px] flex flex-col justify-center items-center lg:items-start '>
        <div className=''>
            <p className='tracking-in-expand text-[15px] text-[#1f1f25] uppercase tracking-[4px]'>Freelancer Web Developer</p>
            <h1 className='animated-text mt-2 max-w-[100%] text-[30px] sm:text-[40px] font-bold leading-[50px] sm:leading-[68px] lg:text-[54px] lg:max-w-[700px]'>Hello, I am <span className='font-bold scale-100'>Ratul</span> Welcome to my world. </h1>
        </div>
    </header>
  )
}

export default Hero