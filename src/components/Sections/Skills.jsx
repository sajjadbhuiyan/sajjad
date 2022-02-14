import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    `The skills mentioned below I have good skills in these technologies and I always try to make myself more skilled in these areas.
    Butt is always trying to adapt to other technologies.\n
    The more fact I am in these technologies, the more I am able to make my clients happy. And I got the result. Because I hope my clients always get the most out of me.`,
  progressData: [
    {
      id: 1,
      name: "javascript",
      percentage: 70,
    },
    {
      id: 2,
      name: "React.js",
      percentage: 70,
    },
    {
      id: 3,
      name: "Next.js",
      percentage: 60,
    },
    {
      id: 4,
      name: "Redux.js",
      percentage: 60,
    },
    {
      id: 5,
      name: "Node & Express",
      percentage: 50,
    },
    {
      id: 6,
      name: "MongoDB",
      percentage: 50,
    },
    {
      id: 7,
      name: "Tailwind CSS",
      percentage: 80,
    },
    {
      id: 8,
      name: "Bootstrap & react bootstrap",
      percentage: 90,
    },
    {
      id: 9,
      name: "Wordpress",
      percentage: 85,
    },
    {
      id: 10,
      name: "Git",
      percentage: 80,
    },
    
  ],
};

function Skills() {
  return (
    <>
      <p className="mb-0">{skillData.skillContent}</p>
      <div className="mt-5">
        <div className="row -mt-50">
          {skillData.progressData.map((progress) => (
            <div className="col-md-6 mt-50" key={progress.id}>
              <TrackVisibility once>
                <Skill progress={progress} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
