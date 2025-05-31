import React from 'react'
import Star from '../Star/Star'
// import avatar from '../../assets/avatar.svg'
export default function Home() {

    
  return (
    <>
        <section id='home' className='Main-Section bg-[#1ABC9C]'>
            <div id="img">
                <img src='./avatar.svg' alt="" className='w-[250px]' />
            </div>
              <h1 className='text-5xl text-white font-bold italic capitalize'>start FrameWork</h1>
              <Star color={'white'}/>
              <p className='text-white italic text-2xl mt-4'>Graphic Artist - Web Designer - Illustrator</p>
        </section>
    </>
  )
}
