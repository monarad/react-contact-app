import React, { useState } from 'react'
import ContactItem from './ContactItem';
import SearchBar from './SearchBar';

function ContactList() {
    const [contacts, setContacts] = useState([
      { id: 1, firstName: "Ali", lastName: "Rad", email: "ali@example.com" },
      {
        id: 2,
        firstName: "Sara",
        lastName: "Mohammadi",
        email: "sara@example.com",
      },

    ]);
  return (
    <div>
      <SearchBar />
      <div className="flex justify-end mb-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          + Add Contact
        </button>
      </div>

      <div className="space-y-4">
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
}

export default ContactList