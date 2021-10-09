import React from "react";
import "./resourcesStyles.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { GithubRepos } from "../../data/githubRepo";
import { blogs } from "../../data/blogs";
import Infographic from "../../components/inforgraphic/infographics"
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
      <div className="articles">
        <h1>Articles & Blogs</h1>

        <div className="row">
          <div className="col-md-6 justify-content-center">
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
        <h1>GITHUB Repositories to Star</h1>

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
      <Infographic />
    </div>
    
  );
}

const GithubRepoStar = ({ repo }) => (
  
   
    <div className="card align-items-center text-align-center github-card border border-dark  p-3 my-3">
       <div className="card img-box">
          <img
            src={image}
            className="card-img-top"
            alt="title"
            // style={{ width: "60%", height: "30%" }}
          />
        </div>
     
     
        <div className="card-body">
          <a href={repo.link} target="_blank" rel="noreferrer">
            <h3 className="card-title title">{repo.name}</h3>
          </a>
          <p className="card-text" style={{ color: "black" }}>
            {repo.excerpt}
          </p>
        </div>
      
    </div>
   
    
  
 
);

const ArticleContainer = ({ blog }) => (
  
   <div className="card align-items-center text-align-center article-card border border-dark p-3 m-3">
  <div className="row">  
   <div className="col-4">
   <div className="card img-box">
      <img
        src={blog.image}
        className="d-block w-100 card-img-top my-3 mx-3"
        alt={blog.title}
        
      />
    </div>
    </div>  
    
 
   <div className="col-8">
   <div className="card-body">
      <a href={blog.link} target="_blank" rel="noreferrer">
        <h3 className="card-title title">{blog.title}</h3>
      </a>
      <p className="card-text" style={{ color: "black" }}>
        {blog.author}
      </p>
      {/* <cite title="Author Name">&nbsp;&nbsp;Thread * 10 Min Read</cite> */}
    </div>
   </div>
  
    </div>
  </div>

   
);
