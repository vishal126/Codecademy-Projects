import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit = { handleSubmit }>
        <input type="text" maxLength="50" id="name" value={name} onChange = {(e)=>setName(e.target.value)} placeholder="name" required/>
        <input type="tel" maxLength="10" id="phone" value={phone} onChange = {(e)=>setPhone(e.target.value)} pattern="[6-9]\d{9}" placeholder="phone" required/>
        <input type="email" maxLength="100" id="email" value={email} onChange = {(e)=>setEmail(e.target.value)}  placeholder="email" required/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};