import React from 'react';
import "./control.css";

const Control = (props) =>  {
    return (
        <div className="container">
            <h3>WordCount Service</h3>
            <div>
                <button className="start_button" type="submit" onClick={props.start}>Start</button>
                <button className="stop_button" type="submit" onClick={props.stop}>Stop</button>
                <button className="result_button" type="submit" onClick={props.result}>Result</button>
            </div>

        </div>)
};

export default Control;