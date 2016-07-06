import '../assets/stylesheets/base.scss';
import React, { Component, PropTypes} from 'react';

const Rate = ({rate, event}) => {
    return (
        <div className="info-panel">
          <span className="span-text ">Salary:</span>
          <input type="text" value={rate} onChange={event} />
          <span className="text-right">rub/hour</span>
        </div>
    );
}

Rate.propTypes = {
    rate: PropTypes.number.isRequired,
    event: PropTypes.func.isRequired
}

export default Rate;
