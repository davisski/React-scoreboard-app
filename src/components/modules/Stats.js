import React from "react";
import PropTypes from "prop-types";

/**
 * 
 * @param {players} - Array of player objects. 
 * @constant {totalPlayers} - Store total players value.
 * @constant {totalPoints} - Store total points with calculation.
 * 
 */
const Stats = ({players}) => {

    const totalPlayers = players.length;
    const totalPoints = players.reduce((total, player) => {
        return total + player.score;
    }, 0)

    return (
        <table className="stats">
        <tbody>
          <tr>
            <td>Players: </td>
            <td>{totalPlayers}</td>
          </tr>
          <tr>
            <td>Total Points:</td>
            <td>{totalPoints}</td>
          </tr>
        </tbody>
      </table>
       
    );
}
// Typechecking
Stats.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number
  })),
}
export default Stats;