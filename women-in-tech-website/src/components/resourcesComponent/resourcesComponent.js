import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./resourcesStyles.css";
import { Link } from "gatsby";
import { GithubRepos } from "../../../githubRepo";
import { blogs } from "../../../blogs";

// image
import image from "../../images/example-image.jpg";

export default function ResourcesComponent() {
  return (
    <div className="resources">
      <div className="links">
        <Link to="/scholarship">
          <h1>Scholarships Page &gt; </h1>
        </Link>
        <Link to="/organisation">
          <h1>Organisations Page &gt; </h1>
        </Link>
        <Link to="/">
          <h1>World of CS Page &gt; </h1>
        </Link>
      </div>

      <div className="articles">
        <h1>Articles & Blogs</h1>

        <div>
          {blogs.map((blog, index) => {
            if (index < 9) {
              return <ArticleContainer blog={blog} />;
            }
            return null;
          })}
        </div>

        <div className="see-more">
          <a href="#">
            {" "}
            <h4>See More &gt; </h4>
          </a>
        </div>
      </div>

      <hr className="hr" />

      <div className="articles">
        <h1>GITHUB Repositories to Star</h1>

        <div>
          {GithubRepos.map((repo, index) => {
            if (index < 6) return <GithubRepoStar key={index} repo={repo} />;
            return null;
          })}
        </div>

        <div className="see-more">
          <a href="#">
            {" "}
            <h4>See More &gt; </h4>
          </a>
        </div>
      </div>
    </div>
  );
}

const GithubRepoStar = ({ repo }) => (
  <div className="card mb-5">
    <div className="row no-gutters">
      <div className="col-md-4">
        <div className="card img-box">
          <img src={image} className="card-img-top" alt="title" />
        </div>
      </div>
      <div className="col-md-8 article-details">
        <div className="card-body">
          <a href={repo.link}>
            <h3 class="card-title title">{repo.name}</h3>
          </a>
          <p className="card-text">{repo.excerpt}</p>

          <cite title="Author Name">{repo.username}</cite>
        </div>
      </div>
    </div>
  </div>
);

const ArticleContainer = ({ blog }) => (
  <div className="card mb-5">
    <div className="row no-gutters">
      <div className="col-md-4">
        <div className="card img-box">
          <img src={image} className="card-img-top" alt={blog.title} />
        </div>
      </div>
      <div className="col-md-8 article-details">
        <div className="card-body">
          <a href={blog.link}>
            <h3 class="card-title title">{blog.title}</h3>
          </a>
          <p className="card-text">{blog.text}</p>

          <cite title="Author Name">~ Author Name on Website/Blog</cite>
          <cite title="Author Name">&nbsp;&nbsp;Thread * 10 Min Read</cite>
        </div>
      </div>
    </div>
  </div>
);
