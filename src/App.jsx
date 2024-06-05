import React, { useState } from "react";
import ContactsSidebar from "./Components/ContactsSidebar";
import ChatArea from "./Components/ChatArea";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
   
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`outSideWall ${theme}`}>
      <ContactsSidebar toggleTheme={toggleTheme} />
      <ChatArea addMessage={addMessage} messages={messages} />
    </div>
  );
}

export default App;
// on click komponent koji daje info pasa prop i stavlja se kao prop u App.jsx, definira se funkcija koja prima se zove kao i prop i onda se
//postavlja kao state unutar funkcije, i koristi kao {state} u komponenti
