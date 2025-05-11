
import React from "react";
import { useState } from 'react'

import './App.css'
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";

function App() {
 

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Contact List
        </h1>
        <ContactForm />
        <hr className="my-6" />
        <ContactList />
      </div>
    </div>
  );
}

export default App
