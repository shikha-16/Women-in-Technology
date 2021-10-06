import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import image1 from "../../images/inspiring/grace.png";
import image2 from "../../images/inspiring/anita.png";
import image3 from "../../images/inspiring/reshma.png";
import image4 from "../../images/inspiring/debjani.png";
import image5 from "../../images/inspiring/geetha.png";
import image6 from "../../images/inspiring/ashni.png";
import image7 from "../../images/inspiring/ashwini.png";
import image8 from "../../images/inspiring/roshni.png";

import "../Contributing/ss.css";

const content = [
  {
    image: image1,
    h3: "Grace Hopper",
    h31: "She was a central figure in developing the first commercial computer, the UNIVAC I , which changed the course of computers in society",
    p1: 'Look, basically, if you’re using a computer - you’re using Grace Hopper’s work. Oh, and if you have ever had a "computer bug" - you can go ahead and thank Hopper for coining that phrase too!',
    li: "https://www.biography.com/scientist/grace-hopper",
  },
  {
    image: image2,
    h3: "Anita Borg",
    h31: "",
    p1: "Anita Borg was an American computer scientist. She founded the Institute for Women and Technology and the Grace Hopper Celebration of Women in Computing.",
    li: "https://anitab.org/our-history/",
  },
  {
    image: image3,
    h3: " Reshma Saujani, New York",
    h31: "Lawyer, politician and founder/former CEO, Girls Who Code",
    p1: "Life hack: “Teach girls bravery, not perfection.”",
    li: "https://reshmasaujani.com/about/",
  },
  {
    image: image4,
    h3: " Debjani Ghosh, Delhi",
    h31: "President, NASSCOM",
    p1: "Life hack: “It’s time for women to stop second-guessing ourselves and start believing that we are the best at what we do. If you don’t, no one else will believe it.”",
    li: "https://leanin.org/stories/debjani-ghosh",
  },
  {
    image: image5,
    h3: " Geetha Kannan, Bengaluru",
    h31: "Managing director, Anitab.org India",
    p1: "Life hack: “Stay focused on the goal, and the opposition will melt away.”",
    li: "https://yourstory.com/2018/11/women-equal-crucial-building-tech-world-needs-says-geetha-kannan-md-anitab-org",
  },
  {
    image: image6,
    h3: " Ashni Dwarkadas, Mumbai",
    h31: "Co-founder, Hackberry",
    p1: "Life hack: “The conversation has to start when girls are young and have no inhibitions about speaking up and asserting themselves.”",
    li: "https://yourstory.com/2016/06/koffeeplace",
  },
  {
    image: image7,
    h3: "Ashwini Asokan, Chennai",
    h31: "Founder and CEO, Mad Street Den",
    p1: "Life hack: “Re-skill yourself – learn and intern!”",
    li: "http://shenomics.com/ashwini-ashokan/",
  },
  {
    image: image8,
    h3: " Roshni Nadar Malhotra",
    h31: "CEO and Executive Director of HCL Corporation",
    p1: '"To me, giving is much, much more than just charity or signing a cheque. We make long-term investments in people’s lives, through education and arts. I’m in this because I get to be a part of someone else’s life, someone else’s journey of becoming what they have the potential to become"',
    li: "",
  },
];

export default function Inspirational() {
  return (
    <div className="container">
      <h2 style={{ marginBottom: "25px" }}>Women in Technology Role Models</h2>
      <h5>
        <p>
          "Strong role models are leading the charge and the change :
          raised-hands: As you grow in your career, it’s important that you have
          access to people you can identify with. Here are some studies to get
          you started!"
        </p>
      </h5>
      <div>
        {/*changed p to div to solve validateDomNesting error since
        a cannot appear as descendant of p according to react
        */}
        <div className="containerss">
          1.
          <a
            href="https://www.pluralsight.com/content/dam/pluralsight/pdfs/landing-pages/b2c/Women_In_Tech.pdf"
            target="_blank"
            rel="noreferrer "
            style={{ color: "inherit", fontWeight: "bold" }}
          >
            A STUDY:Women in tech careers yearn for female role models and
            flexibility in the workplace
          </a>
        </div>
        <div className="containerss">
          2.
          <a
            href="https://obamawhitehouse.archives.gov/women-in-stem"
            target="_blank"
            rel="noreferrer noopener"
            style={{ color: "inherit", fontWeight: "bold" }}
          >
            The Untold History of Women in Science and Technology
          </a>
          : Listen to women from across the Administration tell the stories of
          their personal heroes across the fields of science, technology,
          engineering, and math (STEM). Share them yourself. Add your own. And
          honor their legacy by committing to encourage a young woman to pursue
          a career in science.
        </div>
        <div className="containerss">
          3.
          <a
            href="https://www.globalapptesting.com/blog/the-women-who-changed-the-tech-world"
            target="_blank"
            rel="noreferrer "
            style={{ color: "inherit", fontWeight: "bold" }}
          >
            The Women Who Changed The Tech World
          </a>
        </div>
      </div>

      {content.map((a, i) => (
        <div
          className="card1"
          key={i}
          style={{
            marginBottom: "30px",
            width: "100%",
            height: "70%",
            // border: 'ridge',
            boxShadow: "5px 5px 5px 5px #888888",
          }}
        >
          <div className="rows">
            <img
              src={a.image}
              style={{
                height: "240px",
                width: "240px",
                marginTop: "10px",
                // marginBottom: '5px',
                marginLeft: "15px",
                marginRight: "15px",
              }}
              alt=""
            />
            <div>
              <h3 style={{ marginLeft: "45px" }}>{a.h3}</h3>
            </div>
          </div>
          <h5
            style={{ fontStyle: "italic", marginLeft: "15px", marginTop: "2%" }}
          >
            {a.h31}
          </h5>
          <p style={{ border: "20px", color: "inherit", marginLeft: "15px" }}>
            {a.p1}
          </p>
          <p>
            <a
              target="_blank"
              rel="noreferrer "
              style={{
                color: "inherit",
                fontWeight: "bold",
                marginLeft: "15px",
              }}
              href={a.li}
            >
              Read More
            </a>
          </p>
          {/* <Divider /> */}
        </div>
      ))}
    </div>
  );
}
