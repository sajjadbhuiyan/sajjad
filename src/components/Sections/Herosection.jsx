import React from "react";
import { Link } from "react-router-dom";

const herosectionData = {
  name: "MD Sajjad",
  aboutMe:
    "Software Developer based on JS Environment.",
};

function Herosection() {
  return (
    <section
      className="hero background parallax shadow-dark d-flex align-items-center"
      style={{ backgroundImage: "url(/images/sajjadbg.png)" }}
    >
      <div className="cta mx-auto mt-2">
        <h1 className="mt-0 mb-4">
          I’m {herosectionData.name}
          <span className="dot"></span>
        </h1>
        <p className="mb-4">{herosectionData.aboutMe}</p>
        <Link
          activeClass="active"
          to="/works"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-default btn-lg mr-3"
        >
          <i className="icon-grid"></i>View Portfolio
        </Link>
        <div
          className="spacer d-md-none d-lg-none d-sm-none"
          data-height="10"
        ></div>
        <Link
          activeClass="active"
          to="/resume"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-border-light btn-lg"
        >
          <i className="icon-graduation"></i>Experience
        </Link>
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Herosection;
