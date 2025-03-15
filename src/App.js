import "./App.css";
import All from "./All";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sree from "./Sree";
import Chat from "./Chat";
import LovePage from "./LovePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<All />} /> {/* Define your Sree route */}
        <Route path="/sree" element={<Sree />} /> {/* Define your Sree route */}
        {/* <Route path="/" element={<Chat />} /> Define your Sree route */}
        <Route path="/chat" element={<Chat />} /> {/* Define your Sree route */}
        <Route path="/success" element={<LovePage />} />{" "}
        {/* Define your Sree route */}
        {/* You can add more routes as needed */}
      </Routes>
      {/* <All /> Render the All component, if needed */}
    </BrowserRouter>
  );
}

export default App;
