import React, { useState } from "react";

function ChatInput({ addMessage, onSpacePressed }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      addMessage({ text: inputValue, sender: 'user' });
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
    if (e.key === " ") {
      onSpacePressed(e);
    }
  };
  return (
    <div
      className="chatInput custom-search"
      style={{ gap: "10px", padding: "20px" }}
    >
      <i
        className="alienHead"
        onClick={() => alert("Icon list needs to be added here!")}
        style={{
          backgroundImage: "url(src/assets/emoji-smile_4.svg)",
          padding: "10px",
          height: "25px",
          width: "25px",
          backgroundSize: "cover",
        }}
      ></i>
      <i
        onClick={() => alert("Add file support add here!")}
        style={{
          backgroundImage: "url(src/assets/input_atachment.png)",
          height: "25px",
          width: "25px",
          backgroundSize: "cover",
          padding: "8px",
          margin: "8px",
        }}
      ></i>
      <form onSubmit={handleSubmit} style={{ width: "80%" }}>
        <input
          type="text"
          className="custom-search-input"
          id="input"
          required
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          value={inputValue}
          placeholder="Enter your message here..."
        />
      </form>
      <i
        onClick={() => alert("Recordings feature to be added here!")}
        style={{
          backgroundImage: "url(src/assets/input_iconschatdisplay.png)",
          height: "30px",
          width: "30px",
          backgroundSize: "cover",
          padding: "10px",
          margin: "10px",
        }}
      ></i>
    </div>
  );
}

export default ChatInput;
