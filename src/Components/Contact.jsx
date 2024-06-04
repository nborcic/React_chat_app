import React from "react";

function Contact({ name, phone }) {
  return (
    <div className="sideBarContact">
      <div>
        <div className="innerLogo">
          <img src="src/assets/face logo.png" className="imgLogo" alt="Logo" />
        </div>
      </div>
      <div>
        <div className="biggText">{name}</div>
        <div className="smallText">{phone}</div>
      </div>
    </div>
  );
}

export default Contact;
