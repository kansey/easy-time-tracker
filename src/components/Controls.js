import '../assets/stylesheets/base.scss';
import React, { Component, PropTypes} from 'react';

export class Controls extends React.Component {

  static propTypes =  {
      countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange:  React.PropTypes.func.isRequired
  };

  onStatusChange (newStatus) {
      return () => {
          this.props.onStatusChange(newStatus);
      }
  }

  render () {
      var {countdownStatus} = this.props;
      return (
          <div className="control-panel">
              <button className="btn" onClick={this.onStatusChange('started')}>Start</button>
              <button className="btn" onClick={this.onStatusChange('paused')}>Pause</button>
              <button className="btn" onClick={this.onStatusChange('stopped')}>Clear</button>
         </div>
      );
  }
}
