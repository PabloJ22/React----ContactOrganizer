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
        type: 'Business'
      },
      {
        id:2,
        name: 'Tristan',
        email: 'TriVision@gmail.com',
        phone: '512-280-2222',
        type: 'Business'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add contact

  //Delete Contact

  //Set Current Contact

  //Clear Current Contact

  //Update Contact

  //Filter Contacts

  //Clear Filter


    return (
      <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}>
        {props.children}
      </ContactContext.Provider>
    )

 };

 export default ContactState;