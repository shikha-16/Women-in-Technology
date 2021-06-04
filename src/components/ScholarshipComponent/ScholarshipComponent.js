/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './ScholarshipComponent.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// image
import image from '../../images/scholarship/ggs.jpg';
import image1 from '../../images/scholarship/venkat.png';
import image2 from '../../images/scholarship/gcs.png';
import image3 from '../../images/scholarship/adobe.png';
import image4 from '../../images/scholarship/adobe_india.png';
import image5 from '../../images/scholarship/palantir.png';
import image6 from '../../images/scholarship/nutanix.png';
import image7 from '../../images/scholarship/ghc.png';

export default function ScholarshipComponent() {
  return (
    <div>
      <div>
        <div className="container">
          <div className="row">
            <div
              className="col text-center page-title"
              style={{ marginTop: '13%' }}
            >
              <h1>Scholarship for Women in Tech</h1>
            </div>
          </div>
          <div className="row content-box">
            <div className="col-md-8">
              <a
                href="https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship-apac/"
                target="_blank"
              >
                <h4>Generation Google Scholarship</h4>
              </a>
              <p>
                Through the Women Techmakers Scholars Program - formerly the
                Google Anita Borg Memorial Scholarship Program - Google is
                furthering Dr. Anita Borg’s vision of creating gender equality
                in the tech industry by encouraging women to excel as active
                participants and leaders in the field.
              </p>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top w-100"
                  src={image}
                  alt="card"
                  style={{ width: '350px', height: '200px' }}
                />
                <div className="card-body ">
                  <h6 className="card-title ">Generation Google Scholarship</h6>
                  <a
                    href="https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship-apac/"
                    // eslint-disable-next-line react/jsx-no-target-blank
                    target="_blank"
                  >
                    See More {'>'}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row content-box">
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top w-100"
                  src={image2}
                  alt="card"
                  style={{ width: '350px', height: '200px' }}
                />
                <div className="card-body ">
                  <h6 className="card-title ">
                    Google Conference and Travel Scholarships
                  </h6>

                  <a
                    href="https://buildyourfuture.withgoogle.com/scholarships/google-travel-scholarships/"
                    target="_blank"
                  >
                    See More {'>'}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <a
                href="https://buildyourfuture.withgoogle.com/scholarships/google-travel-scholarships/"
                target="_blank"
              >
                <h4>Google Conference and Travel Scholarships</h4>
              </a>
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
          <div className="row content-box">
            <div className="col-md-8">
              <a href="https://research.adobe.com/scholarship/" target="_blank">
                <h4>Adobe Research Women-in-Technology Scholarship</h4>
              </a>
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
                  className="card-img-top w-100"
                  src={image3}
                  alt="card"
                  style={{ width: '350px', height: '200px' }}
                />
                <div className="card-body ">
                  <h6 className="card-title ">
                    Adobe Research Women-in-Technology Scholarship
                  </h6>

                  <a
                    href="https://research.adobe.com/scholarship/"
                    target="_blank"
                  >
                    See More {'>'}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row content-box">
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top w-100"
                  src={image4}
                  alt="card"
                  style={{ width: '350px', height: '200px' }}
                />
                <div className="card-body ">
                  <h6 className="card-title ">
                    Adobe India Women-in-Technology Scholarship
                  </h6>

                  <a
                    href="https://research.adobe.com/adobe-india-women-in-technology-scholarship/"
                    target="_blank"
                  >
                    See More {'>'}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <a
                href="https://research.adobe.com/adobe-india-women-in-technology-scholarship/"
                target="_blank"
              >
                <h4>Adobe India Women-in-Technology Scholarship</h4>
              </a>
              <p>
                Through the Adobe India Women-in-Technology Scholarship, we are
                striving towards creating gender equality in science, technology
                and engineering domains by encouraging women to showcase their
                excellence in computing and technology and become future leaders
                and role models in the field.
              </p>
            </div>
          </div>
          <div className="row content-box">
            <div className="col-md-8">
              <a
                href="https://www.palantir.com/students/scholarship/global-impact/"
                target="_blank"
              >
                <h4>Palantir Global Impact Scholarship</h4>
              </a>
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
                  className="card-img-top w-100"
                  src={image5}
                  alt="card"
                  style={{ width: '350px', height: '200px' }}
                />
                <div className="card-body ">
                  <h6 className="card-title ">
                    Palantir Global Impact Scholarship
                  </h6>

                  <a
                    href="https://www.palantir.com/students/scholarship/global-impact/"
                    // eslint-disable-next-line react/jsx-no-target-blank
                    target="_blank"
                  >
                    See More {'>'}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row content-box">
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top w-100"
                  src={image6}
                  alt="card"
                  style={{ width: '350px', height: '200px' }}
                />
                <div className="card-body ">
                  <h6 className="card-title ">
                    Nutanix .heart Women in Technology Scholarship
                  </h6>

                  <a
                    href="https://www.nutanix.com/scholarships"
                    // eslint-disable-next-line react/jsx-no-target-blank
                    target="_blank"
                  >
                    See More {'>'}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <a href="https://www.nutanix.com/scholarships" target="_blank">
                <h4>Nutanix .heart Women in Technology Scholarship</h4>
              </a>
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
          <div className="row content-box">
            <div className="col-md-8">
              <a href="https://ghc.anitab.org/scholarships-2/" target="_blank">
                <h4>Grace Hopper Celebration Scholarships</h4>
              </a>
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
                  className="card-img-top w-100"
                  src={image7}
                  alt="card"
                  style={{ width: '350px', height: '200px' }}
                />
                <div className="card-body ">
                  <h6 className="card-title ">
                    Grace Hopper Celebration Scholarships
                  </h6>

                  <a
                    href="https://ghc.anitab.org/scholarships-2/"
                    target="_blank"
                  >
                    See More {'>'}
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
