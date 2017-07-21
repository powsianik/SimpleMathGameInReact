var React = require("react");
var Lodash = require("lodash");

const Numbers = (props) =>{
    const numberClassName = function(number){
        if(props.selectedNumbers.indexOf(number) >= 0){
            return "selected";
        }
    }

    return(
      <div className="card text-center">
          <div>
              {
                  Numbers.listOfNumbers.map((number, i) =>
                      <span key={i} className={numberClassName(number)} onClick={() => props.selectNumber(number)}>
                        {number}
                      </span>)
              }
          </div>
      </div>
    );
}

Numbers.listOfNumbers = _.range(1,10);

module.exports = Numbers;