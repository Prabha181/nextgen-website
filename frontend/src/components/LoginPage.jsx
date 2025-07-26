// src/components/LoginPage.jsx
import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    const user = jwtDecode(credentialResponse.credential);
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/dashboard');
  };

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
        <div className="text-center">
          <h2>Nexera Login</h2>
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => console.log('Login Failed')}
          />
        </div>
      </GoogleOAuthProvider>
    </div>
  );
};

export default LoginPage;
