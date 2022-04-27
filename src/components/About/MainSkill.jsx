import React from 'react'
import Info from './Info'
const skills = [
    {
    title:"User experience modern react designs",
    span:"UI/UX",
    info:"Delight the user and make it work."
    },
    {
    title:"Any format to react designs",
    span:"UI/UX",
    info:"Amazing & glowing user interface."
    },
    {
    title:"Full stack web application",
    span:"mern stack",
    info:"Full dynamic websites."
    }
]
const MainSkill = () => {
  return (
    <>
    {skills.map((skill,index)=>(
        <Info key={index} title={skill.title} span={skill.span} info={skill.info}  />
    ))}
    {skills.map((skill,index)=>(
        <Info key={index} title={skill.title} span={skill.span} info={skill.info}  />
    ))}

    </>
  )
}

export default MainSkill