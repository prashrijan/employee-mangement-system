import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";

const TaskList = ({ data }) => {
  console.log(data);
  return (
    <div
      id="taskList"
      className="flex h-[40%] overflow-x-auto mt-10 py-5 w-full  items-center justify-start gap-5  flex-nowrap"
    >
      {data.tasks.map((task, index) => {
        if (task.active) {
          return <AcceptTask key={index} task={task} />;
        }

        if (task.newTask) {
          return <NewTask key={index} task={task} />;
        }

        if (task.completed) {
          return <CompleteTask key={index} task={task} />;
        }

        if (task.failed) {
          return <FailedTask key={index} task={task} />;
        }
      })}
    </div>
  );
};

export default TaskList;
