import { createSlice } from '@reduxjs/toolkit';
import {
  addNewContact,
  removeContact,
  fethcAllContacts,
} from './ContactsOperations/ContactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    entities: [],
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [fethcAllContacts.pending]: state => {
      state.isLoading = true;
    },
    [fethcAllContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.entities = action.payload;
    },
    [fethcAllContacts.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
    [addNewContact.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addNewContact.fulfilled]: (state, action) => {
      state.entities.push(action.payload);
      state.isLoading = false;
    },
    [addNewContact.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
    [removeContact.pending]: (state, action) => {
      state.isLoading = true;
    },
    [removeContact.fulfilled]: (state, action) => {
      state.entities = state.entities.filter(
        contact => contact.id !== action.payload.id
      );
      state.isLoading = false;
    },
    [removeContact.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

export default contactsSlice.reducer;
