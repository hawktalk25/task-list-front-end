import axios from 'axios';
import React, { useState,useEffect } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import NewTaskForm from './components/NewTaskForm.js';

// const TASKS = [
//   {
//     id: 1,
//     title: 'Mow the lawn',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Cook Pasta',
//     isComplete: true,
//   },
// ];

function App() {
  const [tasks, setTasks] = useState([]);
  const API = "https://task-list-api-c17.onrender.com/tasks";
  useEffect(() =>{
    axios
      .get(API)
      .then((result) =>{
        setTasks(result.data);
        console.log(result.data);
      })
      .catch((err) =>{
        console.log(err);
      })
  }, []);
  

  const changeCompleteStatus = (id, isComplete) => {
    // const newTasks = tasks.map((task) => {
    //   if (task.id === id){
    //     const updatedTask = {...task}; 
    //     updatedTask.isComplete = !isComplete;
    //   return updatedTask;
    // } else{
    //   return {...task};
    // }   
    // });
    const endPoint = isComplete ? "mark_incomplete" : "mark_complete"
    axios 
    .patch(`${API}/${id}/${endPoint}`)
    .then((result) => {
      axios
      .get(API)
      .then((result) => {
        setTasks(result.data)
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) =>
      task.id !== id);

    setTasks(newTasks);
  };

  const postTask = (newTaskData) => {
    axios.post(API, newTaskData)
      .then((result) => {
        console.log(result.data)
      })
      .catch((err) => {
        console.log(err)
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={tasks} updateIsComplete={changeCompleteStatus} delete={deleteTask}/>}</div>
      </main>
      <NewTaskForm addTask={postTask}></NewTaskForm>
    </div>
  );
}

export default App;
