import React from "react";

function ChatInput() {
  return (
    <div
      className="chatInput custom-search"
      style={{ gap: "10px", padding: "20px" }}
    >
      <i
        className="alienHead"
        onClick={() => alert("Icon list")}
        style={{
          backgroundImage: "url(src/assets/emoji-smile_4.svg)",
          padding: "10px",
          height: "25px",
          width: "25px",
          backgroundSize: "cover",
        }}
      ></i>
      <i
        style={{
          backgroundImage: "url(src/assets/input_atachment.png)",
          height: "25px",
          width: "25px",
          backgroundSize: "cover",
          padding: "8px",
          margin: "8px",
        }}
      ></i>
      <input
        type="text"
        className="custom-search-input"
        id="input"
        placeholder="Enter your message here..."
      />
      <i
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
