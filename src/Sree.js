import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "./ChangingProgressProvider";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Sree() {
  const navigate = useNavigate(); // Initialize navigate
  const [perc, updatePer] = useState(0);
  const [textMessage, updateMessage] = useState(""); // Initialize textMessage with an empty string

  // Update perc and check if it's 100
  useEffect(() => {
    checkPercentage(perc);
  }, [perc]); // Runs every time perc is updated

  // Check the percentage and redirect if it reaches 100
  const checkPercentage = (percentage) => {
    if (percentage === 100) {
      // Update the message immediately
      updateMessage("I LOVE YOU MORE THAN ANYTHING 🌹🌹🌹");

      // Set a delay of 2 seconds (2000 milliseconds) before navigating
      setTimeout(() => {
        // Navigate after the delay
        navigate("/"); // Redirect to the root route ("/") after the delay
      }, 5500); // Delay in milliseconds (2000ms = 2 seconds)
    }
  };

  // Love-based theme styles
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#f8d7e1", // Soft pink background
    height: "100vh",
    textAlign: "center",
    fontFamily: "'Dancing Script', cursive", // Romantic cursive font
  };

  const heartStyle = {
    fontSize: "50px",
    color: "#ff007f", // Bright pink hearts
    animation: "pulse 1.5s infinite", // Animation for heart pulsing
  };

  const textStyle = {
    marginTop: "30px",
    fontSize: "28px",
    color: "#d63f6b", // Romantic red color
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <div style={{ marginBottom: "20px" }}>
        <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
          {(percentage) => {
            updatePer(percentage); // Update perc with the current percentage
            return (
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  pathTransitionDuration: 0.15,
                  pathColor: "#ff007f", // Pink path color
                  textColor: "#ff007f", // Text color for the percentage
                  trailColor: "#e5c0c6", // Light pink trail color
                  textSize: "20px", // Size of the text in progress bar
                })}
              />
            );
          }}
        </ChangingProgressProvider>
      </div>

      <div>
        {/* Add a floating heart emoji */}
        <div style={heartStyle}>❤️</div>

        {/* Display the love messages */}
        <h5 style={{ fontSize: "35px", color: "#e60073" }}>
          NEETHU &#10084; SREERAM
        </h5>

        <h4 style={textStyle}>{textMessage}</h4>

        {/* Add some sparkle or heart animation as background or floating */}
        <div className="floating-hearts">
          {/* Optionally add more hearts or animations */}
        </div>
      </div>
    </div>
  );
}

export default Sree;
