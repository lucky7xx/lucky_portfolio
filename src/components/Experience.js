import React from "react";
import CardComponent from "./subcomponents/CardComponent";

const Experience = () => {
  return (
    <div class="container mt-5 mb-5 p-5" id="experience">
      <div class="row mt-5 mb-5 pt-5 pb-5">
        <div class="col">
          <p class="h1 mt-2" className="subtitle">
            A brief summary.
          </p>
          <p class="h5 ">1+ years experience in frontend development.</p>
        </div>
        <div class="col d-flex ">
          <CardComponent
            companyLogo="https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-6/307201402_477809934368918_4156896853955991012_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rTOXaf1g4bQAX9Kx7_I&_nc_ht=scontent-bom1-1.xx&oh=00_AfCNK7vM6FETOuVCh6I5MZ1YXfj-aRt2F4ig-nBONlasmQ&oe=63D52795"
            companyName="SilverTouch Technologies"
            position="React Developer"
          />

          <CardComponent
            companyLogo="https://www.weltec.in/wp-content/uploads/2022/06/weltec.png"
            companyName="WelTec Institute"
            position="MERN Stack Development"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
