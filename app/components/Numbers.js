var React = require("react");

const Numbers = (props) =>{
    return(
      <div className="card text-center">
          <div>
              <span>1</span>
              <span className="selected">7</span>
              <span className="used">5</span>
          </div>
      </div>
    );
}

module.exports = Numbers;