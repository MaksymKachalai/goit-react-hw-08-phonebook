import { configureStore } from '@reduxjs/toolkit';

import filterSlice from './filterSlice';
import contactsSlice from './contactsSlice';
import userSlice from './userSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filter: filterSlice,
    user: userSlice,
  },
});
