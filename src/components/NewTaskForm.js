import { useState } from "react"; 
import PropTypes from "prop-types"; 

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
        addTask()
    };
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="title"></label>
            <input 
                type="text" 
                id="title" 
                name="title" 
                value={taskdata.title}
                onChange={handleChange}/>
            <label htmlFor="description"> </label>
            <input 
                type="text" 
                id="description" 
                name="description" 
                value={taskdata.description}
                onChange={handleChange}/>
        </form>
    );
};

export default NewTaskForm; 