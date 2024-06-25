import { React, useRef, useEffect } from "react";
import ChatInput from "./ChatInput";

function ChatArea({ messages, addMessage, selectedContact, messagesShown }) {
  const latestMessageRef = useRef(null);

  async function onSpacePressed(e) {
    e.preventDefault();
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      const advice = data.slip.advice;
      addMessage({ text: advice, sender: "bot" });
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
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
              {selectedContact ? (
                messagesShown.map((message, index) => (
                  <div
                    key={index}
                    ref={
                      index === messagesShown.length - 1
                        ? latestMessageRef
                        : null
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
