import React, { useState, useRef, useEffect, memo, useMemo, useCallback} from 'react'
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

const Lotto = memo(() => {
  const [winNumbers, setWinNumbers] = useState(useMemo(() => getWinNumbers(), []));
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);


  //useEffeact가 빈 배열이면 componentDidMount와 같음.
  useEffect(() => {
  }, [])

  // conponentDidUpdate만 수행하고 싶을 경우
  const mounted = useRef(false);
  useEffect(( )=> {
    if (!mounted.current ) {
      mounted.current = true;
    } else{
    }
  },[/*바뀌는 값*/]);

  //useEffeact의 배열 요소가 있으면 componentDidMount와 conponentDidUpdate 모두 수행.
  useEffect(() => {
    runTimeOuts();

    return () => {
      //componentWillUnmount와 같음.
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      })
    }
  }, [timeouts.current])

  const runTimeOuts = () => {
    for (let i = 0; i < winNumbers.length - 1; i ++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((preWinBalls) => {
          return [...preWinBalls, winNumbers[i]]
        })
      }, (i + 1) * 1000);
      timeouts.current[6] = setTimeout(() => {
        setBonus(winNumbers[6]);
        setRedo(true)
      }, 7000)
    }
  }

  const onClickRedo = useCallback(() => {
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  }, [])

  return (
    <>
      <div>Winning Number</div>
      <div id="resultFrame">
        {winBalls.map((v) => <Ball key={v} num={v}/>)}
      </div>
      <div>bonus</div>
      {bonus && <Ball num={bonus}/>}
      {redo && <div><button onClick={onClickRedo}>One more.</button></div>}
    </>
  );
})

export default hot(Lotto);