import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import "./index.css";

const Content = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      checked: false,
      text: "task1",
    },
    {
      id: 2,
      checked: false,
      text: "task2",
    },
    {
      id: 3,
      checked: false,
      text: "task3",
    },
  ]);
  const [text, setText] = useState("");

  const checkTask = (id) => {
    const listTasks = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setTasks(listTasks);
  };

  const deleteTask = (id) => {
    const listTasks = tasks.filter((task) => task.id !== id);
    setTasks(listTasks);
  };

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      checked: false,
      text,
    };
    setTasks([...tasks, newTask]);
    setText("");
  };

  return (
    <main>
      <input
        className="addTaskInput"
        type="text"
        value={text}
        placeholder="Add a task..."
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask(text);
          }
        }}
      />
      {tasks.length ? (
        <ul>
          {tasks.map((task) => (
            <li className="taskList" key={task.id}>
              <input
                type="checkbox"
                onChange={() => checkTask(task.id)}
                checked={task.checked}
              />
              <label
                className="taskLabel"
                style={task.checked ? {color:'gray' } : null}
                onDoubleClick={() => checkTask(task.id)}
              >
                {task.text}
              </label>
              <FaXmark
                role="button"
                tabIndex="0"
                onClick={() => deleteTask(task.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>Nothing to do</p>
      )}
    </main>
  );
};

export default Content;
