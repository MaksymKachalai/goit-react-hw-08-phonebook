import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
} from '@mui/material';
import ContactPhoneTwoToneIcon from '@mui/icons-material/ContactPhoneTwoTone';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/ContactsOperations/ContactsOperations';

export default function ContactsRendering({ filterList }) {
  const dispatch = useDispatch();

  const handleButton = id => {
    dispatch(removeContact(id));
  };

  return (
    <>
      <List>
        {filterList.map(contact => (
          <ListItem key={contact.id}>
            <ListItemIcon>
              <ContactPhoneTwoToneIcon />
            </ListItemIcon>
            <ListItemText>{contact.name} </ListItemText>
            <ListItemText>{contact.number}</ListItemText>
            <Button type="button" onClick={() => handleButton(contact.id)}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
}
