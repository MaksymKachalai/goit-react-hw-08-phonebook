import { NavLink } from 'react-router-dom';
import {
  ListItem,
  List,
  ListItemText,
  AppBar,
  Container,
  Box,
} from '@mui/material';
import Typography from '@mui/material/Typography';

export default function AppNavigation() {
  return (
    <header>
      <AppBar>
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
          <Box sx={{ display: 'flex' }}>
            <List sx={{ display: 'flex' }}>
              <ListItem>
                <ListItemText>
                  <NavLink to="/">Home</NavLink>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <NavLink to="contacts">Contacts</NavLink>
                </ListItemText>
              </ListItem>
            </List>

            <List sx={{ display: 'flex' }}>
              <ListItem>
                <ListItemText>
                  <NavLink to="login">Log In</NavLink>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <NavLink to="registration">Registration</NavLink>
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </Container>
      </AppBar>
    </header>
  );
}
