
import React ,{ useContext, useEffect, useState } from "react"; 
import axios from "axios";
import ContactModal from "./ContactModal";
import ContactItem from "./ContactItem";

import SearchBar from './SearchBar';
import { useContacts } from "../context/ContactContext";


function ContactList() {
  // const [contacts, setContacts] = useState([]);
  const{contacts,dispatch}=useContacts()
  const [showModal, setShowModal] = useState(false);
  const [editContact, setEditContact] = useState(null);

  // useEffect(() => {
  //   const fetchContacts = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:3001/contacts");
  //       setContacts(res.data);
  //     } catch (error) {
  //       console.error("Error fetching contacts:", error);
  //     }
  //   };

  //   fetchContacts();
  // }, []);

  // useEffect(() => {
  //   const fetchContacts = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:3001/contacts");
  //       res.data.forEach((contact) => {
  //         dispatch({ type: "ADD_CONTACT", payload: contact }); // اضافه کردن مخاطبین به Context
  //       });
  //     } catch (error) {
  //       console.error("Error fetching contacts:", error);
  //     }
  //   };

  //   fetchContacts();
  // }, [dispatch]);

  useEffect(() => {
    const fetchContacts = async () => {
      const res = await axios.get("http://localhost:3001/contacts");
      dispatch({ type: "SET_CONTACTS", payload: res.data });
    };

    fetchContacts();
  }, []);

  const openModalToAdd = () => {
    setEditContact(null);
    setShowModal(true);
  };

  const openModalToEdit = (contact) => {
    setEditContact(contact);
    setShowModal(true);
  };



  return (
    <div>
      <SearchBar />
      <div className="flex justify-end mb-4">
        <button
          onClick={openModalToAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          + Add Contact
        </button>
      </div>

      <div className="space-y-4">
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onEdit={openModalToEdit}
          />
        ))}
      </div>

      {showModal && (
        <ContactModal
          contactToEdit={editContact}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default ContactList