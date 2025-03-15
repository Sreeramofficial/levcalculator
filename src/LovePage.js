import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap"; // Importing bootstrap components for styling
import { MdHeight } from "react-icons/md";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
function LovePage() {
  const [message, setMessage] = useState("You will be always my mine 💖");
  const [heartColor, setHeartColor] = useState("red"); // Default heart color is red
  const { width, height } = useWindowSize();
  // Function to toggle the heart color and the message
  const toggleMessageAndColor = () => {
    if (heartColor === "red") {
      setHeartColor("pink");
      setMessage("Neethu, you mean the world to Sreeram! 🌎💖");
    } else {
      setHeartColor("red");
      setMessage("You will be always my mine 💖");
    }
  };

  return (
    <div style={{ marginTop: 20, height: 400 }}>
      <Confetti width={width} height={height} />
      <Container className="text-center mt-5">
        <Row>
          <Col>
            <h1 style={{ color: heartColor, fontSize: "50px" }}>
              💖 Sreeram & Neethu 💖
            </h1>
            <p
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: heartColor,
              }}
            >
              {message} {/* Display the current message */}
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <h2 style={{ color: heartColor }}>
              "Together, we create the most beautiful love story."
            </h2>
            <p style={{ fontSize: "20px" }}>
              The bond between us will make forever. 💑
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LovePage;
