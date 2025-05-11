import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContacts } from "../context/ContactContext";
import { motion } from "framer-motion";

function ContactItem({ contact, onEdit }) {
  const { dispatch } = useContacts();

  const handleDelete = async () => {
    if (window.confirm("Are you sure to delete this contact?")) {
      await axios.delete(`http://localhost:3001/contacts/${contact.id}`);
      dispatch({ type: "DELETE_CONTACT", payload: contact.id });
    }
  };
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="flex justify-between items-center bg-gray-50 p-4 rounded shadow"
 >
      <div>
        <h2 className="text-lg font-semibold">
          {contact.name} {contact.lastname}
        </h2>
        <p className="text-gray-600">{contact.email}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(contact)}
          className="text-sm bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
}

export default ContactItem;
