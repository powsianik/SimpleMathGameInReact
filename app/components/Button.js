var React = require("react");

const Button = (props) =>{
    return(
        <div className="col-sm-2">
            <button className="btn" disabled={props.isAnySelectedNumber}>=</button>
        </div>
    );
}

module.exports = Button;