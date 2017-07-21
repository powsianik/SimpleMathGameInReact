var React = require("react");

const Answer = (props) =>{
    return(
        <div className="col-sm-5">
            {props.selectedNumbers.map((number, i) => <span key={i} onClick={() => props.unselectNumber(number)}>{number}</span>)}
        </div>
    );
}

module.exports = Answer;