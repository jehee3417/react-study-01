import React, { PureComponent } from 'react'
import { hot } from 'react-hot-loader/root';
import Ball from './Ball'

function getWinNumbers() {
  console.log('getWinNumbers');
  const candidate = Array(45).fill().map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

class Lotto extends PureComponent {
  state = {
    winNumbers: getWinNumbers()
    , winBalls: []
    , bonus: null
    , redo: false
  }

  timeouts = [];

  runTimeOuts = () => {
    const {winNumbers} = this.state;
    for (let i = 0; i < winNumbers.length - 1; i ++) {
      this.timeouts [i] = setTimeout(() => {
        this.setState((prevState) => {
          return {
            winBalls: [...prevState.winBalls, winNumbers[i]]
          }
        })
      }, (i + 1) * 1000);
      this.timeouts [6] = setTimeout(() => {
        this.setState({
          bonus:winNumbers[6]
          , redo: true
        })
      }, 7000)
    }
  }

  componentDidMount() {
    this.runTimeOuts();
  }

  componentDidUpdate() {
    if (this.state.winBalls.length === 0) {
      this.runTimeOuts();
    }
  }

  componentWillUnmount() {
    this.timeouts.forEach((v) => {
      clearTimeout(v);
    })
  }


  onClickRedo = () => {
    this.setState({
      winNumbers: getWinNumbers()
      , winBalls: []
      , bonus: null
      , redo: false
    })
    this.timeouts = [];
  }

  render() {
    const {winBalls, bonus, redo} = this.state;
    return (
      <>
        <div>Winning Number</div>
        <div id="resultFrame">
          {winBalls.map((v) => <Ball key={v} num={v}/>)}
        </div>
        <div>bonus</div>
        {bonus && <Ball num={bonus}/>}
        {redo && <div><button onClick={this.onClickRedo}>One more.</button></div>}
      </>
    )
  }
}

export default hot(Lotto);