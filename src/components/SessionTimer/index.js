import React, { Component } from 'react';

import './index.css';
import format from './format';

const DELAY = 1000;
// const INITIAL_DISPLAY_TIME = '00:00:00';

class SessionTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      interval: null
    };

    this.update = this.update.bind(this);
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);

    // check if we need to start the timer
    // on initial component load
    const { timer } = props;
    if (timer.running) {
      this.start();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { timer } = this.props;

    // props have changed, decide how to re-render
    if (timer.running !== nextProps.timer.running) {

      if (nextProps.timer.running) {
        this.start();
      } else {
        this.pause();
      }

    }
  }

  start() {
    this.setState({
      interval: setInterval(this.update, DELAY)
    });
  }

  pause() {
    clearInterval(this.state.interval);
    this.setState({ interval: null });
  }

  update() {
    const {
      timer,
      updateHandler
    } = this.props;

    // this is a fairly naive implementation
    const newClock = timer.duration + 1;

    updateHandler(newClock);
  }

  render() {
    const { timer } = this.props;

    return (
      <div className='session-timer__container'>
        {format(timer.duration)}
      </div>
    );
  }
}

export default SessionTimer;
