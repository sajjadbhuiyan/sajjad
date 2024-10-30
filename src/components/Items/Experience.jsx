import React from "react";

function Experience({ experience: { year, degree, content, company, tasks, city, country, company_website, company_mail, sector, judged_link, judged_access} }) {
  return (
    <div className="entry">
      <div className="title">
        <span>{year}</span>
      </div>
      <div className="body">
        <h3 className="mt-0 ">{degree}</h3>
        <p className="mt-0 fs-5">{company}</p>
        <div className="flex"> 
        {city && country && (
          <>
            <i className="icon-location-pin"></i> {city}, {country}
          </>
        )}
        </div>
       
        <div className="flex">
          {company_website && company_website && (
            <>
              <a href={company_website}><i className="icon-globe"></i> {company_website} </a>    <span className="ml-2">
                <i className="icon-envelope"></i> 
                <a href={`mailto:${company_mail}`} className="ml-1">
                  {company_mail}
                </a>
              </span>
            </>
          )
            
          }
        </div>
        <br></br>
        <p><b>About the {company}:</b></p>
        <p>{content}</p>
        <ul className="task-list mt-2 pl-4">
          {tasks?.map((task, index) => (
            <li key={index} className="task-item">{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Experience;
