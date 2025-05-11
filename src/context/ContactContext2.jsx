import React, { useContext, useReducer } from 'react'
 const ContactContext=useContext()

 const initialState={
    contacts:[]
 }
 const reducer=(state,action)=>{
    switch (action.type) {
        case "ADD_CONTACT":
          return{
            ...state,
            contacts:[...state.contacts,action.payload]
          }
            
          
    
        default:
            break;
    }

 }
function ContactProvider({children}) {
    const[state,dispatch]=useReducer(reducer,initialState)
  return (
   <ContactContext.Provider value={{contacts:state.contacts,dispatch}} >
    {children}
   </ContactContext.Provider>
  )
}

export default ContactProvider;

export function useContacts() {
  return useContext(ContactContext);
}