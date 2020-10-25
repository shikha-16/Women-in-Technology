import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./organisttionComponentStyles.css";

// importing organisations data
import { organisations } from "../../../organistaion";

// image
import image from "../../images/example-image.jpg";

export default function OrganisationComponent() {
  return (
    <div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col text-center page-title">
              <h1>Organizations promoting women in Tech</h1>
            </div>
          </div>
          {organisations.map((org, _index) => (
            <React.Fragment key={_index}>
              {_index % 2 === 0 ? (
                <LeftImageBox
                  title={org.title}
                  text={org.text}
                  link={org.link}
                />
              ) : (
                <RightImageBox
                  title={org.title}
                  text={org.text}
                  link={org.link}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

const LeftImageBox = ({ title, text, link }) => (
  <div className="card mb-5 box-wrapper">
    <div className="row no-gutters">
      <div className="col-md-4">
        <div className="card">
          <img src={image} className="card-img-top" alt={title} />
          <div className="card-body org-details">
            <a href={link}>
              <h6 className="card-title">{title}</h6>
            </a>
            <p className="card-text">Organisation Details</p>
          </div>
        </div>
      </div>
      <div className="col-md-8 org-info">
        <div className="card-body">
          <a href={link}>
            <h3 class="card-title">{title}</h3>
          </a>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  </div>
);

const RightImageBox = ({ title, text, link }) => (
  <div className="card mb-5 box-wrapper">
    <div className="row no-gutters">
      <div className="col-md-8 org-info">
        <div className="card-body">
          <a href={link}>
            <h3 class="card-title">{title}</h3>
          </a>
          <p className="card-text">{text}</p>
        </div>
      </div>
      <div className="col-md-4 order-first order-md-last">
        <div className="card">
          <img src={image} className="card-img-top" alt={title} />
          <div className="card-body org-details">
            <a href={link}>
              <h6 className="card-title">{title}</h6>
            </a>
            <p className="card-text">Organisation Details</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
