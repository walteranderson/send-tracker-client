import React, { Component } from 'react';
import { formatDuration } from '../../utils';

import './index.css';

const DELAY = 1000;

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
    // const { timer, updateHandler } = this.props;

    // add the initial second since
    // setInterval will skip it.
    // updateHandler(timer.duration + 1);

    this.setState({
      interval: setInterval(this.update, DELAY)
    });
  }

  pause() {
    clearInterval(this.state.interval);
    this.setState({ interval: null });
  }

  update() {
    const { timer, updateHandler } = this.props;

    // this is a fairly naive implementation
    let newClock = timer.duration + 1;

    updateHandler(newClock);
  }

  render() {
    const { timer } = this.props;

    return (
      <div className='session-timer__container'>
        <div className='session-timer__clock'>
          {formatDuration(timer.duration)}
        </div>
      </div>
    );
  }
}

export default SessionTimer;
