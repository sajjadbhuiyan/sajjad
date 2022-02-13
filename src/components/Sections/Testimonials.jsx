import React from "react";
import Slider from "react-slick";
import Testimonial from "../Items/Testimonial";

const testimonialsData = [
  {
    id: 1,
    content:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck!",
    authorImage: "images/customer-1.png",
    authorName: "Shibli Numani",
    authorStatus: "Sr. Visual Designer / UX Designer",
    authorwebsite: "http://www.shiblinumani.com/"
  },
  {
    id: 2,
    content:
      "His work was good with me. Fast response in communication, I recommend this developer for your satisfaction work.",
    authorImage: "images/customer-2.png",
    authorName: "Mohammad Kutub U.",
    authorStatus: "Administrative Executive",
    authorwebsite: "https://www.upwork.com/freelancers/~0150c32d90c1716839"
  },
  {
    id: 3,
    content:
      "Thanks a million, I have really enjoyed working on this. I appreciate the tip as well and I recommend this person.",
    authorImage: "images/customer-3.png",
    authorName: "Shahriar Hoq Shubho",
    authorStatus: "Job Placement Executive",
    authorwebsite: "https://shahriar-shubho.netlify.app/"
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonials-wrapper">
      <Slider {...settings} className="padding-slider">
        {testimonialsData.map((testimonial) => (
          <Testimonial testimonial={testimonial} key={testimonial.id} />
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
