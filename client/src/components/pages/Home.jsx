import React from 'react';
import ContactFilter from '../contacts/contactFilter';
import ContactForm from '../contacts/contactForm';
import Contacts from '../contacts/contacts';

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
