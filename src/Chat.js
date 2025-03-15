import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./Chat.css";

function Chat() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const [messages, setMessages] = useState([
    { text: "Hi Neethu, How are you?", sender: "bot" },
  ]);

  // All questions data including the previous ones and additional questions.
  const questionsData = {
    1: {
      question: "How are you feeling today?",
      options: [
        { option: "Very good", reply: "I'm glad to hear that!" },
        { option: "Good", reply: "Happy to hear you" },
        { option: "Not good", reply: "I'm sorry to hear that." },
        { option: "Exit", reply: "Goodbye! Feel free to reach out anytime." },
      ],
    },
    2: {
      question: "Do you know how much I love you?",
      options: [
        {
          option: "Yes",
          reply: "Glad to hear that! Then why are you saying like this?",
        },
        { option: "No", reply: "Yes, that's the problem here." },
        { option: "Exit", reply: "Goodbye! Feel free to reach out anytime." },
      ],
    },
    3: {
      question:
        "I love you so much, I don't know how to express that. How can I express it?",
      options: [
        {
          option: "I can understand.",
          reply: "Then why are you behaving like this?",
        },
        { option: "No", reply: "Okay...." },
        { option: "Exit", reply: "Goodbye! Feel free to reach out anytime." },
      ],
    },
    4: {
      question: "I will promise that I will keep you happy forever.",
      options: [
        { option: "Yes", reply: "Thank you for believing in me." },
        { option: "No", reply: "Alright, trust me you will always be mine." },
        { option: "Exit", reply: "Goodbye! Feel free to reach out anytime." },
      ],
    },
    5: {
      question: "Do you ever think about me when we’re not talking?",
      options: [
        { option: "Sometimes.", reply: "I think about you too!" },
        { option: "Not really.", reply: "That's okay, just wanted to know." },
        {
          option: "Maybe, sometimes.",
          reply: "Glad we think about each other!",
        },
        { option: "Exit", reply: "Okay, talk to you soon!" },
      ],
    },
    6: {
      question: "Do you know how much I care about you?",
      options: [
        { option: "I think so.", reply: "I hope I show it enough!" },
        { option: "Not really.", reply: "Well, I care about you a lot!" },
        {
          option: "A little, I guess.",
          reply: "I'm glad I can show you how much you mean to me.",
        },
        { option: "Exit", reply: "Alright, talk soon!" },
      ],
    },
    7: {
      question: "Would you be surprised if I told you I like you a lot?",
      options: [
        {
          option: "Maybe a little.",
          reply: "Well, it's true! I really like you!",
        },
        { option: "Not really.", reply: "I’m glad to hear that!" },
        {
          option: "Yes, I’d be surprised.",
          reply: "I wanted to be open about it, you mean a lot to me.",
        },
        { option: "Exit", reply: "Okay, take care!" },
      ],
    },
    8: {
      question: "Do you enjoy talking to me as much as I enjoy talking to you?",
      options: [
        {
          option: "Yes, definitely.",
          reply: "I’m glad! I really enjoy our conversations.",
        },
        {
          option: "I do, but not all the time.",
          reply: "I get it, no pressure at all.",
        },
        {
          option: "Sometimes.",
          reply: "I hope I make you smile when we chat!",
        },
        { option: "Exit", reply: "Alright, talk to you later!" },
      ],
    },
    9: {
      question: "Is there anything I could do to make you smile right now?",
      options: [
        {
          option: "Just talking to me would help!",
          reply: "I'm happy to chat with you anytime!",
        },
        { option: "Not really, I'm good.", reply: "Glad to hear that!" },
        {
          option: "Send me something funny.",
          reply: "I’ll find something! :) Keep smiling!",
        },
        { option: "Exit", reply: "Alright, take care!" },
      ],
    },
    10: {
      question: "I love you a lot, will you marry me?",
      options: [
        { option: "Yes", reply: "I will make your life joyful forever!" },
        { option: "No", reply: "Take your time, and give me a final answer." },
        { option: "Exit", reply: "Goodbye! Feel free to reach out anytime." },
      ],
    },
    11: {
      question: "Take your time, dear. I’m always here for you.",
      options: [
        { option: "Ok", reply: "I will make your life joyful forever!" },
        { option: "Exit", reply: "Goodbye! Feel free to reach out anytime." },
      ],
    },
  };

  const [input, setInput] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handleOptionClick = (option) => {
    const userMessage = `${option}`;
    const botReply = handleOptionReply(option);

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: userMessage, sender: "user" },
      { text: botReply, sender: "bot" },
    ]);

    updateQuestion(option);
  };

  const handleOptionReply = (option) => {
    const currentQuestionData = questionsData[currentQuestion];
    const selectedOption = currentQuestionData?.options.find(
      (opt) => opt.option === option
    );
    return selectedOption ? selectedOption.reply : "Please select an option.";
  };

  const updateQuestion = (option) => {
    if (option === "Exit") {
      navigate("/"); // Navigate to the homepage ("/") when "Exit" is clicked
    } else {
      // Move to the next question, and loop back if at the last question
      if (currentQuestion < Object.keys(questionsData).length) {
        setCurrentQuestion(currentQuestion + 1); // Move to the next question
      } else {
        setCurrentQuestion(1); // Reset to the first question after the last one
      }
    }
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        { text: input, sender: "user" },
        { text: "Please select a option dear ❤️", sender: "bot" },
      ]);
      setInput("");
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h4 style={{ marginTop: 20 }}>Hi NEETHU..Iam Here for You</h4>
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${
              message.sender === "user" ? "user" : "bot"
            }`}
          >
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      {messages[messages.length - 1].sender === "bot" && (
        <div className="chat-options">
          <p>{questionsData[currentQuestion]?.question}</p>
          {questionsData[currentQuestion]?.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option.option)}
            >
              {option.option}
            </button>
          ))}
        </div>
      )}
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
