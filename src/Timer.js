import React, { Component } from 'react';
import Time from './Time';
import './Time.css';

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timeMs: 0
        }
        this.start = this.start.bind(this)
        this.resetTimer.bind(this)
        this.pause = this.pause.bind(this)
    }
    start () {
        if(this.state.interval) {
            return
        }
        const interval = setInterval(
            () => {
               this.setState({
                   timeMs: this.state.timeMs + 1000
               }) 
            },
            1000
        )
        this.setState({
            interval: interval
        })
    }
    pause () {
        if(!this.state.interval) {
            return
        }
        clearInterval(this.state.interval)
        this.setState({
            interval: undefined
        })
    }
    resetTimer = () => {
        this.setState({
            timeMs: 0,
         
        });
      };
    render() {
        return <div >
            <Time ms={this.state.timeMs} />
            
           <div className="btn-timer">
           <input 
                type="button"
                value="Start"
                onClick={this.start} />
               
               
               
            <input 
                type="button"
                value="Reset"
                onClick={this.resetTimer}/>

<input
              type="button"
              value="Stop"
               onClick={this.pause}/>
                </div> 

  
        </div>
    }
}

export default Timer;