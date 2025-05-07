
import React from "react";
import { useState } from 'react'

import './App.css'
import ContactList from "./components/ContactList";

function App() {
 

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Contact Manager
        </h1>
        <ContactList />
      </div>
    </div>
  );
}

export default App
