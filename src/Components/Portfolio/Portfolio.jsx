import React from "react";
import Star from "../Star/Star";
import Card from "../Card/Card";


export default function Portfolio() {
    return (
        <section id="Portfolio" className="Main-Section bg-white">
            <h1 className="uppercase text-blue-950 text-4xl italic font-bold">
                Portfolio component
            </h1>
            <Star color={'[#2C3E50]'} />
            <div className="grid grid-cols-3 mx-auto w-8/12 gap-10 mt-8 ">
				<Card imgSrc='./port1.png' />
				<Card imgSrc='./port2.png' />
				<Card imgSrc='./port2.png' />
				<Card imgSrc='./port1.png' />
				<Card imgSrc='./port2.png' />
				<Card imgSrc='./port3.png' />
			</div>
        </section>
    );
}
