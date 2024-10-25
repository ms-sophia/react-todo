import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
const Content = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      checked: false,
      text: "study",
    },
    {
      id: 2,
      checked: false,
      text: "code",
    },
    {
      id: 3,
      checked: false,
      text: "cook",
    },
  ]);
  const [text, setText] = useState("text");

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

  const resetTask = () => {
    const resetTasks = [
      {
        id: 1,
        checked: false,
        text: "task#1",
      },
      {
        id: 2,
        checked: false,
        text: "task#2",
      },
      {
        id: 3,
        checked: false,
        text: "task#3",
      },
    ];
    setTasks(resetTasks);
  };

  return (
    <main>
      <input
        type="text"
        value={text}
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
            <li className="task" key={task.id}>
              <input
                type="checkbox"
                onChange={() => checkTask(task.id)}
                checked={task.checked}
              />
              <label
                style={task.checked ? { textDecoration: "line-through" } : null}
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
          <button onClick={() => resetTask()}>Reset</button>
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>Nothing to do</p>
      )}
    </main>
  );
};

export default Content;
