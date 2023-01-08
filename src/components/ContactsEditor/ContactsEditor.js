import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { addNewContact } from 'redux/contactsSlice';
import './ContactsEditor.css';

export default function ContactsEditor({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.entities);
  const dispatch = useDispatch();

  const onInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'number':
        setNumber(value);
        break;
      case 'name':
        setName(value);
        break;
      default:
        return;
    }
  };

  const addContact = (name, number) => {
    const contact = {
      name,
      number,
    };

    const isCreated = contacts.find(item => item.number === number);

    if (isCreated) return alert('Contact has already been created');
    dispatch(addNewContact(contact));
  };

  const onFormSubmit = event => {
    event.preventDefault();
    addContact(name, number);
  };

  return (
    <>
      <form onSubmit={onFormSubmit} className="w-full max-w-sm">
        <div className="user-box">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={onInputChange}
            />
          </label>
        </div>
        <div className="user-box">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            <input
              placeholder="Number"
              type="tel"
              name="number"
              value={number}
              onChange={onInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        </div>
        <Button type="submit" variant="contained">
          Add contact
        </Button>
      </form>
    </>
  );
}

ContactsEditor.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
