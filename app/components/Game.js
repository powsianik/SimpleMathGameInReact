var React = require("react");
var Stars = require("../components/Stars");
var Answer = require("../components/Answer");
var Button = require("../components/Button");
var Numbers = require("../components/Numbers");

class Game extends React.Component{
    render(){
        return(
            <div className="container">
                <h3>Stars Math Game</h3>
                <hr/>
                <div className="row">
                    <Stars />
                    <Button />
                    <Answer />
                </div>
                <br />
                <Numbers />
            </div>
        );
    }
}

module.exports = Game;