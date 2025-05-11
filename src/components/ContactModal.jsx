import React, { useState, useEffect } from "react";
import { useContacts } from "../context/ContactContext";
import axios from "axios";

function ContactModal({ contactToEdit, onClose }) {
  const { dispatch } = useContacts();
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
  });

  useEffect(() => {
    if (contactToEdit) {
      setFormData(contactToEdit);
    }
  }, [contactToEdit]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (contactToEdit) {
      // Edit
      const updated = await axios.put(
        `http://localhost:3001/contacts/${contactToEdit.id}`,
        formData
      );
      dispatch({ type: "EDIT_CONTACT", payload: updated.data });
    } else {
      // Add
      const newContact = await axios.post(
        "http://localhost:3001/contacts",
        formData
      );
      dispatch({ type: "ADD_CONTACT", payload: newContact.data });
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-[90%] max-w-md space-y-4"
      >
        <h2 className="text-lg font-semibold">
          {contactToEdit ? "Edit Contact" : "Add Contact"}
        </h2>

        <input
          type="text"
          name="name"
          placeholder="First Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={formData.lastname}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            {contactToEdit ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactModal;
