import React from "react";
import Contact from "./Contact";
import contacts from "../assets/lib/contacts";

function ContactsSidebar({ toggleTheme, selectContact }) {
  return (
    <div className="contactsSideBar" id="contactSideBar">
      <div className="contactsNav ">
        <div className="navTop p-1">
          <div className="navImg p-1">
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
        <div className="navDivBottom p-6">
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
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          selectContact={selectContact}
        />
      ))}
    </div>
  );
}

export default ContactsSidebar;
