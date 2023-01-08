import { Routes, Route } from 'react-router-dom';
import ContactsList from './ContactsList/ContactsList';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </div>
  );
};
