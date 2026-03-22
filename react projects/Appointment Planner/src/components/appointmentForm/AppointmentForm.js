import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker.js";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="name" required />
        <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} min={getTodayString()} placeholder="date" required />
        <input type="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} placeholder="time" required />
        <ContactPicker
          contacts={contacts}
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          name="contact"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};