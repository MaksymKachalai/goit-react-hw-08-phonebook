import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  ListItem,
  List,
  ListItemText,
  AppBar,
  Container,
  Button,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { userLogOut } from 'redux/ContactsOperations/ContactsOperations';

export default function AppNavigation() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(userLogOut());
  };
  return (
    <AppBar component="header">
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          YNUMBERS
        </Typography>
        <List component="nav" sx={{ display: 'flex' }} dense={true}>
          {isLoggedIn && (
            <ListItem>
              <ListItemText>
                <NavLink to="contacts">Contacts</NavLink>
              </ListItemText>
            </ListItem>
          )}
        </List>
        {!isLoggedIn && (
          <List sx={{ display: 'flex' }}>
            <ListItem>
              <ListItemText>
                <Button
                  component={NavLink}
                  to="login"
                  color="secondary"
                  variant="contained"
                >
                  Log in
                </Button>
              </ListItemText>
            </ListItem>
            <ListItem>
              <Button
                component={NavLink}
                to="signup"
                color="secondary"
                variant="contained"
                sx={{ whiteSpace: 'nowrap' }}
              >
                Sign Up
              </Button>
            </ListItem>
          </List>
        )}
        {isLoggedIn && (
          <Button
            copmonent={NavLink}
            to="/"
            variant="contained"
            color="secondary"
            onClick={handleButtonClick}
          >
            Log Out
          </Button>
        )}
      </Container>
    </AppBar>
  );
}
