export const msalConfig = {
  auth: {
    clientId: "67d4813a-76dc-41f8-8b4a-1a8ee4cc872f", // from Azure portal
    authority: "https://login.microsoftonline.com/825dfa2b-f918-4b42-a0fe-e2151b345319", // from Azure portal
    redirectUri: "http://localhost:3000"
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false
  }
};