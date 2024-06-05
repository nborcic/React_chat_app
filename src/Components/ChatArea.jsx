import React, { useRef, useState, useEffect } from "react";
import ChatInput from "../Components/ChatInput";

function ChatArea({ messages, addMessage }) {
  const latestMessageRef = useRef(null);

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
              {messages ? (
                messages.map((message, index) => (
                  <li
                    key={index}
                    ref={
                      index === messages.length - 1 ? latestMessageRef : null
                    }
                    className="text-2xl list-none message sent flex
                    flex-col
                    p- 25px
                    overflow-y-auto overflow-x-hidden flex-1 min-h-0"
                  >
                    {message}
                  </li>
                ))
              ) : (
                <div className="text-3xl flex justify-center items-center w-[100%]">
                  <p> No messages</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ChatInput addMessage={addMessage} />
    </div>
  );
}

export default ChatArea;
