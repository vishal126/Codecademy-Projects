import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, handleSetContacts }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [currentName, setCurrentName] = useState('');
  const [currentPhone, setCurrentPhone] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [isDuplicateName, setIsDuplicateName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if(!isDuplicateName) {
      handleSetContacts(currentName, currentPhone, currentEmail);
      // e.target.reset();
    }

    setCurrentName('');
    setCurrentPhone('');
    setCurrentEmail('');
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(()=>{
    setIsDuplicateName(contacts.some(contact => contact.name === currentName));
  });

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name = { currentName} setName = { setCurrentName } phone = { currentPhone } setPhone = { setCurrentPhone } email = { currentEmail } setEmail = { setCurrentEmail } handleSubmit = { handleSubmit }/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles = { contacts }/>
      </section>
    </div>
  );
};