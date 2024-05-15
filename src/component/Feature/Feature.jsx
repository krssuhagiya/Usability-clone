import React from "react";
import "./Feature.css";
const Feature = () => {
  return (
    <div className="feature container">
      <div className="heading-f">
        <h2 className="mainTxt">Your user research Swiss Army knife</h2>
        <button className="btn">See all feature →</button>
      </div>
      <div className="cards">
        <div className="card">
          <img className="picture" src="src/assets/f1.svg" alt="" />
          <h2 className="card-h">Card Sorting</h2>
          <p className="caption-h">
            Discover how people group and label information.
          </p>
          <button className="btn">Learn more →</button>
        </div>
        <div className="card">
          <img className="picture" src="src/assets/f2.svg" alt="" />
          <h2 className="card-h">Prototype tests</h2>
          <p className="caption-h">
          Discover how people navigate your Figma prototypes.
          </p>
          <button className="btn">Learn more →</button>
        </div>
        <div className="card">
          <img className="picture" src="src/assets/f3.svg" alt="" />
          <h2 className="card-h">First Click Tests</h2>
          <p className="caption-h">
            Test interaction with first click and navigation tests.
          </p>
          <button className="btn">Learn more →</button>
        </div>
        <div className="card">
          <img className="picture" src="src/assets/f4.svg" alt="" />
          <h2 className="card-h">Design surveys</h2>
          <p className="caption-h">
          Get feedback on images, videos or audio files.
          </p>
          <button className="btn">Learn more →</button>
        </div>
        <div className="card">
          <img className="picture" src="src/assets/f5.svg" alt="" />
          <h2 className="card-h">Preference tests</h2>
          <p className="caption-h">
          Find out which designs users prefer and why.
          </p>
          <button className="btn">Learn more →</button>
        </div>
        <div className="card">
          <img className="picture" src="src/assets/f6.svg" alt="" />
          <h2 className="card-h">Five second tests</h2>
          <p className="caption-h">
          Test comprehensibility by measuring first impressions.
          </p>
          <button className="btn">Learn more →</button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
