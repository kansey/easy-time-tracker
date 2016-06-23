import '../assets/stylesheets/base.scss';
import React, { Component, PropTypes} from 'react';

export class Rate extends React.Component {

  static propTypes = {
      rate: PropTypes.number.isRequired,
      event: PropTypes.func.isRequired
  }

  render () {
      return (
          <div className="info-panel">
            <span className="span-text ">Salary:</span>
            <input type="text" value={this.props.rate} onChange={this.props.event} />
            <span className="text-right">rub/hour</span>
          </div>
      );
  }
}
