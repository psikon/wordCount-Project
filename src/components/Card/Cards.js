import React from 'react';
import Card from "./Card/Card";
import "./Card/Card.css"

const Cards = (props) => {

        return props.wordCountList.map((wordCount) => {
                return (<Card title={wordCount.title} wordCountMap={wordCount.wordCountMap}/>)
        });
};

export default Cards;