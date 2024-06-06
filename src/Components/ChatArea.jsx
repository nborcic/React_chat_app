import React, { useRef, useEffect, useState } from "react";
import ChatInput from "../Components/ChatInput";

function ChatArea({ messages, addMessage }) {
  const latestMessageRef = useRef(null);

  async function onSpacePressed(e) {
    e.preventDefault();
    const response = fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        addMessage({ text: data.slip.advice, sender: "bot" });
      });
  }

  useEffect(() => {
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="chatArea">
      <div className="topToolTips">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignSelf: "center",
            height: "80%",
            width: "95%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src="src/assets/navMixLeft.png" alt="Left Nav" />
          </div>
          <div style={{ justifySelf: "center", alignSelf: "center" }}>
            <img src="src/assets/navMixRight.png" alt="Right Nav" />
          </div>
        </div>
      </div>
      <div className="chatDisplay">
        <div className="chatDiv" id="chatDiv">
          <div className="chatBubble">
            <div className="chatText flex flex-col p-2 m-2">
              {messages.length > 0 ? (
                messages.map((message, index) => (
                  <div
                    key={index}
                    ref={
                      index === messages.length - 1 ? latestMessageRef : null
                    }
                    className={`message text-2xl p-2 m-2 ${
                      message.sender === "bot"
                        ? "bg-white text-black self-start"
                        : "bg-green-500 self-end"
                    }`}
                  >
                    {message.text}
                  </div>
                ))
              ) : (
                <div className="text-3xl flex justify-center items-center w-full text-black">
                  <p>No messages</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ChatInput addMessage={addMessage} onSpacePressed={onSpacePressed} />
    </div>
  );
}

export default ChatArea;
