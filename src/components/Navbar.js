import React from "react";

import { HashLink as Link } from "react-router-hash-link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Navbar = () => {
  return (
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand fs-4" href="#">
          lucky.react
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav fs-5">
            <Link
              className="nav_links hover-underline-animation"
              smooth
              to="#about"
            >
              <a class="nav-item nav-link active" href="#">
                About
              </a>
            </Link>
            <Link
              className="nav_links hover-underline-animation"
              smooth
              to="#experience"
            >
              <a class="nav-item nav-link active" href="#">
                Experience
              </a>
            </Link>
            <Link
              className="nav_links hover-underline-animation"
              smooth
              to="#work"
            >
              <a class="nav-item nav-link active" href="#">
                Work
              </a>
            </Link>
            <Link
              className="nav_links hover-underline-animation"
              smooth
              to="#skills"
            >
              <a class="nav-item nav-link active" href="#">
                Skills
              </a>
            </Link>
            <Link
              className="nav_links hover-underline-animation"
              smooth
              to="#contact"
            >
              <a class="nav-item nav-link active" href="#">
                Contact
              </a>
            </Link>

            <a class="nav-item nav-link " href="https://github.com/lucky7xx">
              <GitHubIcon />
            </a>
            <a
              class="nav-item nav-link "
              href="https://www.linkedin.com/in/lucky-patel-b285a4138/"
            >
              <LinkedInIcon />
            </a>
            <a
              class="nav-item nav-link "
              href="https://twitter.com/notsolucky7x_"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
