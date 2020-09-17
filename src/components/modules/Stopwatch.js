import React, { Component } from "react";

export default class Stopwatch extends Component {
    state={
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0
    }
    /**
     * @method handleStopwatch - Handles stopwatch functionality 
     */
    handleStopwatch = () => {
        this.setState( prevState => ({
            isRunning: !prevState.isRunning,
        }))
        // Checks if timer is running. If runs then set state.previousTime to time now
        if(!this.state.isRunning){
            this.setState({
                previousTime: Date.now()
            });
        }
    }
    /**
     * @method {componentDidMount} - React lifecycle method - invoked immediately before a component is mounted (inserted into tree)
     */
    componentDidMount(){
        this.intervalID = setInterval(() => this.tick(), 100)
    }
    /**
     * @method {componentWillUnmount} - React lifecycle method - invoked immediately before a component is unmounted and destroyed
     * @method {clearInterval} - Cancels a timed, repeating action wich was previously established by a call to setInterval()
     */
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    /**
     * @method {tick} - Checks if stopwatch is running, and sets state properties.
     * @constant {now} - Store returned number of milliseconds elapsed.
     * @property {previousTime} - Stopwatch state previous time property assigned to constant now.
     * @property {elapseTime} - Store elapsed time based on calculation of prevState elapsedTime property plus (constant now substracted with prevState.previousTime)
     * @callback {prevState} - Callback function that produces state based on the previous state.
     */
    tick = () => {
        if(this.state.isRunning){
            const now = Date.now();
            this.setState( prevState => ({
                previousTime: now,
                elapsedTime: prevState.elapsedTime + (now - prevState.previousTime)
            }))
        }
    }
    /**
     * @method {handleReset} - Handles stopwatch reset functionality.
     * 
     */
    handleReset = () => {
        // Sets elapsed time back to zero
        this.setState({
            elapsedTime: 0
        });
    }
    /**
     * @constant {seconds} - Store seconds based on math operation with Math object method floor and elapsed time divided with one thousand milliseconds
     */
    render(){
        const seconds = Math.floor(this.state.elapsedTime / 1000)
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">
                    {seconds}
                </span>
                <button onClick={this.handleStopwatch}>
                    {this.state.isRunning ? "Stop" : "Start"}
                </button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}