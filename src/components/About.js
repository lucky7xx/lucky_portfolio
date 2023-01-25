import React from "react";
import avatar from "../images/avatar.png";

const About = () => {
  return (
    <div class="container mb-5" id="about">
      <div class="row">
        <div class="col">
          <img src={avatar} class="img-fluid" alt="..." />
        </div>
        <div class="col">
          <p class="h3" className="name_title">
            Hi, I am Lucky!
          </p>
          <p class="h1 mt-5" className="subtitle">
            Developer & <br /> Designer
          </p>
          <p class="h4 ">
            designing stunning user interfaces is my passion, and bringing them
            to life with code is my superpower.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
