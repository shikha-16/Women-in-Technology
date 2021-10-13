import React from "react";
import "./resourcesStyles.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { GithubRepos } from "../../data/githubRepo";
import { blogs } from "../../data/blogs";
import Infographics from '../inforgraphic/infographics'
import Divider from "../Divider";
// image
import image from "../../images/social/github.png";

export default function ResourcesComponent() {
  return (
    <div className="resources">
      {/* <div className="links">
        <Link to="/scholarship">
          <h1>Scholarships Page &gt; </h1>
        </Link>
        <Link to="/organisation">
          <h1>Organisations Page &gt; </h1>
        </Link>
        <Link to="/">
          <h1>World of CS Page &gt; </h1>
        </Link>
      </div> */}
 <Divider />
      <div className="articles pt-lg-4 pt-lg-1">
        <h1 className="pb-lg-4 pb-md-1">Articles & Blogs</h1>

        <div className="row">
          <div className="col-md-6  justify-content-center">
          {blogs.map((blog, index) => {
            if (index < 2) {
              return <ArticleContainer blog={blog} key={index} />;
            }
            return null;
          })}
        </div>
        <div className="col-md-6 justify-content-center">
          {blogs.map((blog, index) => {
            if ((index>=3)&(index<5)) {
              return <ArticleContainer blog={blog} key={index} />;
            }
            return null;
          })}
          </div>
        </div>

        <div className="see-more">
          <a href="/articless" style={{ color: "inherit", fontWeight: "bold" }}>
            <h4>See More &gt; </h4>
          </a>
        </div>
      </div>

      <Divider />

      <div className="articles">
        <h1 className="pt-4 pb-4">GITHUB Repositories to Star</h1>

        <div className="row">
          <div className="col-md-6 justify-content-center">
            
             {GithubRepos.map((repo, index) => {
            if (index < 2) return <GithubRepoStar key={index} repo={repo} />;
            return null;
          })}
            
          </div>
          <div className="col-md-6 justify-content-center">
          {GithubRepos.map((repo, index) => {
            if ((index>=3)&(index<5)) return <GithubRepoStar key={index} repo={repo} />;
            return null;
          })}
          </div>
        </div>

        <div className="see-more">
          <a href="/github" style={{ color: "inherit", fontWeight: "bold" }}>
            <h4>See More &gt; </h4>
          </a>
        </div>
      </div>
      <Divider />
      <div className="pt-lg-4 pt-md-1 pb-lg-4 pb-md-1">
      <Infographics />
      </div>
      
    </div>
  
    
  );
}

const GithubRepoStar = ({ repo }) => (
  <a href={repo.link} className="" target="_blank" rel="noreferrer">
  
  <div className="align-items-center text-align-center github-card border border-dark rounded p-4  my-3">
      
   
    {/* <hr /> */}
  
        <div className="img-box">
          <img
            src={image}
            className=" card-img-top"
            alt="title"
            style={{ width: "150px"}}
          />
        </div>
    
     
        <div className="card-body">
         
            <h3 className="card-title title">{repo.name}</h3>
         
          <p className="card-text" style={{ color: "black" }}>
            {repo.excerpt}
          </p>
        </div>
      </div>
  </a>  
);

const ArticleContainer = ({ blog }) => (
  
 

   <div className="article-card text-decoration-none align-items-center justify-content-center  border border-dark rounded mb-3 p-3">

<a href={blog.link} target="_blank" rel="noreferrer">
{/* <hr /> */}

    <div className="card img-box">
      <img
        src={blog.image}
        className="card-img-top d-block w-100 m-2"
        alt={blog.title}
        style={{ width: "45%", height: "45%" }}
      />
    </div>
 
    <div className="card-body">
     
        <h3 className="card-title title"><u>{blog.title}</u></h3>
     
      <p className="card-text" style={{ color: "black" }}>
        {blog.author}
      </p>
      {/* <cite title="Author Name">&nbsp;&nbsp;Thread * 10 Min Read</cite> */}
    </div>

   
    </a>

 
   
</div>
);
