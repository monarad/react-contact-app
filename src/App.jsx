
import React from "react";
import { useState } from 'react'

import './App.css'
import ContactList from "./components/ContactList";
import { Toaster } from "react-hot-toast";


function App() {
 

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Contact List
        </h1>

        <hr className="my-6" />
        <ContactList />
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
}

export default App
