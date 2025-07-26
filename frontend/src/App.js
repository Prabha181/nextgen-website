import React from "react";
import UserCrud from "./components/UserCrud";

function App() {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0" style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", borderRadius: "16px" }}>
        <div className="card-body">
          <h2 className="text-center mb-4 text-primary">Nexera User Management</h2>
          <UserCrud />
        </div>
      </div>
    </div>
  );
}

export default App;
