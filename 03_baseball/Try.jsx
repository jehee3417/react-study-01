import React, {memo, useState} from 'react';

const Try = memo(({v, i}) => {
  const [result, setResult] = useState(v.result);
  const onClick = () => {
    setResult('disappear')
  }
  return (
    <li>
      <div onClick={onClick}>{i + 1}회: {v.try} - {result}</div>
    </li>
  )
})

export default Try;