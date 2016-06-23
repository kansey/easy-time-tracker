import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';
import { TaskList } from './TaskList.js';

export default class App extends React.Component {
  render() {
      return (
          <div className="container">
              <TaskList/>
          </div>
      )
  }
}
