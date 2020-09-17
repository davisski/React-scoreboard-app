import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Icon from "./Icon";

class Player extends PureComponent {
  // Typechecking
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number,
    isHighScore: PropTypes.bool
  }
  /**
   * @constant {removePlayer, name, score, changeScore, id, index, isHighScore} - Object destructuring, pull properties out from object.
   */
  render(){
    const {removePlayer, name, score, changeScore, id, index, isHighScore} = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          <Icon isHighScore={isHighScore}/>
          { name }
        </span>
  
        <Counter
            index={index} 
            score={score}
            changeScore={changeScore}    
            />
      </div>
    );
  }
}

export default Player;