import '../assets/stylesheets/base.scss';
import React, { Component, PropTypes} from 'react';
import update from 'react/lib/update';
import { TaskForm } from './TaskForm.js';
import List from './List.js';

export class TaskList extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
        data: []
    };
}

  handleSubmit (task) {
      this.setState({data: this.state.data.concat(task)});
  }

  render () {
      var i = 0;
      var tasks = this.state.data.reverse().map(function(task) {
          return (
              <List key={i++} task={task.task} time={task.clock} rate={task.rate} cost={task.cost}/>
          );
      });
      return (
          <div className="tracker">
            <TaskForm onSubmit={this.handleSubmit} />
            <div className="task-manager">
                <ul className="list">
                    {tasks}
                </ul>
            </div>
         </div>
     );
  }
}
