import React from 'react'

const Info = ({title,span,info}) => {
  return (
    <div>
    <h3 className='max-w-[90%] text-[#6b3030] text-[16px] font-[500]'>{title} <span className='text-[#69696b] font-[300]'>- {span}</span></h3>
    <p className="max-w-[90%] text-[#000] text-[14px] mt-[5px]">{info}</p>
    </div>
  )
}

export default Info