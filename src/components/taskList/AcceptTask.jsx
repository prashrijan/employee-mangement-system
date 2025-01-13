import React from "react";

const AcceptTask = () => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
        <h4 className="text-sm">01 Jan 2025</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold">Make a youtube video</h2>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi nulla
        quisquam odio nam cumque totam.
      </p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 py-2 px-3 text-sm rounded">
          Mark as Completed
        </button>
        <button className="bg-red-500 py-2 px-3 text-sm rounded">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
