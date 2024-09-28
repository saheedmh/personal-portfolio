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

const Jobsummary =
  "My name is seidu menyaga i'm a seasoned and independent Front End developer with 3 years of experience i bleeding the art of design with skill and programming to deliver as impressive and engaging user experience through efficient website development proactive feature optimization, and relentless debugging, Very passionate about aesthestics and Ui design, i't is imperative that you provide a thorough professional to your resume, as a Front End Developer you will be judge by your ability to use UX and UI concept and folow design guidelines. it's about expressing your attention your attention to detail and how you can help implement design ideas for your future employer ";
const About = (headerTest) => {

  
  return (
    <section id="about" className="about">
      <Pageheader headerText="About me" Icon={<BsInfoCircleFill size={40} />} />

      <div className="about__content">
        <div className="about__content__personalwrapper">
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
        
            <h3 style={{color:"var(--yellow-theme-sub-text-color)", fontWeight:"bold"}} className="personal__header">Front End Developer</h3>
            <p>{Jobsummary}</p>
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
  );
};

export default About;
