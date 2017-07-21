var React = require("react");

const Stars = (props) =>{
    const numberOfStars = Math.random()*9;

    let stars = [];
    for(let i=0; i < numberOfStars; ++i){
        stars.push(<i key={i} className="fa fa-star"></i>);
    }

    return(
        <div className="col-sm-5">
            {stars}
        </div>
    );
}

module.exports = Stars;