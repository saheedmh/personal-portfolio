import React from "react";
import { useNavigate } from "react-router-dom";


import "./style/home.css";
import { Animate } from "react-simple-animate";
const Home = () => {
  const navigate = useNavigate();
  const handleNavigateToContactME = () => {
    navigate("/contact");
  };
  return (
    <section className="home" id="home">
    
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Seidu
          <br />
          Front end developer
        </h1>
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
