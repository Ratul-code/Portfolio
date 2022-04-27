import React from 'react'
import Info from './Info'
const educations = [
    {
        title:"Got Junior School Certificate",
        span:"2018",
        info:"Willes Little FLower School & College"
    },
    {
        title:"Got Secondary School Certificate",
        span:"2019-2021",
        info:"Willes Little FLower School & College"
    }
]
const Education = () => {
  return (
    <>
    {educations.map((e,i)=>(
        <Info key={i} title={e.title} span={e.span} info={e.info} />
    ))}
    </>
  )
}

export default Education