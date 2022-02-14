import React from "react";
import Service from "../Items/Service";

const servicesData = [
  {
    id: 1,
    name: "Web Development",
    content: "Modern Website from TypeScript, JavaScript and MARN for business world. ",
    icon: "icon-globe",
  },
  {
    id: 2,
    name: "Website Design",
    content: "A proper web-design with SEO and Responsive frindly with modern web CSS Framwork.",
    icon: "icon-directions",
  },
  {
    id: 3,
    name: "Design",
    content: "UI, Vector Graphics are my work for in this Design experience.",
    icon: "icon-chemistry",
  },
  {
    id: 4,
    name: "Content Writing",
    content: "I can do promote your business profile with better content wirting skill.",
    icon: "icon-note",
  },
  {
    id: 5,
    name: "SEO",
    content: "Porper Inline ECO and outline ECO for ranking your business website.",
    icon: "icon-rocket",
  },
  {
    id: 6,
    name: "Support",
    content: "You will get better support within 24 hours after your calling.",
    icon: "icon-bubbles",
  },
];

function Services() {
  return (
    <div className="row -mt-20">
      {servicesData.map((service) => (
        <div className="col-md-4 col-sm-6 mt-20" key={service.id}>
          <Service service={service} />
        </div>
      ))}
    </div>
  );
}

export default Services;
