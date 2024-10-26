import React from "react";
import { Link } from "react-router-dom";

const aboutData = {
  cvpath: "media/Resume-of-Md_ Sajjad_Bhuiyan_Taki.pdf",
  image: "images/about.png",
  name: "MD. Sajjad Bhuiyan Taki",
  location: "Dhaka, Bangladesh",
  birthday: "19 October, 2000",
  email: "sajjadbhuiyan2024@gmail.com",
  aboutMe:
    "I am MD. Sajjad, a software developer based in Lisbon, Portugal. I possess extensive experience in problem-solving, logic development, and data structures, with a focus on SQL and NoSQL. My work involves existing applications, ensuring clean and rectified code within JavaScript-based web applications. The IT field is rapidly evolving, especially with the rise of AI. I am proficient in adapting to new technologies through documentation. Regarding timing, I strive to maintain a logical timeline for exploring new technologies, ensuring the optimal timing aligns with project needs. 🚀",
};

function About() {
  return (
    <div className="row">
      <div className="col-md-3">
      <img
        src={aboutData.image}
        alt={aboutData.name}
        style={{ borderRadius: "5%", width: "100%", height: "auto", marginTop: "5px"}}
      />
      </div>
      <div className="col-md-9">
        <h2 className="mt-4 mt-md-0 mb-4">Hello,</h2>
        <p className="mb-0">{aboutData.aboutMe}</p>
        <div className="row my-4">
          <div className="col-md-6">
            <p className="mb-2">
              Name: <span className="text-dark">{aboutData.name}</span>
            </p>
            <p className="mb-0">
              Birthday: <span className="text-dark">{aboutData.birthday}</span>
            </p>
          </div>
          <div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
            <p className="mb-2">
              Location: <span className="text-dark">{aboutData.location}</span>
            </p>
            <p className="mb-0">
              Email: <span className="text-dark">{aboutData.email}</span>
            </p>
          </div>
        </div>
        <a href={aboutData.cvpath} className="btn btn-default mr-3">
          <i className="icon-cloud-download"></i>Resume
        </a>
        <Link
          activeClass="active"
          to="/contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-alt mt-2 mt-md-0 mt-xs-2"
        >
          <i className="icon-envelope"></i>Hire me
        </Link>
      </div>
    </div>
  );
}

export default About;
