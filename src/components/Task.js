import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  // const [complete, setComplete] = useState(props.isComplete);
  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : '';
  
  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => {props.updateIsComplete(props.id, props.isComplete);}}
      >
        {props.title}
      </button>
      <button className="tasks__item__remove button" 
      onClick={() => props.delete(props.id)}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  updateIsComplete: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired
};

export default Task;
