import React, { useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(TASKS);

  const changeCompleteStatus = (id, isComplete) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id){
        const updatedTask = {...task}; 
        updatedTask.isComplete = !isComplete;
      return updatedTask;
    } else{
      return {...task};
    }   
    });
    setTasks(newTasks);
  };
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) =>
      task.id !== id);

    setTasks(newTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={tasks} updateIsComplete={changeCompleteStatus} delete={deleteTask}/>}</div>
      </main>
    </div>
  );
};

export default App;
