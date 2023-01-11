import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import ContactsList from 'components/ContactsList/ContactsList';
export default function Contacts() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h1" color="primary" mb="30px">
        Your Contacts
      </Typography>
      <ContactsList />
    </Container>
  );
}
