import React from "react";

const TaskList = () => {
  return (
    <div
      id="taskList"
      className="flex h-[45%] overflow-x-auto mt-10 py-5 w-full  items-center justify-start gap-5  flex-nowrap"
    >
      <div className="flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">01 Jan 2025</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          nulla quisquam odio nam cumque totam.
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">01 Jan 2025</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          nulla quisquam odio nam cumque totam.
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">01 Jan 2025</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          nulla quisquam odio nam cumque totam.
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">01 Jan 2025</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          nulla quisquam odio nam cumque totam.
        </p>
      </div>
    </div>
  );
};

export default TaskList;
