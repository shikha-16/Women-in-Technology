import React from 'react';
import './organisttionComponentStyles.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// importing organisations data
import { organisations } from '../../data/organistaion';

// image
// import image from '../../images/example-image.jpg';

export default function OrganisationComponent() {
  return (
    <div>
      <div>
        <div className="container">
          <div className="row">
            <div
              className="col text-center page-title"
              style={{ marginTop: '13%' }}
            >
              <h1>Organizations promoting women in Tech</h1>
            </div>
          </div>
          {organisations.map((org, _index) => (
            <React.Fragment key={_index}>
              {_index % 2 === 0 ? (
                <LeftImageBox
                  image={org.image}
                  title={org.title}
                  text={org.text}
                  link={org.link}
                  href={org.href}
                />
              ) : (
                <RightImageBox
                  image={org.image}
                  title={org.title}
                  text={org.text}
                  link={org.link}
                  href={org.href}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

const LeftImageBox = ({ image, title, text, link, href }) => (
  <div className="card mb-5 box-wrapper">
    <div className="row no-gutters">
      <div className="col-md-4">
        <div className="card">
          <img src={image} className="card-img-top" alt={title} style={{width:"350px", height:"200px"}} />
          <div className="card-body org-details">
            <h6 className="card-title">{title}</h6>
            <a href={href} target="_blank" style={{ color: 'blue' }}>
              See More {'>'}
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-8 org-info">
        <div className="card-body">
          <a href={link} target="_blank">
            <h3 className="card-title">{title}</h3>
          </a>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  </div>
);

const RightImageBox = ({ image, title, text, link, href }) => (
  <div className="card mb-5 box-wrapper">
    <div className="row no-gutters">
      <div className="col-md-8 org-info">
        <div className="card-body">
          <a href={link}>
            <h3 className="card-title">{title}</h3>
          </a>
          <p className="card-text">{text}</p>
        </div>
      </div>
      <div className="col-md-4 order-first order-md-last">
        <div className="card">
          <img src={image} className="card-img-top" alt={title}  style={{width:"300px" , height:"200px"}} />
          <div className="card-body org-details">
            <a href={link}>
              <h6 className="card-title">{title}</h6>
            </a>
            <a href={href} style={{ color: 'blue' }}>
              See More {'>'}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
