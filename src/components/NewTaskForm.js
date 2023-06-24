import { useState } from 'react'; 
import PropTypes from 'prop-types'; 
import React from 'react';

const initialTask = {title : '', description: '',};

const NewTaskForm = ({addTask}) => {
    const [taskData, setTask] = useState(initialTask);

    const handleChange = (event) => {
        const newTaskData = {...taskData, 
            [event.target.name] : event.target.value,};
        setTask(newTaskData);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(taskData);
        setTask(initialTask);
    };
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input 
                type="text" 
                id="title" 
                name="title" 
                value={taskData.title}
                onChange={handleChange}/>

            <label htmlFor="description">Description</label>
            <input 
                type="text" 
                id="description" 
                name="description" 
                value={taskData.description}
                onChange={handleChange}/>
            <input type="submit" value="submit" />
        </form>
    );
};

NewTaskForm.propTypes = {
    addTask:PropTypes.func.isRequired
};

export default NewTaskForm; 