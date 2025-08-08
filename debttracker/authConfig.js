// src/authConfig.js
export const msalConfig = {
  auth: {
    clientId: "f8f9e22d-f243-4537-8e04-7b91bdc92759", // <-- paste the Application ID
    authority:
      "https://debttracker.b2clogin.com/debttracker.onmicrosoft.com/B2C_1_signupsignin",
    redirectUri: "http://localhost:5174",
  },
  cache: {
    cacheLocation: "localStorage", // or sessionStorage
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: ["openid", "profile", "email"],
};
