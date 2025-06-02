import { useEffect } from "react";
import Star from "../Star/Star";
import Card from "../Card/Card";
import CardPopUp from "../CardPopUp/CardPopUp";
import { useState } from "react";



export default function Portfolio() {

    const [imgSrc, setImgSrc] = useState(null);

    function showPopUp(src) {
        setImgSrc(src);
        console.log(src);
        
        document.querySelector('#popup').classList.remove('hidden');
        document.querySelector('#popup').classList.add('flex');
    }

    useEffect(() => {
        const popup = document.querySelector('#popup');
        function handleClickOutside(e) {
            if (e.target === popup) {
                popup.classList.add('hidden');
                // setImgSrc(e.target.src);
            }
        }
        if (popup) {
            popup.addEventListener('click', handleClickOutside);
        }
        return () => {
            if (popup) {
                popup.removeEventListener('click', handleClickOutside);
            }
        };
    }, []);

    return (
    <>
        <section id="Portfolio" className="Main-Section bg-white">
            <h1 className="uppercase text-blue-950 text-4xl italic font-bold">
                Portfolio component
            </h1>
            <Star color={'[#2C3E50]'} />
            <div className="grid grid-cols-3 mx-auto w-8/12 gap-10 mt-8 ">
                <Card imgSrc='./port1.png' onClick={() => showPopUp('./port1.png')} />
                <Card imgSrc='./port2.png' onClick={() => showPopUp('./port2.png')} />
                <Card imgSrc='./port3.png' onClick={() => showPopUp('./port3.png')} />
                <Card imgSrc='./port1.png' onClick={() => showPopUp('./port1.png')} />
                <Card imgSrc='./port2.png' onClick={() => showPopUp('./port2.png')} />
                <Card imgSrc='./port3.png' onClick={() => showPopUp('./port3.png')} />
            </div>
        </section>

        <div id="popup" className="h-screen w-screen fixed bg-[rgba(0,0,0,0.56)] hidden justify-center items-center">
            <CardPopUp imgSrc={imgSrc} />
        </div>
    </>
    );
}
