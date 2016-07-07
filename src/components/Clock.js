import React, {Component, PropTypes} from 'react';

const Clock = ({clock}) => {
    return (
        <div className="clock">
            { clock }
        </div>
    );
 }

Clock.propTypes = {
    clock: PropTypes.string.isRequired
}

export default Clock;
