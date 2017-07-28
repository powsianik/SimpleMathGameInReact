var React = require("react");
var Stars = require("../components/Stars");
var Answer = require("../components/Answer");
var Button = require("../components/Button");
var Numbers = require("../components/Numbers");
var DoneFrame = require("../components/DoneFrame");

class Game extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            selectedNumbers: [],
            usedNumbers: [],
            numberOfStars: 1 + Math.floor((Math.random()*9)),
            answerIsCorrect: null,
            remainNumOfRedraws: 5,
            doneStatus: null
        };

        this.selectNumber = this.selectNumber.bind(this);
        this.unselectNumber = this.unselectNumber.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.acceptAnswer = this.acceptAnswer.bind(this);
        this.tryOtherNums = this.tryOtherNums.bind(this);
        this.updateDoneStatus = this.updateDoneStatus.bind(this);
        this.playAgain = this.playAgain.bind(this);
    }

    selectNumber(clickedNumber){
        if(this.state.selectedNumbers.indexOf(clickedNumber) === -1){
            this.setState(prevState => ({
                answerIsCorrect: null,
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

    updateDoneStatus(){
        if(this.state.usedNumbers.length === 9){
            this.setState(prevState => ({doneStatus: 1}));
        }else if(this.state.remainNumOfRedraws === 0){
            this.setState(prevState => ({doneStatus: 2}));
        }
    }

    checkAnswer(){
        this.setState(prevState => ({
            answerIsCorrect: prevState.numberOfStars === prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
        }));

        this.updateDoneStatus();
    }

    acceptAnswer(){
        this.setState(prevState => ({
            usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
            selectedNumbers: [],
            answerIsCorrect: null,
            numberOfStars: 1 + Math.floor((Math.random()*9))
        }));
    }

    tryOtherNums(){
        this.setState(prevState => ({
            selectedNumbers: [],
            answerIsCorrect: null,
            numberOfStars: 1 + Math.floor((Math.random()*9)),
            remainNumOfRedraws: prevState.remainNumOfRedraws - 1
        }));
    }

    playAgain(){
        this.setState(prevState => ({
            selectedNumbers: [],
            usedNumbers: [],
            numberOfStars: 1 + Math.floor((Math.random()*9)),
            answerIsCorrect: null,
            remainNumOfRedraws: 5,
            doneStatus: null
        }));
    }

    render(){
        return(
            <div className="container">
                <h3>Stars Math Game</h3>
                <hr/>
                <div className="row">
                    <Stars numberOfStars={this.state.numberOfStars} />
                    <Button isAnySelectedNumber={this.state.selectedNumbers.length === 0} checkAnswer={this.checkAnswer}
                            isAnswerCorrect={this.state.answerIsCorrect} acceptAnswer={this.acceptAnswer} tryOtherNums={this.tryOtherNums}
                            remainNumOfRedraws={this.state.remainNumOfRedraws}/>
                    <Answer selectedNumbers={this.state.selectedNumbers} unselectNumber={this.unselectNumber} />
                </div>
                <br />
                {
                    this.state.doneStatus ?
                        <DoneFrame doneStatus={this.state.doneStatus} playAgain={this.playAgain} />
                        :
                        <Numbers selectedNumbers={this.state.selectedNumbers} selectNumber={this.selectNumber} usedNumbers={this.state.usedNumbers}/>
                }

                <br/>

            </div>
        );
    }
}

module.exports = Game;