import React, { Component, PropTypes} from 'react';

const Task = ({event, task}) => {
    return (
        <div className="info-panel">
           <span className="span-text">Task: </span>
          <input type="text" onChange={event} value={task}/>
        </div>
    );
}

Task.propTypes = {
    task: PropTypes.string.isRequired,
    event: PropTypes.func.isRequired
}

export default Task;
