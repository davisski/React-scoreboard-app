import React from "react";
import PropTypes from "prop-types";

/**
 * 
 * @param {index} - Index of player.
 * @param {score} - Store individual player score.
 * @method {changeScore} - Call to change score base on action. 
 */
const Counter = ({index, score, changeScore}) => {           
    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={() => changeScore(index,-1)}> - </button>
            <span className="counter-score">{ score }</span>
            <button className="counter-action increment" onClick={() => changeScore(index,1)}> + </button>
        </div>
    );
}
// Typechecking
Counter.propTypes = {
    index: PropTypes.number,
    score: PropTypes.number,
    changeScore: PropTypes.func
}

export default Counter;