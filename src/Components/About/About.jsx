import React from 'react'
import Star from '../Star/Star'

export default function About() {
  return (
    <>
        <section id='about' className='Main-Section bg-[#1ABC9C]'>
            <h1 className='uppercase text-white text-4xl italic font-bold'>about component </h1>
            <Star color={'white'}/>
            <div className='grid grid-cols-2 w-3/5 space-x-4 mt-4 text-white text-[20px] font-semibold'>
                <div>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
                <div>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
            </div>
        </section>
    </>
  )
}
