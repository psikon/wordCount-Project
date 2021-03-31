import React from 'react';
import WordCountMap from "./WordCountMap";

const Card = (props) => {
    return (
        <div className="card">
            <p>{props.title}</p>
            <WordCountMap wordCountMap={props.wordCountMap}/>
        </div>
    )
};

export default Card;