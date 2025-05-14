
import React ,{ useContext, useEffect, useState } from "react"; 
import axios from "axios";
import ContactModal from "./ContactModal";
import ContactItem from "./ContactItem";

import SearchBar from './SearchBar';
import { useContacts } from "../context/ContactContext";
import { AnimatePresence } from "framer-motion";


function ContactList() {
  // const [contacts, setContacts] = useState([]);
  const { contacts, searchTerm, dispatch } = useContacts();
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
      try {
        const res = await axios.get("http://localhost:3001/contacts");
        dispatch({ type: "SET_CONTACTS", payload: res.data });
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
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

  // // فیلتر کانتکت‌ها بر اساس سرچ
  // const filteredContacts = contacts.filter((c) =>
  //   `${c.name} ${c.lastname} ${c.email}`
  //     .toLowerCase()
  //     .includes(searchTerm.toLowerCase())
  // );

  // const filteredContacts = contacts.filter((c) => {
  //   const name = c.name || "";
  //   const lastname = c.lastname || "";
  //   const email = c.email || "";
  //   return `${name} ${lastname} ${email}`
  //     .toLowerCase()
  //     .includes(searchTerm.toLowerCase());
  // });

  // جلوگیری از ارور اگر داده هنوز نیامده یا searchTerm خالی است
  if (!contacts || !Array.isArray(contacts)) return null;
  if (typeof searchTerm !== "string") return null;

  // فیلتر بر اساس سرچ (با بررسی امن)
  const filteredContacts = contacts.filter((c) => {
    const name = c.name || "";
    const lastname = c.lastname || "";
    const email = c.email || "";
    return `${name} ${lastname} ${email}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

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
        <AnimatePresence>
          {filteredContacts.length ? (
            filteredContacts.map((contact) => (
              <ContactItem
                key={contact.id}
                contact={contact}
                onEdit={openModalToEdit}
              />
            ))
          ) : (
            <p>No contacts yet!</p>
          )}
        </AnimatePresence>
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