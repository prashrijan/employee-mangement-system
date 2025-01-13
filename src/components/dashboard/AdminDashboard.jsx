import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = ({ data }) => {
  return (
    <div className="p-10 h-screen w-full">
      <Header data={data} />
      <CreateTask />
      <AllTask data={data} />
    </div>
  );
};

export default AdminDashboard;
