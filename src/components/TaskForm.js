import React, { Component, PropTypes} from 'react';
import Clock  from './Clock.js';
import Controls from './Controls.js';
import  Rate  from './Rate.js';
import  Task  from './Task.js';


export class TaskForm extends React.Component {

  static propTypes = {
      onSubmit: React.PropTypes.func.isRequired,
      clearTasks: React.PropTypes.func.isRequired
  }

  constructor(props) {
      super(props);
      this.handleStatusChange = this.handleStatusChange.bind(this)
      this.handleRate = this.handleRate.bind(this)
      this.handleTask = this.handleTask.bind(this)
      this.state = {
          count: 0,
          timerStatus: 'stopped',
          clock: '00:00:00',
          rate: 0,
          task: '',
      }
  }

  componentDidMount () {
      if(!JSON.parse(localStorage.state)) {
          return;
      }
      else {
          this.setState(JSON.parse(localStorage.state));
      }
  }

  componentDidUpdate (prevProps, prevState) {
      if (this.state.timerStatus !== prevState.timerStatus) {
          switch (this.state.timerStatus) {
              case 'started':
                  this.startTimer();
                  break;
              case 'stopped':
                  this.setState({count: 0, task: '', rate: 0 });
                  this.props.clearTasks();
                  break;
              case 'paused':
                  clearInterval(this.timer);
                  let cost = Math.floor(this.state.rate / 3600 * this.state.count);

                  this.props.onSubmit({
                      task: this.state.task,
                      clock: this.state.clock,
                      rate: this.state.rate,
                      cost: cost
                  });
                  break;
          }
      }
  }

  startTimer () {
      this.timer = setInterval(() => {
          this.setState({ count: this.state.count + 1})
      }, 1000)
      this.clock = setInterval(() => {
          this.setClock(this.state.count)
      }, 1000)
      this.storage = setInterval(() => {
          this.setStorage(JSON.stringify(this.state))
      }, 1000)
  }

  setClock(totalSeconds) {
      let seconds = totalSeconds % 60
      let minutes = Math.floor(totalSeconds / 60)
      let hour    = Math.floor(minutes / 60)

      if (seconds < 10) {
          seconds = '0' + seconds
      }

      if (minutes < 10) {
          minutes = '0' + minutes
      }

      if (hour < 10) {
          hour = '0' + hour
      }

      this.setState({ clock: hour + ':' + minutes + ':' + seconds })
  }

  setStorage (state) {
      localStorage.setItem('state', JSON.stringify(this.state))
  }

  handleStatusChange (newStatus) {
      this.setState ({
          timerStatus: newStatus
      })
  }

  handleRate (e) {
      if (!isNaN(e.target.value)) {
          this.setState({ rate: e.target.value })
      }
  }

  handleTask (e) { this.setState({ task: e.target.value }) }

    render () {
        var {timerStatus, rate, task, clock} = this.state
        return (
            <div className="task-panel">
                <div className="timer">
                    <Clock clock={clock} />
                    <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
                </div>
                <div className="info-panel">
                    <Rate  event={this.handleRate} rate={rate}/>
                    <Task  event={this.handleTask} task={task}/>
                </div>
           </div>
       );
    }
}
