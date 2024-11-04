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

    tasks: ["Collaborated with the development team, working 48 hours per week.", "Primary contributor on the development team responsible for building the backend API for Notifier by WhatsAble using Node.js.", "Designing architecture, implementing business logic, structuring data, and managing the database of WhatsAble and Notifier by WhatsAble SAAS", "The <a href='https://notifier.whatsable.app/' target='_blank'>Notifier by WhatsAble</a> dashboard is built with Next.js 14, while the <a href='https://dashboard.whatsable.app/' target='_blank'>WhatsAble Dashboard </a> uses Next.js 12.", "Managed and maintained the backend and databases for both WhatsAble and Notifier by WhatsAble SAAS platforms.", "Always applied optimal data structures and algorithms to align with business requirements.",
      "Developed new features and enhancements.",
      "Diagnosed and resolved bugs to ensure smooth system operation."],

      skills: [
        "Stay current with fast-growing technologies and AI",
        "Microservices architecture. In WhatsAble, attachments (files) are managed by a separate API that I created using Xano's AWS S3.",
        "Improved skills in Node.js, TypeScript and adapting to new versions like Next.js 12 to Next.js 14",
        "Supabase proficiency",
        "Business logic-driven API development",
        "Payment gateway integration with Stripe and Square",
        "WhatsApp Business API expertise",
        "Enhanced documentation reading skills",
        "Automation integration in Make.com and Zapier",
        "Vercel experience",
        "Railway deployment skills",
        "Advanced Git and GitHub knowledge",
        "Basic AWS understanding"
    ]
    
  },
  {
    id: 2,
    year: "2022 Mar - 2020 Dec",
    degree: "MIS Officer (Hybrid)",
    company: "Center for People and Environ (CPE)",
    city: "Dhaka",
    country: "Bangladesh",
    company_website: "https://cpe-bd.org",
    company_mail: "info@cpe-bd.org",
    sector: "Research consulting firm",
    judged_link: "https://www.whatsable.app",
    judged_access: ["mail: sajjad@gmail.com", "password: test123456"],
    content:
      "Centre for People & Environ (CPE) A hub for scientists, researchers, professionals, academicians and people to work for sustainable development. The organization provides research and capacity building services, science-policy integration at local, regional and national level related to: Climate Resilient Development, Climate Displacement Solution, Environmental Management, Trade Justice and Data Science",

      tasks: [
        "Oversee all IT-related responsibilities, working 30 hours each week.",
        "Build their website on a low budget using WordPress.",
        "Handle the database for web content management.",
        "Upload content to the website.",
        "Create vector graphics and perform photo editing.",
        "Implement a task management tool.",
        "Provide IT support to the workforce."
    ],    

    skills: [
      "Created two websites (an official site and a NEWS portal called poribeshprotibesh). I believe they have altered their <a href='https://cpe-bd.org/poribesh-protibesh-issue-1/'>poribesh-protibesh</a> business model.",
      "The official website was built using WordPress, where I gained insights into the data structures used in websites and web applications.",
      "Learned to manage websites, domains, and hosting in a cost-effective manner.",
      "Acquired skills in theme development.",
      "I became proficient in various aspects of WordPress.",
      "Familiar with Bangladeshi payment gateways like SSLCOMMERZ, Bkash, and Nogod.",
      "Developed strong communication skills through Twilio setup.",
      "Experienced in photo editing tools such as Photoshop, GIMP, Photopea, and others.",
      "Skilled in vector graphics, having completed over 100 vector designs using Adobe Illustrator and Inkscape."
  ]
    
  },
  {
    id: 3,
    year: "2023 Jan - Present",
    degree: "MIS Officer (Contract)",
    company: "Center for Climate Intelligence (CCI)",
    city: "Dhaka",
    country: "Bangladesh",
    company_website: "https://climateintelligence.netlify.app",
    company_mail: "info@climateintelligence.center",
    sector: "Data Science",
    judged_link: "https://www.whatsable.app",
    judged_access: ["mail: sajjad@gmail.com", "password: test123456"],
    content:
      "We are a team of passionate individuals who are committed to using technology and data to tackle the challenges of climate change. We are a diverse group of experts with backgrounds in climate science, data science, machine learning, and artificial intelligence, among other fields. <a href='https://climateintelligence.netlify.app/about/' target='_blank'>more...</a>",

   
    tasks: [
        "When need I support them",
        "Build their website with next js 13",
        "Creating Backend with node js",
        "Provide IT support to the workforce."
    ],    

    skills: [
      "Next js",
      "I am gaining knowledge of data science",
      "Communication Skill",
  ]
  },
  {
    id: 4,
    year: "2021 Jun - 2021 Dec",
    degree: "Graphics Designer at Volunteer for Bangladesh",
    company: "Volunteer for Bangladesh",
    city: "Dhaka",
    country: "Bangladesh",
    company_website: "https://vbd.com.bd/",
    company_mail: "info@vbd.com.bd",
    sector: "Volunteer organization of JAAGO Foundation",
    judged_link: "https://www.whatsable.app",
    judged_access: ["mail: sajjad@gmail.com", "password: test123456"],
    content:
      "Volunteer for Bangladesh is a youth wing of JAAGO Foundation, established in 2011 with support of U.S Embassy to Bangladesh. Its goal is to empower young people in Bangladesh to volunteer and develop leadership skills to make positive change in their communities. It provides platform for community service, volunteer work, training, and mentorship opportunities.",

    tasks: [
        "Vector Graphics",
        "Photo Editing",
        "Group collaboration"
    ],    

    skills: [
      "Vector Graphics",
      "Photo Editing",
      "MS Office Skill",
  ]

  },
  {
    id: 5,
    year: "2020 Jun - 2020",
    degree: "Customer Care Executive (Remote)",
    company: "FIFO Tech",
    city: "Dhaka",
    country: "Bangladesh",
    company_website: "https://fifo-tech.com/",
    company_mail: "info@vbd.com.bd",
    sector: "BPO service provider",
    judged_link: "https://www.whatsable.app",
    judged_access: ["mail: sajjad@gmail.com", "password: test123456"],
    content:
      "FIFOTech is one of the leading BPO service providers in Bangladesh. We provide a full range of IT/ITES services considering customer satisfaction. <a href='https://fifo-tech.com/about/' target='_blank'>more...</a>",

    tasks: [

        "Ingoing and outgoing call",
        "Customer Support",
        "Team meeting and everyday update"
    ],    

    skills: [
      "First corporate experience",
      "Working 48 hours per week",
      "Handle customer with cool mind",
  ]
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
