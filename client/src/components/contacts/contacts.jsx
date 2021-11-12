import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './contactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;

  return (
    <Fragment>
      {Object.keys(contacts).map((key) => {
        return <ContactItem contact={contacts[key]} key={key} />;
      })}
    </Fragment>
  );
};

export default Contacts;
