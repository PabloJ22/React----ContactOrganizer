import React, {useReducer} from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';


const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id:1,
        name: 'Mikey Vasquez',
        email: 'MikeV@gmail.com',
        phone: '512-459-2222',
        type: 'Professional'
      },
      {
        id:2,
        name: 'Tristan',
        email: 'TriVision@gmail.com',
        phone: '512-280-2222',
        type: 'Professional'
      }
    ],
    current: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({type: ADD_CONTACT, payload:contact});
  };

  //Delete Contact
  const deleteContact = id => {
    dispatch({type: DELETE_CONTACT, payload:id});
  };

  //Set Current Contact
  const setCurrent = contact => {
    dispatch({type: SET_CURRENT, payload:contact});
  };

  //Clear Current Contact
  const clearCurrent = contact => {
    dispatch({type: CLEAR_CURRENT});
  };

  //Update Contact

  //Filter Contacts

  //Clear Filter


    return (
      <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent
      }}>
        {props.children}
      </ContactContext.Provider>
    )

 };

 export default ContactState;