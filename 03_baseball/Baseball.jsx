import React, {useState} from 'react';
import Try from './Try';

function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i )), 1)[0];
    array.push(chosen);
  }
  return array;
}

const Baseball = () => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);
  

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (value == answer.join('')) {
      setResult('H!');
      setValue('');
      setAnswer(getNumbers());
      setTries([]);
    } else {
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10 time Fail, Restart(answer: ${answer.join(',')})`);
        setValue('');
        setAnswer(getNumbers());
        setTries([]);
      } else {
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === answer[i]) {
            strike++;
          } else if (answer.includes(answerArray[i])) {
            ball++;
          }
        }
        setTries((prevTries) => {
          return [...prevTries, {try: value, result: `S: ${strike}, B: ${ball}`}]
        });
        setValue('')
      }

    }
  }
  
  const onChangeInput = (e) => {
    setValue(e.target.value);
  }
  return (
    <>
      <h3>{result}</h3>
      <form onSubmit={onSubmitForm}>
        <input maxLength={4} value={value} onChange={onChangeInput}/>
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          return (
            <Try v={v} i={i} key={v + i}/>
          )
        })}
      </ul>
    </>
  )
}

import { hot } from 'react-hot-loader/root';
export default hot(Baseball);
 
