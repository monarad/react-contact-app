import React from 'react'
import { useState } from "react";
import { useContacts } from "../context/ContactContext";
import { v4 as uuid } from "uuid";
function ContactForm() {
    const { dispatch } = useContacts();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");


     const handleSubmit = (e) => {
       e.preventDefault();
       if (!name || !phone) return;

       const newContact = {
         id: uuid(),
         name,
         phone,
       };

       dispatch({ type: "ADD_CONTACT", payload: newContact });

       setName("");
       setPhone("");
     };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto mt-5">
      <input
        type="text"
        placeholder="نام"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="شماره تماس"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 rounded"
      />
      <button className="bg-blue-600 text-white py-2 rounded">افزودن</button>
    </form>
  );
}

export default ContactForm