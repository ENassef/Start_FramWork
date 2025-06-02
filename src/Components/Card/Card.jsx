import React, { useRef } from 'react'

export default function Card({imgSrc,onClick}) {

    // console.log(imgSrc);

    let imgDom = useRef()
    
  return (
    <>
        <div id="card " className='group relative cardSelect' onClick={onClick}>
            <div>
                <img src={imgSrc} alt="" className='w-full ' ref={imgDom} />
            </div>
            <div className="layer absolute top-0">
                <i className='fas fa-plus text-9xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-100'></i>
            </div>
        </div>
    
    </>
  )
}
