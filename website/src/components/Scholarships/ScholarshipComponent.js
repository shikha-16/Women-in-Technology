/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import "./ScholarshipComponent.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

// image
import image from "../../images/scholarship/ggs.jpg";

import image2 from "../../images/scholarship/gcs.png";
import image3 from "../../images/scholarship/adobe.png";
import image4 from "../../images/scholarship/adobe_india.png";
import image5 from "../../images/scholarship/palantir.png";
import image6 from "../../images/scholarship/nutanix.png";
import image7 from "../../images/scholarship/ghc.png";
import "../../DarkMode.css";

export default function ScholarshipComponent() {
  const [hovered, setHovered] = useState([{ hovered1: false }]);
  return (
    <div>
      <div>
        <div className="container">
          <div className="row">
            <div
              className="col text-center page-title"
            >
              <h1>Scholarships for Women in Technology</h1>
            </div>
          </div>
          <div className="row content-box">
            <div className="col-md-8">
              {/*changed link's color to theme color as per requirements*/}
              <h4
                onMouseOver={() => setHovered([{ ...hovered, hovered1: true }])}
                onMouseLeave={() =>
                  setHovered([{ ...hovered, hovered1: false }])
                }
              >
                <a
                  href="https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship-apac/"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{
                    color: hovered[0].hovered1 ? "#0da4fd" : "inherit",
                    fontWeight: "bold",
                  }}
                >
                  Generation Google scholarship
                </a>
              </h4>
              {/*added className information to p tag in order to justify it*/}
              <p className="information">
                Generation Google Scholarship: for women in computer science
                (formerly known as Women Techmakers Scholarship) was established
                to help aspiring students pursuing computer science degrees
                excel in technology and become leaders in the field. Selected
                students will receive $1,000 USD for the 2021-2022 school year.
                Generation Google Scholarship: for women in computer science
                will be awarded based on the strength of each candidate's
                commitment to diversity, equity, and inclusion, demonstrated
                leadership, and academic performance. Note - This scholarship is
                also available in North America region, and is aimed at groups
                historically excluded from the technology industry, including
                Women, Black/African American, Hispanic/Latinx, American Indian,
                Native Hawaiian/Pacific Islander. Read previous scholars
                experience <a href="https://medium.com/@sudeepa.kolli/google-wtm-apac-scholarship-2020-9dabe5ddf052"style={{ color: "inherit" }}>here</a>{" "}
                .
              </p>
            </div>
            <div className="col-md-4 order-first order-md-last">
              <div className="card">
                <img
                  className="card-img-top"
                  src={image}
                  alt="card"
                  style={{ width: "300px"}}
                />
                <div className="card-body ">
                  <h6 className="card-title" style={{ color: "black" }}>
                    Generation Google Scholarship
                  </h6>
                  <a
                    href="https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship-apac/"
                    // eslint-disable-next-line react/jsx-no-target-blank
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    See More {">"}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row content-box">
            <hr />
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={image2}
                  alt="card"
                  style={{ width: "200px", height: "200px" }}
                />
                <div className="card-body ">
                  <h6 className="card-title" style={{ color: "black" }}>
                    Google Conference and Travel Scholarships
                  </h6>

                  <a
                    href="https://buildyourfuture.withgoogle.com/scholarships/google-travel-scholarships/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    See More {">"}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <h4
                onMouseOver={() => setHovered([{ ...hovered, hovered2: true }])}
                onMouseLeave={() =>
                  setHovered([{ ...hovered, hovered2: false }])
                }
              >
                <a
                  href="https://buildyourfuture.withgoogle.com/scholarships/google-travel-scholarships/"
                  target="_blank"
                  style={{
                    color: hovered[0].hovered2 ? "#0da4fd" : "inherit",
                    fontWeight: "bold",
                  }}
                  rel="noreferrer noopener"
                >
                  Google Conference and Travel Scholarships
                </a>
              </h4>
              <p>
                At Google, we believe a diversity of attributes, experiences,
                and perspectives are needed to build tools that can change the
                world. Everyone deserves an opportunity to pursue connections in
                the industry, networking with peers, and a career path in
                technology. To help break down the barriers that prevent
                underrepresented groups in technology and business from
                attending leading conferences, we're excited to offer Google
                Conference and Travel Scholarships for selected conferences in
                the tech industry and related fields.
              </p>
            </div>
          </div>
          <hr />
          <div className="row content-box">
            
            <div className="col-md-8">
              <h4
                onMouseOver={() => setHovered([{ ...hovered, hovered3: true }])}
                onMouseLeave={() =>
                  setHovered([{ ...hovered, hovered3: false }])
                }
              >
                <a
                  href="https://research.adobe.com/scholarship/"
                  target="_blank"
                  style={{
                    color: hovered[0].hovered3 ? "#0da4fd" : "inherit",
                    fontWeight: "bold",
                  }}
                  rel="noreferrer noopener"
                >
                  Adobe Research Women-in-Technology Scholarship
                </a>
              </h4>
              <p>
                To bring more gender diversity to the technology industry, we
                are pleased to invite applications to the Adobe Research
                Women-in-Technology Scholarship. The Adobe Research
                Women-in-Technology Scholarship recognizes outstanding
                undergraduate and masters female students anywhere in the world
                who are studying computer science.
              </p>
            </div>
            <div className="col-md-4 order-first order-md-last">
              <div className="card">
                <img
                  className="card-img-top"
                  src={image3}
                  alt="card"
                  style={{ width: "300px", height: "100px" }}
                />
                <div className="card-body ">
                  <h6 className="card-title " style={{ color: "black" }}>
                    Adobe Research Women-in-Technology Scholarship
                  </h6>

                  <a
                    href="https://research.adobe.com/scholarship/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    See More {">"}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row content-box">
            
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={image4}
                  alt="card"
                  style={{ width: "350px", height: "200px" }}
                />
                <div className="card-body">
                  <h6 className="card-title " style={{ color: "black" }}>
                    Adobe India Women-in-Technology Scholarship
                  </h6>
                  <a
                    href="https://research.adobe.com/adobe-india-women-in-technology-scholarship/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    See More {">"}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <h4
                onMouseOver={() => setHovered([{ ...hovered, hovered4: true }])}
                onMouseLeave={() =>
                  setHovered([{ ...hovered, hovered4: false }])
                }
              >
                <a
                  href="https://research.adobe.com/adobe-india-women-in-technology-scholarship/"
                  target="_blank"
                  style={{
                    color: hovered[0].hovered4 ? "#0da4fd" : "inherit",
                    fontWeight: "bold",
                  }}
                  rel="noreferrer noopener"
                >
                  Adobe India Women-in-Technology Scholarship
                </a>
              </h4>
              <p>
                Through the Adobe India Women-in-Technology Scholarship, we are
                striving towards creating gender equality in science, technology
                and engineering domains by encouraging women to showcase their
                excellence in computing and technology and become future leaders
                and role models in the field.
              </p>
            </div>
          </div>
          <hr />
          <div className="row content-box">
            
            <div className="col-md-8">
              <h4
                onMouseOver={() => setHovered([{ ...hovered, hovered5: true }])}
                onMouseLeave={() =>
                  setHovered([{ ...hovered, hovered5: false }])
                }
              >
                <a
                  href="https://www.palantir.com/students/scholarship/global-impact/"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{
                    color: hovered[0].hovered5 ? "#0da4fd" : "inherit",
                    fontWeight: "bold",
                  }}
                >
                  Palantir Global Impact Scholarship
                </a>
              </h4>
              <p>
                Palantir has launched the Global Impact Scholarship to celebrate
                and support students from across the globe who are beginning
                careers in technology. We hope to encourage these students in
                their computer science, engineering, and technical studies, and
                celebrate their potential to become leaders in these fields. We
                especially encourage students from communities that are
                historically underrepresented in the field of technology to
                apply.
              </p>
            </div>
            <div className="col-md-4 order-first order-md-last">
              <div className="card">
                <img
                  className="card-img-top"
                  src={image5}
                  alt="card"
                  style={{ width: "200px", height: "200px" }}
                />
                <div className="card-body ">
                  <h6 className="card-title " style={{ color: "black" }}>
                    Palantir Global Impact Scholarship
                  </h6>

                  <a
                    href="https://www.palantir.com/students/scholarship/global-impact/"
                    // eslint-disable-next-line react/jsx-no-target-blank
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    See More {">"}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row content-box">
            
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={image6}
                  alt="card"
                  style={{ width: "300px", height: "100px" }}
                />
                <div className="card-body">
                  <h6 className="card-title" style={{ color: "black" }}>
                    Nutanix .heart Women in Technology Scholarship
                  </h6>

                  <a
                    href="https://www.nutanix.com/scholarships"
                    // eslint-disable-next-line react/jsx-no-target-blank
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    See More {">"}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <h4
                onMouseOver={() => setHovered([{ ...hovered, hovered6: true }])}
                onMouseLeave={() =>
                  setHovered([{ ...hovered, hovered6: false }])
                }
              >
                <a
                  href="https://www.nutanix.com/scholarships"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{
                    color: hovered[0].hovered6 ? "#0da4fd" : "inherit",
                    fontWeight: "bold",
                  }}
                >
                  Nutanix Heart Women in Technology Scholarship
                </a>
              </h4>
              <p>
                Nutanix strongly believes in the power of diversity and we want
                to increase the ratio of women on our engineering teams. So,
                we’re creating scholarships to help young women develop the
                skills they need to pursue their passion of computer science. We
                are offering up to ten scholarships to female students in the
                United States, India, UK and Serbia who want to apply their love
                of technology to make a positive impact on the industry and the
                planet.
              </p>
            </div>
          </div>
          <hr />
          <div className="row content-box">
            
            <div className="col-md-8">
              <h4
                onMouseOver={() => setHovered([{ ...hovered, hovered7: true }])}
                onMouseLeave={() =>
                  setHovered([{ ...hovered, hovered7: false }])
                }
              >
                <a
                  href="https://ghc.anitab.org/scholarships-2/"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{
                    color: hovered[0].hovered7 ? "#0da4fd" : "inherit",
                    fontWeight: "bold",
                  }}
                >
                  Grace Hopper Celebration Scholarships
                </a>
              </h4>

              <p>
                The GHC Scholars Program provides funds for women who are either
                undergraduate students, graduate students, or faculty to attend
                our Celebration. Women who get selected as scholars gain access
                to career and academic workshops, networking opportunities, and
                memories that will last a lifetime.
              </p>
            </div>
            <div className="col-md-4 order-first order-md-last">
              <div className="card">
                <img
                  className="card-img-top"
                  src={image7}
                  alt="card"
                  style={{ width: "350px"}}
                />
                <div className="card-body">
                  <h6 className="card-title" style={{ color: "black" }}>
                    Grace Hopper Celebration Scholarships
                  </h6>

                  <a
                    href="https://ghc.anitab.org/scholarships-2/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    See More {">"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
