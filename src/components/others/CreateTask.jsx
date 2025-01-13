import React from "react";

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form className="flex flex-wrap items-start justify-between w-full">
        <div className="w-1/2">
          <div>
            <h3 className="text-lg text-gray-300 mb-0.5">Task Title</h3>
            <input
              type="text"
              placeholder="Make a UI design"
              className="mb-4 text-lg py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
            />
          </div>
          <div>
            <h3 className="text-lg text-gray-300 mb-0.5">Date</h3>
            <input
              type="date"
              className="mb-4 text-lg py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
            />
          </div>
          <div>
            <h3 className="text-lg text-gray-300 mb-0.5">Assign To</h3>
            <input
              type="text"
              placeholder="Employee Name"
              className="mb-4 text-lg py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
            />
          </div>
          <div>
            <h3 className="text-lg text-gray-300 mb-0.5">Categories</h3>
            <input
              type="text"
              placeholder="Design Development"
              className="mb-4 text-lg py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-lg text-gray-300 mb-0.5"> Description</h3>
          <textarea className="w-full h-60 text-lg py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"></textarea>
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