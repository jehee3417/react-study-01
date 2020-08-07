import React, { PureComponent } from 'react';

// 클래스의 경우 -> constructor -> render -> ref -> componentDidMount
// (setState/props 바뀔때) -> shouldComponentUpdate(true) -> render -> componentDidUpdate
// 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸

const rspCoords = {
  rock: '0px'
  , scissor: '-142px'
  , paper: '-284px'
}

const scores = {
   rock: 0
   , scissor: 1
  , paper: -1
}
const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(function(v) {
    return v[1] === imgCoord;
  })[0];
}

class Rsp extends PureComponent {
  state = {
    result: ''
    , imgCoord: rspCoords.rock
    , score: 0
  };

  interval;

  componentDidMount() {
    this.interval = setInterval(this.changeHand, 1);
  }

  componentWillUnmount() { 
    clearInterval(this.interval);
  }

  changeHand = () => {
    const {imgCoord} = this.state;
    if (imgCoord === rspCoords.rock) {
      this.setState({
        imgCoord: rspCoords.scissor
      });
    } else if (imgCoord === rspCoords.scissor) {
      this.setState({
        imgCoord: rspCoords.paper
      });
    } else if (imgCoord === rspCoords.paper) {
      this.setState({
        imgCoord: rspCoords.rock
      });
    }
  }

  onClickBtn = (choice) => () => {
    const {imgCoord} = this.state;
    clearInterval(this.interval);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      this.setState({
        result: 'Draw!',
      });
    } else if ([-1, 2].includes(diff)) {
      this.setState((prevState) => {
        return {
          result: 'Win!',
          score: prevState.score + 1,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          result: 'Lose!',
          score: prevState.score - 1,
        };
      });
    }
    setTimeout(() => {
      this.interval = setInterval(this.changeHand, 1);
    }, 500);
  };

  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
        <div>
          <button id="rock" className="btn" onClick={this.onClickBtn('rock')}>Rack</button>
          <button id="scissor" className="btn" onClick={this.onClickBtn('scissor')}>Scissor</button>
          <button id="paper" className="btn" onClick={this.onClickBtn('paper')}>Paper</button>
        </div>
        <div>{result}</div>
        <div>SCORE: {score}pt</div>
      </>
    );
  }
}


export default Rsp;
