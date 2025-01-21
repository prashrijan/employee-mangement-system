import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [authData] = useContext(AuthContext);
  console.log(authData);

  return (
    <div className="p-5 bg-[#1c1c1c] rounded mt-5 text-lg font-medium">
      <div className="bg-red-400 mb-2 py-3 px-4 flex justify-between rounded">
        <h2 className="w-1/5">Employee Name</h2>
        <h3 className="w-1/5">New Task</h3>
        <h5 className="w-1/5">Active Task</h5>
        <h5 className="w-1/5">Completed</h5>
        <h5 className="w-1/5">Failed</h5>
      </div>
      <div>
        {authData.employeesData.map((employee, index) => {
          return (
            <div
              className="border-2 border-emerald-900 mb-2 py-3 px-4 flex justify-between rounded"
              key={index}
            >
              <h2 className="w-1/5 ">{employee.firstName}</h2>
              <h3 className="w-1/5 text-blue-600">
                {employee.taskNumbers.newTask}
              </h3>
              <h5 className="w-1/5 text-yellow-600">
                {employee.taskNumbers.active}
              </h5>
              <h5 className="w-1/5 text-green-600">
                {employee.taskNumbers.completed}
              </h5>
              <h5 className="w-1/5 text-red-600">
                {employee.taskNumbers.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
