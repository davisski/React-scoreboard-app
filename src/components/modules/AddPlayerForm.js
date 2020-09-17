import React, {Component} from "react";

export default class AddPlayerForm extends Component {
    // Store DOM input element
    playerInput = React.createRef();

    /**
     * 
     * @param {e} - Event object.
     * @method {preventDefault} - Prevent page refresh.
     * @method {addPlayer} - Add player to players state.
     * 
     */
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.playerInput.current.value);
        // Reset input value
        e.currentTarget.reset();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input ref={this.playerInput} type="text"  placeholder="Enter a player's name" />
                <input type="submit" value="Add Player" />
            </form>
        );
    }
}
