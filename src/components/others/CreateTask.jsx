import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [authData, setUserData] = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    // Create the new task object
    const task = {
      title,
      date,
      description,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    // Create a deep copy of authData to update state immutably
    const updatedAuthData = { ...authData };
    updatedAuthData.employeesData = updatedAuthData.employeesData.map(
      (employee) => {
        if (employee.firstName === assignTo) {
          // Add the task to the matching employee
          return {
            ...employee,
            tasks: [...employee.tasks, task],
            taskNumbers: {
              ...employee.taskNumbers,
              newTask: employee.taskNumbers.newTask + 1,
            },
          };
        }
        return employee;
      }
    );

    // Save the updated data to localStorage and context
    localStorage.setItem(
      "employees",
      JSON.stringify(updatedAuthData.employeesData)
    );
    setUserData(updatedAuthData);

    // Clear the form fields
    setAssignTo("");
    setCategory("");
    setDate("");
    setDescription("");
    setTitle("");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        className="flex flex-wrap items-start justify-between w-full"
        onSubmit={(e) => submitHandler(e)}
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-lg text-gray-300 mb-0.5">Task Title</h3>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Make a UI design"
              className="mb-4 text-lg py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
            />
          </div>
          <div>
            <h3 className="text-lg text-gray-300 mb-0.5">Date</h3>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mb-4 text-lg py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
            />
          </div>
          <div>
            <h3 className="text-lg text-gray-300 mb-0.5">Assign To</h3>
            <input
              type="text"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              placeholder="Employee Name"
              className="mb-4 text-lg py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
            />
          </div>
          <div>
            <h3 className="text-lg text-gray-300 mb-0.5">Categories</h3>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Design Development"
              className="mb-4 text-lg py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-lg text-gray-300 mb-0.5"> Description</h3>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-60 text-lg py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
          ></textarea>
          <button
            type="submit"
            className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
