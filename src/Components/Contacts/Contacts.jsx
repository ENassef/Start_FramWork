import React, { useEffect, useState } from "react";
import Star from "../Star/Star";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contacts() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out' });
  }, []);

  const [values, setValues] = useState({
    UserName: '',
    UserAge: '',
    UserEmail: '',
    UserMessage: ''
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  return (
    <section id="Portfolio" className="Main-Section bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 flex flex-col items-center">
          <h1 className="uppercase bg-clip-text text-[#2C3E50] text-4xl font-bold">
            Contact Us
          </h1>
          <Star color="[#2C3E50]" />
          <p className="mt-4 text-gray-600">We'd love to hear from you</p>
        </div>

        <form className="bg-white rounded-xl shadow-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="relative group" data-aos="fade-up" data-aos-delay="100">
            <input
              className="w-full bg-gray-50 border-b-2 border-blue-400 pt-6 pb-2 px-4 text-gray-800 focus:outline-none focus:border-blue-600 peer transition-colors"
              type="text"
              name="UserName"
              id="UserName"
              value={values.UserName}
              onChange={handleChange}
            />
            <label 
              htmlFor="UserName"
              className={`absolute left-4 font-medium ${values.UserName ? 'text-xs top-1 text-blue-600' : 'top-4 text-gray-500'} peer-focus:text-xs peer-focus:top-1 peer-focus:text-blue-600 transition-all duration-200`}
            >
              Your Name
            </label>
          </div>

          
          <div className="relative group" data-aos="fade-up" data-aos-delay="150">
            <input
              className="w-full bg-gray-50 border-b-2 border-indigo-400 pt-6 pb-2 px-4 text-gray-800 focus:outline-none focus:border-indigo-600 peer transition-colors"
              type="email"
              name="UserEmail"
              id="UserEmail"
              value={values.UserEmail}
              onChange={handleChange}
            />
            <label 
              htmlFor="UserEmail"
              className={`absolute left-4 font-medium ${values.UserEmail ? 'text-xs top-1 text-indigo-600' : 'top-4 text-gray-500'} peer-focus:text-xs peer-focus:top-1 peer-focus:text-indigo-600 transition-all duration-200`}
            >
              Email Address
            </label>
          </div>

           
          <div className="relative group md:col-span-2" data-aos="fade-up" data-aos-delay="200">
            <input
              className="w-full bg-gray-50 border-b-2 border-purple-400 pt-6 pb-2 px-4 text-gray-800 focus:outline-none focus:border-purple-600 peer transition-colors"
              type="number"
              name="UserAge"
              id="UserAge"
              value={values.UserAge}
              onChange={handleChange}
            />
            <label 
              htmlFor="UserAge"
              className={`absolute left-4 font-medium ${values.UserAge ? 'text-xs top-1 text-purple-600' : 'top-4 text-gray-500'} peer-focus:text-xs peer-focus:top-1 peer-focus:text-purple-600 transition-all duration-200`}
            >
              Your Age
            </label>
          </div>


          
          <div className="relative group md:col-span-2" data-aos="fade-up" data-aos-delay="250">
            <textarea
              className="w-full bg-gray-50 border-b-2 border-cyan-400 pt-6 pb-2 px-4 text-gray-800 focus:outline-none focus:border-cyan-600 peer transition-colors min-h-[120px]"
              name="UserMessage"
              id="UserMessage"
              value={values.UserMessage}
              onChange={handleChange}
            />
            <label 
              htmlFor="UserMessage"
              className={`absolute left-4 font-medium ${values.UserMessage ? 'text-xs top-1 text-cyan-600' : 'top-4 text-gray-500'} peer-focus:text-xs peer-focus:top-1 peer-focus:text-cyan-600 transition-all duration-200`}
            >
              Your Message
            </label>
          </div>

          <div className="md:col-span-2" data-aos="fade-up" data-aos-delay="300">
            <button
              type="submit"
              className="cursor-pointer w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}