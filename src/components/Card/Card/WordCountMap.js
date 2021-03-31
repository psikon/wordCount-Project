import React, {Component} from 'react';
import "./WordCountMap.css";

class WordCountMap extends Component {

    render() {
    let petList = Object.entries(this.props.wordCountMap).map(([key,value])=>{
        return (
            <div className="wordCountMap">{key} : {value.toString()}</div>
        );
    });
    return (
        <div>{petList}</div>)
    }
}

export default WordCountMap;

