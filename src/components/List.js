import React, { Component, PropTypes} from 'react';

const List = ({task, time, rate, cost}) => {
    return (
        <li className="task">
            <ul className="list">
              <li className="span-text">Task:{task}</li>
              <li className="span-text">Time:{time}</li>
              <li className="span-text">Rate:{rate}</li>
              <li className="span-text">Cost:{cost}</li>
            </ul>
        </li>
    );
}

List.propTypes = {
    task: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    cost: PropTypes.number.isRequired
}

export default List;
