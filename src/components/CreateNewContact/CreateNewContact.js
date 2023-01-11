import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { addNewContact } from 'redux/ContactsOperations/ContactsOperations';
import { Box, TextField } from '@mui/material';

export default function CreateNewContact({ onSubmit }) {
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

  const addContact = () => {
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
    addContact();
  };

  return (
    <Box
      component="form"
      onSubmit={onFormSubmit}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minWidth: '700px',
      }}
    >
      <TextField
        id="contact__name"
        type="text"
        label="Name"
        margin="dense"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={onInputChange}
      />
      <TextField
        id="contact__number"
        type="tel"
        name="number"
        margin="dense"
        label="Number"
        value={number}
        onChange={onInputChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit" variant="contained" color="primary" size="large">
        Add contact
      </Button>
    </Box>
  );
}

CreateNewContact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
