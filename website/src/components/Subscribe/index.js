import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index-sub.css';
import shelogo from '../../images/others/she-gazette.webp';

var linkToSheGazette = 'https://shegazette.co/index.html'

function goTo(link) {
  if (typeof window !== 'undefined') {
    window.location.href = link;
  }
}

export default function Subscribe() {
  return (
    <div class="sub">
      <h3 class="sub-title">
        Subscribe to the newsletter
      </h3>
      <div class="sub-container">
        <div class="sub-child-left">
        <div>
        We aim to accomplish more together by collaborating with <b class="sub-b" onClick={(e) => {
            e.preventDefault();
            goTo(linkToSheGazette);
            }}>SheGazette</b>!
        Please subscribe to their newsletter to get regular updates about opportunities via email.
        </div>
        <button
          class="sub-button"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            goTo(linkToSheGazette);
            }}>
          Subscribe
        </button>
        </div>
        <img
          class="sub-child-right"
          src={shelogo}
          onClick={(e) => {
            e.preventDefault();
            goTo(linkToSheGazette);
          }}
        />
      </div>
    </div>
  );
}
