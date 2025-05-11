import React from "react";
import { createContext, useContext, useReducer } from "react";
const ContactContext = createContext();

const initialState = {
  contacts: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CONTACTS":
      return {
        ...state,
        contacts: action.payload,
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case "EDIT_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((c) =>
          c.id === action.payload.id ? action.payload : c
        ),
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter((c) => c.id !== action.payload),
      };

    default:
      return state;
  }
};

export function ContactProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContactContext.Provider value={{ contacts: state.contacts, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContacts() {
  return useContext(ContactContext);
}
