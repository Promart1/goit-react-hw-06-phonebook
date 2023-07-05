import React from 'react';
import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const deleteContactHandler = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          {name}: {number}
          <button
            className={css.button}
            type="button"
            onClick={() => deleteContactHandler(id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
