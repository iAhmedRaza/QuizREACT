import React from 'react';
import QuizArea from './quizArea';
import ScoreArea from './scoreArea';
import DataSet from '../api/dataSet'

class Questionnera extends React.Component  {
    constructor(){
        super();
        this.state = {
            current: 0,
            dataset : DataSet,
            correct : 0,
            incorrect : 0,
            isFinished : false
        }
    }

    handleClick(choice){
        if(choice == this.state.dataset[this.state.current].correct){
            this.setState({
                correct: this.state.correct+1
            })
        }else{
            this.setState({
                incorrect: this.state.incorrect+1
            })
        }

        if(this.state.current == this.state.dataset.length - 1){
            this.setState({
                isFinished: true
            })
        }else{
            this.setState({
                current: this.state.current+1
            })
        }
    }

    render(){
        return(
            <div>
            <h1>Questionnera</h1>
            <QuizArea isFinished ={this.state.isFinished} dataset={this.state.dataset[this.state.current]} handleClick={this.handleClick} />
            <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect} />
            </div>
        );
    }
}

export default Questionnera;