import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from './images/saheed.jpg'

import "./style/home.css";
import { Animate } from "react-simple-animate";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigateToContactME = () => {
    navigate("/contact");
  };
  return (
    <section className="home">
    
      <div className="home__text-wrapper" id="text__wrapper">
    <h1>Hello! i'm seidu </h1>
      <div className="animate-container">
        <h1 className="static-text">I'm</h1>
          <ul className="dynamic-text">
            <li><span>FrontEnd developer</span></li>
             
              <li><span>Freelancer</span></li>
               <li><span>Consultant</span></li>
          </ul>
        </div>
        <div className="img">
        <img src={image1} sizes={30} style={{width:"300px", height:"300px", marginRight:"-10px"}} alt="myimg"></img>
     
        </div>
         </div>
      
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="btn-contact__me">
          <a  href="./images/mycv.pdf" download="./images/mycv.pdf" onClick={handleNavigateToContactME } id="btn__contact">Download my CV</a>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
