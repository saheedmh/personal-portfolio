import React from 'react';
import { Animate } from 'react-simple-animate';
import { TypeAnimation } from 'react-type-animation';
import image1 from './images/saheed.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex items-center justify-around px-6">
      <div className="flex flex-col-reverse md:flex-row items-center text-center md:text-left gap-8 md:gap-16">
        
        {/* Text Section */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Hi! I'm Seidu</h1>

          <div className="text-xl md:text-2xl font-semibold text-blue-400 mb-6">
            I'm{' '}
            <TypeAnimation
              sequence={[
                'a Front-End Developer', 2000,
                'a Freelancer', 2000,
                'a React Enthusiast', 2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateY(550px)" }}
            end={{ transform: "translateY(0px)" }}
          >
            <div className="mt-6">
              <a
                href="/mycv.pdf"
                download
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Download My CV
              </a>
            </div>
          </Animate>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={image1}
            alt="Seidu"
            className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
