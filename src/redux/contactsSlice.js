import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsMenu = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: contactsMenu,
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      const newContact = {
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      };

      if (!newContact.name || newContact.name.trim() === '') {
        // toast.error('Please provide a contact name.');
        return;
      }

      const checkContact = state.contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      );

      if (checkContact) {
        toast.error(`${newContact.name} is already in contacts!`);
        return;
      }
      state.contacts.push(newContact);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { actions } = contactsSlice;
export const contactsReducer = contactsSlice.reducer;

export const { addContact, deleteContact, updateFilter } =
  contactsSlice.actions;

export default contactsSlice.reducer;

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
