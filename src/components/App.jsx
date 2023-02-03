
// import React, { Component } from "react";

import ContactForm from "./ContactForm/ContactForm";

// import { ContactForm } from "./ContactForm/ContactForm";

export const App = () => {
  return (
    
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: 'red'
      }}
    >
    
      {/* React homework template */}
      <ContactForm />
    </div>
  );
};
