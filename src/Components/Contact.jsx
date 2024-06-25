import React from "react";

function Contact({ contact, selectContact }) {
  const isActive = contact.isActive ? "active" : "";

  return (
    <div
      className={`contactItem flex justify-between p-2 border-b border-gray-200 cursor-pointer 
      hover:bg-gray-100 hover:border-green-400 h-15 rounded-md items-center ${
        isActive ? "bg-green-200" : ""
      }`}
      onClick={() => selectContact(contact.id)}
      key={contact.id}
    >
      <div className="flex flex-row">
        <div className="flex pl-2 pr-2">
          <img
            src={contact.photo}
            alt={contact.name}
            className="rounded-full w-12 h-12"
          />
        </div>
        <div className="flex flex-col">
          <p>
            {contact.name} {contact.lastName}
          </p>
          <p>{contact.phone}</p>
        </div>
      </div>
      <div>Last message :{}</div>
      <div>
        <p>{contact.lastTime}</p>
      </div>
    </div>
  );
}

export default Contact;
