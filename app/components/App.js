var React = require("react");
var Game = require("../components/Game");

class App extends React.Component{
    render(){
        return(
            <div>
                <Game />
            </div>
        );
    }
}

module.exports = App;