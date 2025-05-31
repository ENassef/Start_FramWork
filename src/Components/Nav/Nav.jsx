import React, { useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";


// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function Nav() {
  const brand = useRef();

    useEffect(() => {
        // Split the text into individual letters
        const text = brand.current;
        const letters = text.innerText.split('');
        
        // Wrap each letter in a span
        text.innerHTML = letters.map(letter => 
            `<span class="letter">${letter === ' ' ? '&nbsp;' : letter}</span>`
        ).join('');

        // Create the wave animation
        gsap.fromTo(".letter",
            {
                y: 20,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: "elastic.out(1, 0.5)",
                repeat:-1
            }
        );

        
    }, []);

  useEffect(() => {
    AOS.init({
      once: true
    });
  }, []);

  return (
    <nav className='capitalize flex fixed top-0 left-0 right-0 bg-[#2C3E50] text-white justify-around py-8 italic z-50'>
      <div className="brand">
        
        <Link  
          className='text-3xl font-bold uppercase' 
          to='/' 
          ref={brand}
        >
          Start Framework
        </Link >
      </div>
      <div className="list">
        <ul className='flex space-x-8 text-xl'>
          <li className="nav-item" data-aos='fade-down'>
            <NavLink className='text-white font-semibold' to="/about">about</NavLink>
          </li>
          <li className="nav-item" data-aos='fade-down' data-aos-delay='100'>
            <NavLink className='text-white font-semibold' to="/portfolio">portfolio</NavLink>
          </li>
          <li className="nav-item" data-aos='fade-down' data-aos-delay='200'>
            <NavLink className='text-white font-semibold' to="/contact">contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}