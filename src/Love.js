import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap"; // Bootstrap components

function Love() {
  const [message, setMessage] = useState("Sreeram loves Neethu!");
  const [heartColor, setHeartColor] = useState("red");

  // Function to toggle the heart color
  const handleToggleColor = () => {
    if (heartColor === "red") {
      setHeartColor("pink");
      setMessage("Neethu, you are my everything!");
    } else {
      setHeartColor("red");
      setMessage("Sreeram loves Neethu!");
    }
  };

  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1 style={{ color: heartColor }}>💖 Sreeram & Neethu 💖</h1>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>{message}</p>
          <Button
            onClick={handleToggleColor}
            variant="danger"
            size="lg"
            style={{ marginTop: "20px" }}
          >
            Change Heart Color
          </Button>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h2 style={{ color: heartColor }}>
            "Neethu, you're the one who makes my world complete!"
          </h2>
          <p>Sreeram can't imagine life without you!</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Love;
