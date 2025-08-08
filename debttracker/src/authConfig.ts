// src/authConfig.ts
import type { Configuration, PopupRequest /* or RedirectRequest */ } from "@azure/msal-browser";

export const msalConfig: Configuration = {
  auth: {
    clientId: "f8f9e22d-f243-4537-8e04-7b91bdc92759",
    authority: "https://debttracker.b2clogin.com/debttracker.onmicrosoft.com/B2C_1_signupsignin",
    knownAuthorities: ["debttracker.b2clogin.com"], // B2C trust list
    redirectUri: "http://localhost:5174",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
};

export const loginRequest: PopupRequest = {
  scopes: ["openid", "profile", "email"],
  // tip: add prompt/loginHint if you need specific UX
};