import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "2024 - Present",
    degree: "Software developer (Remote)",
    company: "WhatsAble",
    city: "Milton",
    country: "United States",
    company_website: "https://www.whatsable.app",
    company_mail: "team@whatsable.app",
    sector: "Software",
    judged_link: "https://www.whatsable.app",
    judged_access: ["mail: sajjad@gmail.com", "password: test123456"],
    content:
      "WhatsAble, Unlike traditional setups, which can require a minimum of seven days for non-technical users to configure the Facebook business profile and WhatsApp Business API, our applications offer a streamlined experience. With WhatsAble, users can send messages and track their statuses—such as delivered, read, replied, unsubscribed, and more—in just six minutes through API Key.",

    tasks: ["Collaborated with the development team, working 48 hours per week.", 
      "Focused on frontend development using Next.js 14 and React.",  "The Notifier by WhatsAble dashboard is built with Next.js 14, while the WhatsAble dashboard uses Next.js 12.", 
      "Notifier by WhatsAble is a platform that allows users to set up the WhatsApp Business API within 6 minutes.", "From logging into the system to starting messaging, the entire process is streamlined for quick access. Users can utilize an API key to integrate our services. The system is built with Node.js, giving me extensive experience in API development.",
      "Managed and maintained the backend and databases for both WhatsAble and Notifier by WhatsAble SAAS platforms.",
      "Applied optimal data structures and algorithms to align with business requirements.",
      "Developed new features and enhancements.",
      "Diagnosed and resolved bugs to ensure smooth system operation."]
  },
  {
    id: 1,
    year: "2020 - Present",
    degree: "Web Design and Development",
    content:
      "This is my patience place. I have 2 years of experience in a different place which was a tiny or well-known place like the Bangladesh Air Force. Mainly I am self-employed.",
  },
  {
    id: 1,
    year: "2020 - Present",
    degree: "Web Design and Development",
    content:
      "This is my patience place. I have 2 years of experience in a different place which was a tiny or well-known place like the Bangladesh Air Force. Mainly I am self-employed.",
  },
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
      "This is my first corporate job. I have experienced corporate manner, etiquette and communication from there.",
  }
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
