import React from "react";

function Testimonial({
  testimonial: { content, authorImage, authorName, authorStatus,authorwebsite },
}) {
  return (
    <div className="testimonial-item">
      <span className="symbol">
        <i className="fas fa-quote-left"></i>
      </span>
      <p>{content}</p>
      <div className="testimonial-details">
        <div className="thumb">
          <img src={authorImage} alt="customer-name" />
        </div>
        <div className="info">
          <a href={`${authorwebsite}`}><h4>{authorName}</h4></a>
          <span>{authorStatus}</span>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
