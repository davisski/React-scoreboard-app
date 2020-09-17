import React, {Component} from 'react';
import Header from "./modules/Header";
import Player from "./modules/Player";
import AddPlayerForm from "./modules/AddPlayerForm";


class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1,
        score: 0
      },
      {
        name: "Treasure",
        id: 2,
        score: 0
      },
      {
        name: "Ashley",
        id: 3,
        score: 0
      },
      {
        name: "James",
        id: 4,
        score: 0
      }
    ],
  };
  /**
   * 
   * @param {Number} index - Index of player.
   * @param {Number} delta - Positive or negative integer.
   *    
   */
  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      score: prevState.players[index].score += delta  
    }))
  }
  /**
   * 
   * @param {Number} id - ID of player object.
   */
  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }
  /**
   * 
   * @param {String} name - Variable of input value. 
   */
  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: prevState.players.length + 1
          }
        ]
      }
     
    })
  }
  /**
   * @function getHighScore - Returns highest score.
   * @constant scores - Array of player scores.
   * @constant highScore - Variable of highest score value.
   * @method max - Math object method - returns the largest of the zero or more number given as input parameters.
   */
  getHighScore = () => {
    const scores = this.state.players.map(player => player.score)
    const highScore = Math.max(...scores);
    console.log(highScore);
    // Check if there's a highest score (a score greater than 0), return that score.
    if(highScore){
      return highScore;
    }
    // Otherwise return null, because there is no high score.
    return null;
  }
  /**
   * @constant highScore - Store highest score into variable.
   * 
   */
  render() {
    const highScore = this.getHighScore();
    return (
      <div className="scoreboard">
        <Header 
          players={this.state.players}
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            id={player.id}
            key={player.id.toString()} 
            index={index}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleScoreChange}
            score={player.score}  
            isHighScore={highScore === player.score}         
          />
        )}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
