import React, { useState } from "react";
import ContactsSidebar from "./Components/ContactsSidebar";
import ChatArea from "./Components/ChatArea";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`outSideWall ${theme}`}>
      <ContactsSidebar toggleTheme={toggleTheme} />
      <ChatArea />
    </div>
  );
}

export default App;
