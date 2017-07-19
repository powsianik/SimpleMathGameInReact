var React = require("react");
var Stars = require("../components/Stars");
var Answer = require("../components/Answer");
var Button = require("../components/Button");

class Game extends React.Component{
    render(){
        return(
            <div className="container">
                <h3>Stars Math Game</h3>
                <hr/>
                <div className="row">
                    <Stars />
                    <Answer />
                    <Button />
                </div>
            </div>
        );
    }
}

module.exports = Game;