var React = require("react");
var Stars = require("../components/Stars");
var Answer = require("../components/Answer");
var Button = require("../components/Button");
var Numbers = require("../components/Numbers");

class Game extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            selectedNumbers: [2, 4],
            numberOfStars: 1 + Math.floor((Math.random()*9)),
            answerIsCorrect: null
        };

        this.selectNumber = this.selectNumber.bind(this);
        this.unselectNumber = this.unselectNumber.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
    }

    selectNumber(clickedNumber){
        if(this.state.selectedNumbers.indexOf(clickedNumber) === -1){
            this.setState(prevState => ({
                selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
            }));
        }
    }

    unselectNumber(clickedNumber){
        if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0){
            this.setState(prevState => ({
                selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
            }));
        }
    }

    checkAnswer(){
        this.setState(prevState => ({
            answerIsCorrect: prevState.numberOfStars === prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
        }));
    }

    render(){
        return(
            <div className="container">
                <h3>Stars Math Game</h3>
                <hr/>
                <div className="row">
                    <Stars numberOfStars={this.state.numberOfStars} />
                    <Button isAnySelectedNumber={this.state.selectedNumbers.length === 0} checkAnswer={this.checkAnswer} isAnswerCorrect={this.state.answerIsCorrect}/>
                    <Answer selectedNumbers={this.state.selectedNumbers} unselectNumber={this.unselectNumber} />
                </div>
                <br />
                <Numbers selectedNumbers={this.state.selectedNumbers} selectNumber={this.selectNumber}/>
            </div>
        );
    }
}

module.exports = Game;