import React from "react";
import ChatInput from "./ChatInput";

function ChatArea() {
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
        <div className="chatDiv" id="chatDiv"></div>
      </div>
      <ChatInput />
    </div>
  );
}

export default ChatArea;
