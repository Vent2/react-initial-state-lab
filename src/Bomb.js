// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
          }
    }

    render() {
        const messages = this.state.secondsLeft === 0? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`

        return(
            <div className="message">{messages}</div>
        )
    }
}