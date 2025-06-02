import React from 'react'

export default function CardPopUp({imgSrc}) {
  // console.log(imgSrc);
  
  return (
    <>
        <div className='w-4/12' id='popupcard'>
          <img src={imgSrc} alt=""  className='w-full'/>
        </div>
    </>
  )
}
