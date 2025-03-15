import React, { useEffect, useState } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Chat from "./Chat";
import { useNavigate } from "react-router-dom";
import LovePage from "./LovePage";
// Import useNavigate

function All() {
  const [rejected, setRejected] = useState(false);
  const [againrejected, setagainRejected] = useState(false);
  const [threerejected, setthreeRejected] = useState(false);
  const [percentageloaded, setPercentageloaded] = useState(false);
  const [visibility, setVisibility] = useState("visible"); // State to control visibility

  // Initialize navigate
  const navigate = useNavigate(); // This hook will allow us to navigate programmatically

  // Method to update the percentage loaded state
  const percetage = () => {
    setPercentageloaded(true);
    setVisibility("hidden"); // Update visibility when percentage is loaded
  };

  const handleThirdRejection = () => {
    alert("Then please accept me dear");
    setthreeRejected(true);
  };

  // Debugging logs to check if the useEffect and state are functioning as expected
  useEffect(() => {
    if (rejected && againrejected && threerejected) {
      console.log("Navigating to /chat...");
      window.location.replace("/levcalculator/chat");
      // Redirect to the Chat component
    }

    if (rejected && againrejected && !threerejected) {
      console.log("Triggering third rejection alert...");
      handleThirdRejection(); // Trigger third rejection alert
    }
  }, [rejected, againrejected, threerejected, navigate]); // Dependency array includes navigate

  // Recalculate the button text based on the `percentageloaded` state
  const s2Buttons = {
    h1text: "You Know How Much I love You",
    h2text: percentageloaded ? "I got it" : "I KNOW U DONT HAVE A IDEA", // Conditionally change text
    b1text: "I KNOW :)",
    b2text: percentageloaded ? "I got it" : "I DONT KNOW", // Conditional text change
  };

  const handleResponce = (res) => {
    if (res === "NO") {
      setRejected(true);
    } else {
      setRejected(false);
    }
  };

  return (
    <div>
      {/* Conditionally render Chat component when rejected, againrejected, and threerejected are true */}
      {rejected && againrejected && threerejected ? (
        <Chat /> // Render Chat component when all conditions are true
      ) : (
        <div>
          <Section1 onresponce={handleResponce} />

          {/* Conditionally render Section2 only if rejected is true */}
          {rejected && !againrejected ? (
            <Section2
              datas={s2Buttons} // Pass the updated s2Buttons object
              percentageloaded={setPercentageloaded}
              visibility={visibility} // Pass visibility state to Section2
              againrejected={setagainRejected} // Pass setagainRejected to Section2
            />
          ) : null}
        </div>
      )}
    </div>
  );
}

export default All;
