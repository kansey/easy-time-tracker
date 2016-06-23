import React, {Component, PropTypes} from 'react';
import '../assets/stylesheets/base.scss';

export class Clock extends React.Component {

  static propTypes =  {
      clock: PropTypes.string.isRequired
  };

  render () {
      var { clock } = this.props;
      return (
          <div className="clock">
              { clock }
          </div>
      );
  }
}
