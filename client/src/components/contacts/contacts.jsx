import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './contactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add acontact</h4>;
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? Object.keys(filtered).map((key) => {
              return (
                <CSSTransition key={key} timeout={500} className="item">
                  <ContactItem contact={filtered[key]} key={key} />;
                </CSSTransition>
              );
            })
          : Object.keys(contacts).map((key) => {
              return (
                <CSSTransition key={key} timeout={500} classNames="item">
                  <ContactItem contact={contacts[key]} key={key} />
                </CSSTransition>
              );
            })}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
