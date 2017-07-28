var React = require("react");

const DoneFrame = (props) =>{
    let doneInfo;
    switch(props.doneStatus){
        case 1:
            doneInfo = <div className="alert alert-success text-center">
                Congratulations !!!
            </div>
            break;
        case 2:
            doneInfo = <div className="alert alert-danger text-center">
                Game Over
            </div>
            break;
        default:
            break;
    }

    return(
        <div>
            {doneInfo}
        </div>
    );
}

module.exports = DoneFrame;
