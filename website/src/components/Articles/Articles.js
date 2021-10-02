import React from "react";
import { blogs } from "../../data/blogs";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function ArticlesComponent() {
  return (
    <div className="resources">
      <div className="articles">
        <h1>Articles & Blogs</h1>

        <div>
          {blogs.map((blog, index) => (
            <ArticleContainer blog={blog} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const ArticleContainer = ({ blog }) => (
  <div className="card mb-5">
    <div className="row no-gutters">
      <div className="col-md-4">
        <div className="card img-box">
          <img
            src={blog.image}
            className="card-img-top"
            alt={blog.title}
            style={{ width: "70%", height: "40%" }}
          />
        </div>
      </div>
      <div className="col-md-8 article-details">
        <div className="card-body">
          <a href={blog.link} target="_blank" rel="noreferrer">
            <h3 className="card-title title">{blog.title}</h3>
          </a>
          {/* <p className="card-text">{blog.text}</p> */}
          {/* <cite title="Author Name">&nbsp;&nbsp;Thread * 10 Min Read</cite> */}
        </div>
      </div>
    </div>
  </div>
);
