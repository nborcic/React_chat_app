import React from 'react';

function Contact({ contact, selectContact }) {
  return (
    <div className="contactItem" onClick={() => selectContact(contact)}>
      <p>{contact.name}</p>
      <p>{contact.phone}</p>
    </div>
  );
}

export default Contact;
