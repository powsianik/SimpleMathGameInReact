var React = require("react");
var Stars = require("../components/Stars");
var Answer = require("../components/Answer");
var Button = require("../components/Button");

class Game extends React.Component{
    render(){
        return(
            <div>
                <h3>Stars Math Game</h3>
                <Stars />
                <Answer />
                <Button />
            </div>
        );
    }
}

module.exports = Game;