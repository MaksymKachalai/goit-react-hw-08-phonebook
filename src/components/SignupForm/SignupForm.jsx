import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  TextField,
  Button,
} from '@mui/material';
import { userSignUp } from 'redux/ContactsOperations/ContactsOperations';

export default function LoginForm() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'userName':
        setUserName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const credentials = {
      name: userName,
      email,
      password,
    };
    dispatch(userSignUp(credentials));
  };

  return (
    <>
      {isLoggedIn && <Navigate to="/contacts" replace={true} />}
      <Dialog open onClose={() => navigate('/')} fullScreen={false}>
        <DialogTitle>Sign Up</DialogTitle>

        <DialogContent>
          <Box
            component="form"
            onSubmit={handleFormSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              '& .MuiTextField-root': { width: '40ch' },
            }}
            noValidate
          >
            <TextField
              id="form__user-name"
              label="Your name"
              name="userName"
              type="name"
              margin="dense"
              value={userName}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              id="form__email"
              label="Your e-mail"
              name="email"
              margin="dense"
              type="email"
              value={email}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              id="form__password"
              label="Create Password"
              name="password"
              type="password"
              margin="dense"
              value={password}
              onChange={handleInputChange}
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary">
              Sign Up
            </Button>
          </Box>
        </DialogContent>
        <form></form>
      </Dialog>
    </>
  );
}
