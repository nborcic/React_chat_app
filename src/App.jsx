import React, { useState, useEffect } from "react";
import ContactsSidebar from "./Components/ContactsSidebar";
import ChatArea from "./Components/ChatArea";
import "./App.css";
import contactsData from "./assets/lib/contacts";

function App() {
  const [theme, setTheme] = useState("light");

  const [contacts, setContacts] = useState(contactsData);
  const [contact, setContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messagesShown, setMessagesShown] = useState(messages);

  const selectContact = (selectedContact) => {
    const updatedContacts = contacts.map((cont) =>
      cont.id === selectedContact.id
        ? { ...cont, isActive: true }
        : { ...cont, isActive: false }
    );
    setContacts(updatedContacts);
    setContact(selectedContact);
    const contactFound = contacts.find((cont) => cont.id === selectedContact);
    const foundMessages = contactFound.messages;
    setMessages(foundMessages);
    setMessagesShown(foundMessages);
  };
  useEffect(() => {
    if (contacts.length > 0 && !contact) {
      const firstContact = contacts[0];
      setContact(firstContact);
      console.log("First Contact: ", firstContact);
      setMessages(firstContact.messages);
      const updatedContacts = contacts.map((c, index) =>
        index === 0 ? { ...c, isActive: true } : { ...c, isActive: false }
      );
      setContacts(updatedContacts);
    }
  }, [contact, contacts]);

  useEffect(() => {
    if (contact) {
      localStorage.setItem("messages", JSON.stringify(messages));
    }
  }, [messages, contact]);

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
    setMessagesShown((prevMessages) => [...prevMessages, message]);

    const updatedContacts = contacts.map((cont) =>
      cont.id === contact.id
        ? { ...cont, messages: [...cont.messages, message] }
        : cont
    );
    setContacts(updatedContacts);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    console.log("Theme Changed to: ", theme);
  };

  return (
    <div className={`outSideWall ${theme}`}>
      <ContactsSidebar
        toggleTheme={toggleTheme}
        selectContact={selectContact}
        contacts={contacts}
      />
      <ChatArea
        addMessage={addMessage}
        messages={messages}
        selectedContact={contact}
        messagesShown={messagesShown}
      />
    </div>
  );
}

export default App;
