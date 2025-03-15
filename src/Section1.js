import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";

function Section1({ onresponce }) {
  const { width, height } = useWindowSize();
  // Access 'onresponce' here
  const handleClick = (res) => {
    // Call the 'onresponce' function passed as a prop
    onresponce(res);
  };

  return (
    <div>
      <div>
        <div className="card">
          <div className="card-header">HI NEETHU</div>
          <div className="card-body">
            <h5 className="card-title">I need to tell you something</h5>
            <p className="card-text">
              I've been thinking about something I’ve never really said before,
              but I feel it’s the right time now. I’m deeply falling for you.
              It’s hard to put into words, but every moment with you feels more
              special than the last, and I can’t ignore how much my feelings for
              you are growing. I just wanted you to know that you mean so much
              to me, and I’m excited to see where this connection takes us.
            </p>
            {/* <Confetti width={width} height={height} /> */}
            <h5 className="card-title">Will you marry Me ? </h5>

            {/* Use buttons instead of anchor tags */}
            <Link
              to={"/success"}
              className="btn btn-primary first-button"
              onClick={() => handleClick("YES")}
            >
              YES
            </Link>

            <button
              style={{ margin: 20 }}
              className="btn btn-primary second-button"
              onClick={() => handleClick("NO")}
            >
              NO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
