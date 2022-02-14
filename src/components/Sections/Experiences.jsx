import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "2020 - Present",
    degree: "Web Design and Development",
    content:
      "This is my patience place. I have 2 years of experience in a different place which was a tiny or well-known place like the Bangladesh Air Force. Mainly I am self-employed.",
  },
  {
    id: 2,
    year: "2021 - 2021",
    degree: "Graphics Designer at Volunteer for Bangladesh",
    content:
      "This job was a social collaboration with experience of awareness and noble task. I did Graphics Banner on the Facebook page and there any need.",
  },
  {
    id: 3,
    year: "2020 - 2020",
    degree: "Customer Care Executive at FIFO Tech",
    content:
      "This is my first corporate job. I have experienced corporate manner and etiquette from there.",
  },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
