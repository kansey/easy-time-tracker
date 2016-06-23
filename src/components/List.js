import '../assets/stylesheets/base.scss';
import React, { Component, PropTypes} from 'react';

export class List extends React.Component {

  static propTypes = {
      task: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
      cost: PropTypes.number.isRequired
  }

  render () {
      var {task, time, rate, cost} = this.props
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
}
