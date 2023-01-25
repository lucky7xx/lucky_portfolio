import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import react from "../images/react.png";
import node from "../images/node.png";
import jquery from "../images/jquery.png";
import bootstrap from "../images/bootstrap.png";
import tailwind from "../images/tailwind.png";
import ImageComponent from "./subcomponents/ImageComponent";

const Skills = (props) => {
  return (
    <div class="container" id="skills">
      <p class="h4 mt-3 text-center" className="skills">
        What i know!
      </p>
      <div class="row">
        <div class="col d-flex justify-content-center mt-5 mb-5 pt-5 pb-5">
          <ImageComponent languageIcon={html} />
          <ImageComponent languageIcon={css} />
          <ImageComponent languageIcon={js} />
          <ImageComponent languageIcon={react} />
          <ImageComponent languageIcon={node} />
          <ImageComponent languageIcon={jquery} />
          <ImageComponent languageIcon={bootstrap} />
          <ImageComponent languageIcon={tailwind} />
          <ImageComponent languageIcon={jquery} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
