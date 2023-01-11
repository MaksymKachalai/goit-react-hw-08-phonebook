import { Container, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <Container
      maxWidth="xl"
      sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      <Typography variant="h1" color="primary" sx={{ mb: '50px' }}>
        Simple app that stores your contacts
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        component={NavLink}
        to="login"
        size="large"
      >
        Get Started
      </Button>
    </Container>
  );
}
