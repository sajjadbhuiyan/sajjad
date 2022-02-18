import React, { useState, useEffect } from "react";
import Portfolio2 from "../Items/Portfolio2";

const filters = [
  {
    id: 1,
    name: "All Projects",
  },
  {
    id: 2,
    name: "Web-Development",
  },
  {
    id: 3,
    name: "Graphics-Design",
  },
  {
    id: 4,
    name: "Design",
  },
  {
    id: 5,
    name: "Art",
  },
];

const allData = [
  {
    id: 1,
    name: "SB Design and Printing",
    category: ["web-development", "design"],
    image: "images/portfolio/1.jpg",
    slug: "sb-printing",
  },
  {
    id: 2,
    name: "Skola",
    category: ["web-development", "design"],
    image: "images/portfolio/2.jpg",
    slug: "skola",
  },
  {
    id: 3,
    name: "Wallet Gallery",
    category: ["web-development", "design"],
    image: "images/portfolio/3.jpg",
    slug: "wallet-gallery",
  },
  {
    id: 4,
    name: "Visiting Card",
    category: ["graphics-design", "art"],
    image: "images/portfolio/4.jpg",
    slug: "visiting-card",
  },
  {
    id: 5,
    name: "Vector Graphics",
    category: ["graphics-design", "art"],
    image: "images/portfolio/5.jpg",
    slug: "vector-graphics",
  },
  {
    id: 6,
    name: "Unity of Religion",
    category: ["graphics-design", "art"],
    image: "images/portfolio/6.jpg",
    slug: "minimal-art",
  },
  {
    id: 7,
    name: "Yalla-Compare",
    category: ["web-development", "design"],
    image: "images/portfolio/7.jpg",
    slug: "yalla-compare",
  },
  {
    id: 8,
    name: "Yamak",
    category: ["web-development", "design"],
    image: "images/portfolio/8.jpg",
    slug: "yamak-job-task",
  },
  {
    id: 9,
    name: "LMS",
    category: ["web-development", "design"],
    image: "images/portfolio/9.jpg",
    slug: "baf-lms",
  },
];

function Portfolios2() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].name.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    let targetFilter = e.target.value
      ? e.target.value.toLowerCase()
      : e.target.textContent.toLowerCase();
    setActiveFilter(targetFilter);
    let tempData;
    if (targetFilter === filters[0].name.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter((data) => {
        return (
          data.category.includes(targetFilter) && data.id <= dataVisibleCount
        );
      });
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;

    if (tempCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].name.toLowerCase()) {
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        let items = getAllItems.filter((data) => {
          return data.category.includes(activeFilter) && data.id <= tempCount;
        });
        setVisibleItems(items);
      }
    }
  };

  return (
    <>
      <ul className="portfolio-filter list-inline">
        {filters.map((filter) => (
          <li
            className={
              filter.name.toLowerCase() === activeFilter
                ? "list-inline-item current"
                : "list-inline-item"
            }
            key={filter.id}
            onClick={handleChange}
          >
            {filter.name}
          </li>
        ))}
      </ul>

      <div className="pf-filter-wrapper mb-4">
        <select
          className="portfolio-filter-mobile"
          onChange={(e) => handleChange(e)}
        >
          {filters.map((filter) => (
            <option value={filter.name} key={filter.id}>
              {filter.name}
            </option>
          ))}
        </select>
      </div>

      <div className="row portfolio-wrapper">
        {visibleItems.map((item) => (
          <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
            <Portfolio2 portfolio={item} />
          </div>
        ))}
      </div>

      {noMorePost ? null : (
        <div className="load-more text-center mt-4">
          <a
            href="#!"
            className="btn btn-default"
            onClick={(e) => handleLoadmore(e)}
          >
            <i className="fas fa-circle-notch"></i> Load more
          </a>
        </div>
      )}
    </>
  );
}

export default Portfolios2;
