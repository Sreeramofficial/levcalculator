import React from "react";
import { Link } from "react-router-dom";

function Section2(props) {
  const { percentageloaded, datas, visibility, againrejected } = props;

  // Event handler to call percentageloaded when the Link is clicked
  const handleClick = () => {
    percentageloaded(true); // Update the state in the parent component when the link is clicked
  };

  // Event handler to set againrejected to true when some action occurs (e.g., another button click)
  const handleAgainReject = () => {
    console.log("again reheted");
    againrejected(true); // Set againrejected to true to hide Section2
  };

  return (
    <div>
      <div className="card secondCards">
        <div className="card-header">No Please &#128531;</div>
        <div className="card-body">
          <h5 className="card-title">{datas.h1text}</h5>
          <p className="card-text">{datas.h2text}</p>
          <a
            href="/"
            className="btn btn-primary"
            style={{ margin: 30 }}
            onClick={handleAgainReject}
          >
            {datas.b1text}
          </a>
          {/* Using the visibility passed from parent */}
          <Link
            to="/sree"
            className="btn btn-primary"
            style={{ visibility }}
            onClick={handleClick}
          >
            {datas.b2text}
          </Link>
          {/* Button to set againrejected to true */}
        </div>
      </div>
    </div>
  );
}

export default Section2;
