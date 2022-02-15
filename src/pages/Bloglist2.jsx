import React, { useState, useEffect } from "react";
import Layout2 from "../components/Layout/Layout2";
import Blog2 from "../components/Items/Blog2";
import Pagination from "../components/Items/Pagination";

const blogsData = [
  {
    id: 1,
    title: "JavaScript PropTypes",
    category: "Thoughts",
    featureImage: "images/blog/1.jpg",
    date: "15 February 2022",
    author: "MD. Sajjad",
    slug: "js-prototypers",
  },
  {
    id: 2,
    title: "The Ugly Truth About Design",
    category: "Blog",
    featureImage: "images/blog/2.jpg",
    date: "15 February 2022",
    author: "MD. Sajjad",
    slug: "js-class",
  },
];

function Bloglist2() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setPosts(blogsData);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <Layout2>
      <section className="shadow-blue white-bg padding mt-0">
        <div className="row -mt-50">
          {currentPosts.map((blog) => (
            <div className="col-md-6 mt-50" key={blog.id}>
              <Blog2 blog={blog} />
            </div>
          ))}
        </div>
        <div className="spacer" data-height="50"></div>
        {!(posts.length > postsPerPage) ? null : (
          <Pagination
            itemsPerPage={postsPerPage}
            totalItems={posts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
      </section>
    </Layout2>
  );
}

export default Bloglist2;
