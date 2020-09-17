import React from "react";
import PropTypes from "prop-types";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

/**
 * @param {title} - Store application title.
 * @param {players} - Array of player objects.
 */
const Header = ({title, players}) => {
  
    return (
      <header>
        <Stats 
        players={players}        
        />
        <h1>{title}</h1>
        <Stopwatch />
      </header>
    );
  }
// Typechecking
Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object),

}
//set default properties
Header.defaultProps = {
  title: "Scoreboard"
}
export default Header;