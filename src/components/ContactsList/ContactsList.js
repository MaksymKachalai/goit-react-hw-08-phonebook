import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fethcAllContacts } from 'redux/ContactsOperations/ContactsOperations';
import ContactsRendering from '../ContactsRendering/ContactsRendering';
import ContactsFilter from '../ContactsFilter/ContactsFilter';
import { useMemo } from 'react';
import { Container, Box } from '@mui/material';
import CreateNewContact from '../CreateNewContact/CreateNewContact';

export default function ContactsList() {
  const contacts = useSelector(state => state.contacts.entities);
  const filter = useSelector(state => state.filter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fethcAllContacts());
  }, [dispatch]);

  const filteredContacts = useMemo(() => {
    const data = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return data;
  }, [contacts, filter]);

  return (
    <Container>
      <CreateNewContact />
      <Box>
        <div className="phonebook-box">
          <ContactsFilter />
          <ContactsRendering filterList={filteredContacts} />
        </div>
      </Box>
    </Container>
  );
}

ContactsList.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
