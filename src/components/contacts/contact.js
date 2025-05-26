import Tagline from "../tagline/tagline";
import Footer from "../footer/footer";
import React, { useEffect } from "react";
import { gsap } from "gsap";

const MagicMessageForm = () => {
  useEffect(() => {
    gsap.fromTo(".fieldd", {
      y: 40,
      opacity: 0,
    },
     {
      y:0,
      opacity:1,
       stagger: 0.2,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);

  return (
    <>
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 md:px-10">
      <div className="bg-gray-300 bg-opacity-10 backdrop-blur-md border border-yellow-300 rounded-2xl shadow-lg w-full max-w-md p-6 sm:p-8 md:p-10">
        <h2 className="text-black text-2xl sm:text-3xl font-bold mb-6 text-center">
          Contact Us
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="fieldd w-full p-3 opacity-100 translate-y-0 text-sm sm:text-base rounded-lg bg-white border border-yellow-300 bg-opacity-20 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="fieldd w-full p-3 opacity-100 translate-y-0 text-sm sm:text-base rounded-lg bg-white border border-yellow-300 bg-opacity-20 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <textarea
            placeholder="Your Magical Message"
            rows="4"
            className="fieldd w-full p-3 opacity-100 translate-y-0 text-sm sm:text-base rounded-lg bg-white border border-yellow-300 bg-opacity-20 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <button
            type="submit"
            className="fieldd w-full opacity-100 translate-y-0 bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-300 transition-all duration-300 text-sm sm:text-base"
          >
            Cast Message ✨
          </button>
        </form>
      </div>
    </div>
    <Tagline/>
    <Footer/>
    </>
  );
};

export default MagicMessageForm;



