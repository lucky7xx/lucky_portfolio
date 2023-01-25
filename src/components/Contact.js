import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Links } from "./style_features/Styles";
const Contact = () => {
  return (
    <div class="container mt-5 mb-5 pt-5 pb-5 " id="contact">
      <p class="h4 mt-3 text-center" className="skills">
        Where you could reach out to me!
      </p>
      <div class="col d-flex justify-content-center mt-5 mb-5">
        <Links href="https://github.com/lucky7xx">
          <GitHubIcon sx={{ fontSize: "50px", color: "black" }} />
        </Links>
        <Links href="https://www.linkedin.com/in/lucky-patel-b285a4138/">
          <LinkedInIcon sx={{ fontSize: "50px", color: "black" }} />
        </Links>
        <Links href="https://twitter.com/notsolucky7x_">
          <TwitterIcon sx={{ fontSize: "50px", color: "black" }} />
        </Links>
        <Links href="https://facebook.com/lucky7ex">
          <FacebookIcon sx={{ fontSize: "50px", color: "black" }} />
        </Links>
        <Links href="https://imstagram.com/lucky7x_">
          <InstagramIcon sx={{ fontSize: "50px", color: "black" }} />
        </Links>
      </div>
    </div>
  );
};

export default Contact;
