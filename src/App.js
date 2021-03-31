import React, {Component} from 'react';
import './App.css';
import Control from "./components/Control/Control";
import {WordCountService} from "./service/WordCountService";
import Cards from "./components/Card/Cards";
import {Settings} from "./Settings";

class App extends Component {

    state = {
        wordCountList : [],
    };

    start = () => {
       WordCountService.startWordCountService();
    };

    stop = () => {
        WordCountService.stopWordCountService();
    };

    getResult = () => {
        fetch(Settings.SERVER + "/result").then(response => response.json())
            .then(result => {
                this.setState({wordCountList :result});
            });
    };

    render() {
        return (
            <div>
                <header className="App-header"><h2>Word Count</h2></header>
                <div className="App">
                <div className="control">
                    <Control start={this.start} stop={this.stop} result={this.getResult}/>
                </div>
                <div className="result">
                    <Cards wordCountList={this.state.wordCountList}/>
                </div>
                </div>
            </div>);
    }
}

export default App;
