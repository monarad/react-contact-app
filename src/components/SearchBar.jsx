import React from 'react'
import { useContacts } from "../context/ContactContext";

function SearchBar() {

  const { dispatch } = useContacts();

  const handleChange = (e) => {
    dispatch({ type: "SET_SEARCH_TERM", payload: e.target.value });
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search by name or email..."
        className="w-full border px-4 py-2 rounded"
      />
    </div>
  );
}

export default SearchBar