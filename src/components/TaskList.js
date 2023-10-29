import React, { useState } from "react";
import Task from "./Task";
import { TASKS } from "../data";

function TaskList() {
  const [tasks, setTasks] = useState(TASKS);

  const handleTaskDelete = (text, category) => {
    const updatedTasks = tasks.filter(
      (task) => !(task.text === text && task.category === category)
    );
    setTasks(updatedTasks);
    console.log(`Task deleted: ${text}, Category: ${category}`);
  };

  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          onDelete={handleTaskDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;

