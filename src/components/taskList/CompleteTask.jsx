import React from "react";
import { formatDate } from "../../utils/formatDate";

const CompleteTask = ({ task }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded text-sm">
          {task.category}
        </h3>
        <h4 className="text-sm">{formatDate(task.date)}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold">{task.title}</h2>
      <p className="text-sm mt-2">{task.description}</p>
      <div className="mt-4">
        <button className="bg-green-500 py-2 px-3 text-sm rounded w-full">
          Complete Task
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
