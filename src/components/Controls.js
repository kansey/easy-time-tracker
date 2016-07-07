import React, { Component, PropTypes} from 'react';

const Controls = ({countdownStatus, onStatusChange}) => {
    const StatusChange = (newStatus) => {
        return () => {
            onStatusChange(newStatus);
        }
    }

    return (
        <div className="control-panel">
            <button className="btn" onClick={StatusChange('started')}>Start</button>
            <button className="btn" onClick={StatusChange('paused')}>Pause</button>
            <button className="btn" onClick={StatusChange('stopped')}>Clear</button>
       </div>
    );
}

Controls.propTypes = {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange:  React.PropTypes.func.isRequired
}

export default Controls;
