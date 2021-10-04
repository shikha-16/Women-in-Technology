import React from "react";
import { GithubRepos } from "../../data/githubRepo";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

// image
import image from "../../images/social/github.png";

export default function Githubcomponent() {
  return (
    <div className="resources">
      <div className="articles">
        <h1>Github Repositories to Star</h1>

        <div>
          {GithubRepos.map((repo, index) => (
            <GithubRepoStar key={index} repo={repo} />
          ))}
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
          <img
            src={image}
            className="card-img-top"
            alt="title"
            style={{ width: "60%", height: "30%" }}
          />
        </div>
      </div>
      <div className="col-md-8 article-details">
        <div className="card-body">
          <a href={repo.link} target="_blank" rel="noreferrer ">
            <h3 className="card-title title">{repo.name}</h3>
          </a>
          <p className="card-text" style={{ color: "black" }}>
            {repo.excerpt}
          </p>
        </div>
      </div>
    </div>
  </div>
);
