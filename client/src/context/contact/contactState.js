import { useReducer } from 'react';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import uuid from 'uuid';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: {
      1: {
        id: 1,
        name: 'Ryan Kim',
        email: 'test@gmail.com',
        phone: '111-111-1111',
        type: 'personal',
      },
      2: {
        id: 2,
        name: 'Sara Kim',
        email: 'test@gmail.com',
        phone: '111-111-1111',
        type: 'personal',
      },
      3: {
        id: 3,
        name: 'John Kim',
        email: 'test@gmail.com',
        phone: '111-111-1111',
        type: 'professional',
      },
    },
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = (contact) => {
    const newContact = { ...state.contacts };
    const newId = uuid.v4();
    contact['id'] = newId;
    newContact[newId] = contact;
    dispatch({ type: ADD_CONTACT, payload: newContact });
  };

  // Delete Contact
  const deleteContact = (id) => {
    const newContact = { ...state.contacts };
    delete newContact[id];
    dispatch({ type: DELETE_CONTACT, payload: newContact });
  };

  // Set Current Contact
  const setCurrent = (contact) => {
    const newId = contact.id;
    const newContact = { [newId]: contact };
    dispatch({ type: SET_CURRENT, payload: newContact });
  };

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Contact
  const updateContact = (contact) => {
    const newId = contact.id;
    dispatch({ type: UPDATE_CONTACT, payload: contact, id: newId });
  };

  // Filter Contacts
  const filterContacts = (text) => {
    const filteredContact = Object.keys(state.contacts)
      .filter((contact) => {
        const regex = new RegExp(`${text}`, 'gi');
        let tempContact = state.contacts[contact];
        return tempContact.name.match(regex) || tempContact.email.match(regex);
      })
      .reduce((obj, key) => {
        obj[key] = state.contacts[key];
        return obj;
      }, {});

    dispatch({ type: FILTER_CONTACTS, payload: filteredContact });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
