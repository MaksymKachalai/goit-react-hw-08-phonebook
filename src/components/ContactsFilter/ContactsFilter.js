import React from 'react';
import { setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';

const ContactsFilter = ({ value, onChange }) => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.value);

  return (
    <TextField
      id="text"
      label="Search contacts"
      value={filter}
      margin="dense"
      sx={{ width: '505px' }}
      color="secondary"
      onChange={e => dispatch(setFilter(e.currentTarget.value))}
    />
  );
};
export default ContactsFilter;
