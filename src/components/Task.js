import '../assets/stylesheets/base.scss';
import React, { Component, PropTypes} from 'react';

export class Task extends React.Component {

  static propTypes = {
      task: PropTypes.string.isRequired,
      event: PropTypes.func.isRequired
  }

  render () {
      return (
          <div className="info-panel">
             <span className="span-text">Task: </span>
            <input type="text" onChange={this.props.event} value={this.props.task}/>
          </div>
      );
  }
}
