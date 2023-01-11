import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import LoginForm from './LoginForm/LoginForm';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import SignupForm from './SignupForm/SignupForm';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

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
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignupForm />} />
          <Route
            path="contacts"
            element={
              <ProtectedRoute pathRoute="/">
                <Contacts />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
