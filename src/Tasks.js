import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

const TASKS_STORAGE_KEY = "TASKS_STORAGE_KEY";

const storeTasks = (tasksMap) => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasksMap));
};

const readStoredTasks = () => {
  const taskMap = JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY));
  return taskMap ? taskMap : { tasks: [], completedTasks: [] };
};

const Tasks = () => {
  const [taskText, setTaskText] = useState("");
  const storedTasks = readStoredTasks();
  const [tasks, setTasks] = useState(storedTasks.tasks);
  const [completedTasks, setCompletedTasks] = useState(
    storedTasks.completedTasks
  );

  useEffect(() => {
    storeTasks({ tasks, completedTasks });
  });

  const updateTaskText = (event) => {
    setTaskText(event.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, { taskText, id: uuid() }]);
  };

  const completeTask = (completedTask) => () => {
    setCompletedTasks([...completedTasks, completedTask]);
    setTasks(tasks.filter((task) => task.id !== completedTask.id));
  };

  const deleteTask = (task) => () => {
    setCompletedTasks(completedTasks.filter((t) => t.id !== task.id));
  };

  console.log("tasks", tasks);
  console.log("completedTasks", completedTasks);

  return (
    <div>
      <h2>Tasks</h2>
      <div className="form">
        <input value={taskText} onChange={updateTaskText} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.map((task) => {
          const { id, taskText } = task;
          return (
            <div key={id} onClick={completeTask(task)}>
              {taskText}
            </div>
          );
        })}
      </div>
      <div className="completed-list">
        {completedTasks.map((task) => {
          const { id, taskText } = task;
          return (
            <div key={id}>
              {taskText}{" "}
              <span onClick={deleteTask(task)} className="delete-task">
                x
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tasks;
