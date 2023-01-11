import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  TextField,
  Button,
} from '@mui/material';
import { userLogIn } from 'redux/ContactsOperations/ContactsOperations';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModal, setIsModal] = useState(true);
  const isUserLoggedIn = useSelector(state => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
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
      email,
      password,
    };
    dispatch(userLogIn(credentials));
  };

  return (
    <>
      {isUserLoggedIn && <Navigate to="/contacts" replace />}
      <Dialog open={isModal} onClose={() => navigate('/')} fullScreen={false}>
        <DialogTitle>Log In</DialogTitle>
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
              label="Password"
              name="password"
              type="password"
              margin="dense"
              value={password}
              onChange={handleInputChange}
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary">
              Log In
            </Button>
          </Box>
        </DialogContent>
        <form></form>
      </Dialog>
    </>
  );
}
