import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredTasks, setFilteredTasks] = useState(TASKS);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  
    if (category === "ALL") {
      setFilteredTasks(TASKS);
    } else {
      const filteredTasks = TASKS.filter((task) => task.category === category);
      setFilteredTasks(filteredTasks);
    }
  };
  const handleTaskFormSubmit = (newTask) => {
    // Update the filteredTasks state with the new task
    if (selectedCategory === "All" || selectedCategory === newTask.category) {
      setFilteredTasks([...filteredTasks, newTask]);
    }
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
