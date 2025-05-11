import React from 'react'

function ContactItem({contact}) {
  return (
    <div className="flex justify-between items-center bg-gray-50 p-4 rounded shadow">
      <div>
        <h2 className="text-lg font-semibold">
          {contact.name} {contact.lastname}
        </h2>
        <p className="text-gray-600">{contact.email}</p>
      </div>
      <div className="flex gap-2">
        <button className="text-sm bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition">
          Edit
        </button>
        <button className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ContactItem