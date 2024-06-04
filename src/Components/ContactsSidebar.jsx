import React from "react";
import Contact from "./Contact";

function ContactsSidebar({ toggleTheme }) {
  return (
    <div className="contactsSideBar" id="contactSideBar">
      <div className="contactsNav">
        <div className="navTop">
          <div className="navImg">
            <img src="src/assets/navImg.png" alt="Nav" />
            <img
              src="src/assets/day.night_circle.webp"
              className="dayNight"
              onClick={toggleTheme}
              alt="Toggle Theme"
            />
          </div>
          <div className="navIcons">
            <img src="src/assets/navBar_iconright.png" alt="Nav Icons" />
          </div>
        </div>
        <div className="navDivBottom">
          <input
            className="navInput"
            id="searchBar"
            type="search"
            placeholder="Search or start new chat"
          />
          <img
            src="src/assets/navIcons.png"
            style={{
              display: "flex",
              width: "30px",
              height: "30px",
              justifyContent: "center",
              alignSelf: "center",
            }}
            alt="Search"
          />
        </div>
      </div>
      <Contact name="Mateo Mein" phone="+44 3358 487" />
      <Contact name="Pjotr Mein" phone="+44 487 3358" />
      <Contact name="Mike Mein" phone="+44 123 7778" />
    </div>
  );
}

export default ContactsSidebar;
