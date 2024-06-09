import React, { useState, useEffect } from "react";
import ContactsSidebar from "./Components/ContactsSidebar";
import ChatArea from "./Components/ChatArea";
import "./App.css";
import contacts from "./assets/lib/contacts";

function App() {
  const [theme, setTheme] = useState("light");
  const [contact, setContact] = useState(null);
  const [messages, setMessages] = useState([]);

  const selectContact = (contact) => {
    setContact(contact);
    setMessages(contact.messages);
  };
  useEffect(() => {
    if (contacts.length > 0) {
      const firstContact = contacts[0];
      setContact(firstContact);
      setMessages(firstContact.messages);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(storedMessages);
  }, []);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`outSideWall ${theme}`}>
      <ContactsSidebar
        toggleTheme={toggleTheme}
        selectContact={selectContact}
        messages={messages}
      />
      <ChatArea
        addMessage={addMessage}
        messages={messages}
        setContact={setContact}
      />
    </div>
  );
}

export default App;
