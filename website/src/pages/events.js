import React from 'react';
// import Header from '../components/Header/Header';
import ResourcesComponent from '../components/resourcesComponent/resourcesComponent';
// import Footer from '../components/Footer/Footer';
import './events.css'



export default function EventsPage() {
  return (
    <div className="eventList">
     
      <h1 className="eventHeading" style={{paddingTop:20}}> Events/Programs</h1>
      <ol>
      <li className="eventName"><a className="eventLink" href="https://codingcompetitions.withgoogle.com/codejamio">Google Codejam io for Women</a></li>
      <li className="eventName"><a className="eventLink" href="https://buildyourfuture.withgoogle.com/programs/step/">Google STEP Internship</a></li>
      <li className="eventName"><a className="eventLink" href="https://gssoc.girlscript.tech/">Girlscript Summer of Code</a></li>
      <li className="eventName"><a className="eventLink" href="https://summerofcode.withgoogle.com/">Google Summer of Code</a></li>
      <li className="eventName"><a className="eventLink" href="https://www.shecodesindeed.com/">She Codes by Indeed</a></li>
      <li className="eventName"><a className="eventLink" href="https://www.outreachy.org/">Outreachy</a></li>
      <li className="eventName"><a className="eventLink" href="https://www.goldmansachs.com/careers/students/programs/india/womens-possibilities-summit-finance.html">Goldman Sachs Women Possibilities Summit: Finance</a></li>
      <li className="eventName"><a className="eventLink" href="https://www.intuit.com/careers/programs/tech-women-at-intuit/">Tech Women at Intuit</a></li>
      <li className="eventName"><a className="eventLink" href="https://www.womenwhocode.com/delhi">Women Who Code: Delhi</a></li>
      <li className="eventName"><a className="eventLink" href="https://india.swe.org/">Society of Women Engineers India</a></li>
      <li className="eventName"><a className="eventLink" href="https://developher.com/">DevelopHER</a></li>
      <li className="eventName"><a className="eventLink" href="https://wintathon2020.splashthat.com/">LinkedIn Wintathon</a></li>
      <li className="eventName"><a className="eventLink" href="#">Adobe Codiva</a></li>
      <li className="eventName"><a className="eventLink" href="#">Visa Code Your Way</a></li>
      <li className="eventName"><a className="eventLink" href="https://careers.microsoft.com/students/us/en/ind-programs">Microsoft Codess</a></li>
      <li className="eventName"><a className="eventLink" href="https://www.uber.com/us/en/careers/teams/university/">Uber She++</a></li>
      <li className="eventName"><a className="eventLink" href="#">Flipkart Girls Wanna Code</a></li>
      <li className="eventName"><a className="eventLink" href="https://coachin2021.splashthat.com/">LinkedIn CoachIn Program</a></li>

      </ol>
 
    </div>
  );
}
