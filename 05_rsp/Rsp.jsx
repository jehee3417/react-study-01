import React, { useState, useRef, useEffect } from 'react';


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

const Rsp = () => {
  const [result, setResult] =  useState('');
  const [imgCoord, setImgCoord] = useState(rspCoords.rock);
  const [score, setScore] = useState(0);
  const interval = useRef(null);

  useEffect(() => { 
    //componentDidMount
    //ComponentDidUpdate
    interval.current = setInterval(changeHand, 100);
    return () => {
      //componentWillUnmount
      clearInterval(interval.current);
    }
  }, [imgCoord])

  const changeHand = () => {
    if (imgCoord === rspCoords.rock) {
      setImgCoord(rspCoords.scissor);
    } else if (imgCoord === rspCoords.scissor) {
      setImgCoord(rspCoords.paper);
    } else if (imgCoord === rspCoords.paper) {
      setImgCoord(rspCoords.rock);
    }
  }

  const onClickBtn = (choice) => () => {
    clearInterval(interval.current);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      setResult('Draw!');
    } else if ([-1, 2].includes(diff)) {
      setResult('Win!');
      setScore((prevScore) => {
        return prevScore + 1
      });
    } else {
      setResult('Lose!');
      setScore((prevScore) => {
        return prevScore - 1;
      })
    }
    setTimeout(() => {
      interval.current = setInterval(changeHand, 100);
    }, 500);
  };

  return (
    <>
    <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
    <div>
      <button id="rock" className="btn" onClick={onClickBtn('rock')}>Rack</button>
      <button id="scissor" className="btn" onClick={onClickBtn('scissor')}>Scissor</button>
      <button id="paper" className="btn" onClick={onClickBtn('paper')}>Paper</button>
    </div>
    <div>{result}</div>
    <div>SCORE: {score}pt</div>
  </>
  );

}
export default Rsp;
