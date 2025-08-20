import React from "react";
import Pageheader from "./headertest";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./style/about.css";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [

  {
    label: "Name",
    value: "Menyaga Seidu",

  },

  {
    label: "Age",
    value: "28",
  },
  {
    label: "Adress",
    value: "Nigeria",
  },
  {
    label: "Email",
    value: "menyagaseid@@gmail.com",
  },

  {
    label: "Contact",
    value: "08135583538",
  },
];

const Jobsummary =[
  "Hi, I'm Seidu Menyaga — a Front-End Developer with 3 years of hands-on experience building responsive, performance-driven web applications using React, JavaScript, HTML, and CSS.",
  "I specialize in crafting clean, user-friendly interfaces with a strong focus on aesthetics, UI/UX design, and feature optimization. I love turning design concepts into functional front-end experiences and writing code that is both scalable and maintainable.",
  "I'm currently open to remote or on-site opportunities, and I’m excited to contribute to teams that value creativity, collaboration, and high-quality code.",
]

  const About = (headerTest) => {

  
  return (
    <>
    <Pageheader headerText="About me" Icon={<BsInfoCircleFill size={40} />} />

    <section id="about" className="about flex ">
      
      <div className="about__content  ">
      
        <div className="about__content__personalwrapper ">

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
        <div className="">
            
        <p className="text-lg mb-4">
          Hi, I'm <strong>Seidu Menyaga</strong> — a Front-End Developer with <strong>3 years of hands-on experience</strong> building responsive, performance-driven web applications using <strong>React, JavaScript, HTML</strong>, and <strong>CSS</strong>.
        </p>
        <p className="text-lg mb-4">
          I specialize in crafting clean, user-friendly interfaces with a strong focus on <strong>aesthetics</strong>, <strong>UI/UX design</strong>, and <strong>feature optimization</strong>. I love turning design concepts into functional front-end experiences and writing code that is both scalable and maintainable.
        </p>
        <p className="text-lg mb-4">
          Over the years, I’ve worked on a variety of personal and freelance projects that challenged me to solve real problems — from landing pages to full dashboard apps with authentication and API integration.
        </p>
        <p className="text-lg">
          I'm currently open to <strong>remote or on-site opportunities</strong>, and I’m excited to contribute to teams that value <strong>creativity</strong>, <strong>collaboration</strong>, and <strong>high-quality code</strong>.
        </p>
        </div>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 style={{color:"var(--yellow-theme-sub-text-color)"}}>Personal Information</h3>
            <ul className="personal__info">
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="label">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateX(500px)",
          }}
          end={{
            transform: "translatex(0px)",
          }}
        >
        
          <div className="about__content__servicewrapper">
            <div className="inner__content__services__wrappers">
              <div className="first-child">
                <FaDev size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
        
          </div>
        </Animate>
      </div>
      </section>
      </>
    
  );
};

export default About;
