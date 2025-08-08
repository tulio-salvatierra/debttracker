// src/components/LoginButton.tsx
import React from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../../authConfig';

export const LoginButton: React.FC = () => {
  const { instance, accounts } = useMsal();

  // User is logged in if there’s at least one account
  const isAuthenticated = accounts.length > 0;
  const userName = accounts[0]?.username || '';

  const handleLogin = () => {
    instance.loginRedirect(loginRequest).catch((e) => console.error(e));
  };

  const handleLogout = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: 'http://localhost:5174', // same as redirectUri
    }).catch((e) => console.error(e));
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <span>Hello, {userName}</span>
          <button onClick={handleLogout} style={{ marginLeft: 8 }}>
            Logout
          </button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};
