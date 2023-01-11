import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const userSignUp = createAsyncThunk(
  'user/signUp',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      axios.defaults.headers.common['Authorization'] = response.data.token;
      return response.data;
    } catch (error) {
      alert('User has already created');
      return rejectWithValue(error.message);
    }
  }
);

export const userLogIn = createAsyncThunk(
  'user/logIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/login', credentials);

      axios.defaults.headers.common['Authorization'] = response.data.token;
      return response.data;
    } catch (error) {
      alert('Uncorrect data');
      return rejectWithValue(error.message);
    }
  }
);

export const userLogOut = createAsyncThunk(
  'user/logOut',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('users/logout', credentials);
      axios.defaults.headers.common['Authorization'] = '';
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fethcAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios('contacts', credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('contacts', credentials);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contact/removeContact',
  async id => {
    const response = await axios.delete(`contacts/${id}`);

    return response.data;
  }
);
