import React from "react";
import intro from "../images/intro.png";

const Introduction = () => {
  return (
    <div class="container p-5">
      <div class="row">
        <div class="col">
          <p class="h1 mt-5" className="subtitle">
            Intro
          </p>
          <p class="h5 mt-3 lh-base ojdone">
            Passionate about learning and developing new skills, I am dedicated
            to creating meaningful projects that make a positive impact. With a
            focus on design and coding, I am committed to building high-quality
            products and bringing them to life. Driven by a fast-paced,
            collaborative environment, I am motivated to work with my team to
            continuously ship, learn, and iterate. My strong communication and
            problem-solving abilities allow me to effectively contribute to any
            project, and I am excited to learn and grow alongside my team. When
            not working, I enjoy spending time at the gym, reading, traveling,
            and exploring the great outdoors. Let's create something amazing
            together!
          </p>
        </div>
        <div class="col">
          {" "}
          <img src={intro} class="img-fluid" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
