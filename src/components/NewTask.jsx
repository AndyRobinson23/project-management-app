import { useState } from 'react';

const NewTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState();

  const handleTaskInput = (e) => {
    setEnteredTask(e.target.value);
  };

  const handleAddTaskClick = () => {
    onAdd(enteredTask);
    setEnteredTask('');
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleTaskInput}
        value={enteredTask}
      ></input>
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleAddTaskClick}
      >
        Add task
      </button>
    </div>
  );
};

export default NewTask;
