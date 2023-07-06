import React from 'react';
import css from './App.module.css';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
// import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const contactsMenu = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export const App = () => {
  // const contacts = useSelector(state => state.contacts.contacts);
  // const filter = useSelector(state => state.filter);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const storedContacts = JSON.parse(window.localStorage.getItem('contacts'));
  //   if (storedContacts) {
  //     dispatch(addContact(storedContacts));
  //   } else {
  //     dispatch(addContact(contactsMenu));
  //   }
  // }, [dispatch]);

  // const addContactHandler = (name, number) => {
  //   dispatch(addContact({ name, number }));
  // };

  // const changeFilterHandler = filterValue => {
  //   dispatch(setFilter(filterValue));
  // };

  // const getFilteredContacts = () => {
  //   const normalizedFilter = filter && filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const deleteContactHandler = contactId => {
  //   dispatch(deleteContact(contactId));
  // };

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const filteredContacts = filter ? getFilteredContacts() : contacts;

  return (
    <div className={css.container}>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer />
    </div>
  );
};

//
