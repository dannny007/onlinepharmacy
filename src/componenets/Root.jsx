import React from "react";
import Nav from "./Nav/Nav";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <header>
        <h1>Welcome to HealthDirect</h1>
      </header>
      <Nav></Nav>

      {/* This element will render either <DashboardMessages> when the URL is
              "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
          */}
      <Outlet />
      <footer>
        <p>&copy; 2024 HealthDirect. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Root;
