import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <Nav></Nav>

      {/* This element will render either <DashboardMessages> when the URL is
              "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
          */}
      <Outlet />
    </div>
  );
}

export default Root;
