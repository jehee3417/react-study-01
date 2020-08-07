import React, {useState, useRef} from 'react';

const ResponseCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('Click to Start!');
  const [result, setResult] = useState([]);
  const timeout = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  const onClickScreen = () => {
    if (state === 'waiting') {
      timeout.current = setTimeout(() => {
        setState('now');
        setMessage('Click now!!!');
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
      setState('ready');
      setMessage('Click on it when it\'s green.');

    } else if (state === 'ready') {
      clearTimeout(timeout.current);
      setState('waiting');
      setMessage('Too fast. Retry!');

    } else if (state === 'now') {
      endTime.current = new Date();
      setState('waiting');
      setMessage(`${endTime.current - startTime.current}ms, Retry.`);
      setResult((prevResult) => {
        return [...prevResult, endTime .current - startTime.current]
      });
    }
  }

  const onReset = () => {
    setState('waiting');
    setMessage('Click to Start!');
    setResult([]);
  }

  const renderAverage = () => {
    return (
      result.length === 0 
      ? null 
      : <>
          <div>Try count: {result.length}</div>
          <div>Average Time: {result.reduce((a, c) => a + c) / result.length}ms</div>
          <div>
            <h3>History</h3>
            <ul>
              {result.map((v, i) => {
                return (
                  <li key={v + 'rc' + i}>{i + 1}Round: {v}ms</li>
                )
              })}
            </ul>
          </div>
          <div>
            <button onClick={onReset}>RESET</button>
          </div>
        </>
    )
  }

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </>
  )
}

import {hot} from 'react-hot-loader/root';
export default hot(ResponseCheck);