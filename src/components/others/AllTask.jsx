import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  console.log(authData);
  return (
    <div className="p-5 bg-[#1c1c1c] rounded mt-5 h-56 overflow-auto">
      <div className="bg-red-400 mb-2 py-3 px-4 flex justify-between rounded">
        <h2>Prashrijan</h2>
        <h3>Make a UI design</h3>
        <h5>Status</h5>
      </div>
      <div className="bg-green-400 mb-2 py-3 px-4 flex justify-between rounded">
        <h2>Prashrijan</h2>
        <h3>Make a UI design</h3>
        <h5>Status</h5>
      </div>
      <div className="bg-blue-400 mb-2 py-3 px-4 flex justify-between rounded">
        <h2>Prashrijan</h2>
        <h3>Make a UI design</h3>
        <h5>Status</h5>
      </div>
      <div className="bg-purple-400 mb-2 py-3 px-4 flex justify-between rounded">
        <h2>Prashrijan</h2>
        <h3>Make a UI design</h3>
        <h5>Status</h5>
      </div>
      <div className="bg-purple-400 mb-2 py-3 px-4 flex justify-between rounded">
        <h2>Prashrijan</h2>
        <h3>Make a UI design</h3>
        <h5>Status</h5>
      </div>
      <div className="bg-purple-400 mb-2 py-3 px-4 flex justify-between rounded">
        <h2>Prashrijan</h2>
        <h3>Make a UI design</h3>
        <h5>Status</h5>
      </div>
      <div className="bg-purple-400 mb-2 py-3 px-4 flex justify-between rounded">
        <h2>Prashrijan</h2>
        <h3>Make a UI design</h3>
        <h5>Status</h5>
      </div>
    </div>
  );
};

export default AllTask;
