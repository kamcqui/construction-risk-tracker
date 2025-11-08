import React from "react";
import { useMsal } from "@azure/msal-react";
import bgImage from "./assets/construction-bg.jpg";
import "./App.css";

function App() {
  const { instance } = useMsal();

  const login = () => {
    instance.loginRedirect();
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div className="login-box">
        <h1>Construction Risk Tracker</h1>
        <button onClick={login}>Login with Azure Entra ID</button>
      </div>
    </div>
  );
}

export default App;
