import { useState } from "react";
import "./addTask.css";

function AddTask() {
  const [taskValue, setTaskValue] = useState("");
  const [progressValue, setProgressValue] = useState(false);

  const handleChange = (e) => {
    setTaskValue(e.target.value);
  };

  const handleReset = () => {
    setTaskValue("");
    setProgressValue(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      name: taskValue,
      completed: Boolean(progressValue),
    };

    console.log(task);
    handleReset();
  };

  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="task"
          id="task"
          placeholder="Task Name"
          autoComplete="off"
          value={taskValue}
        />
        <select
          onChange={(e) => setProgressValue(e.target.value)}
          value={progressValue}
        >
          <option value={true}>Completed</option>
          <option value={false}>Process</option>
        </select>
        <span onClick={handleReset} className="reset">
          Reset
        </span>
        <button type="submit">Add Task</button>
      </form>
      {/* <p>{taskValue}</p> */}
    </section>
  );
}

export default AddTask;
