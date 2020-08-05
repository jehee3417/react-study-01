import React from 'react';

const Try = ({v, i}) => {
  return (
    <li>
      <div>{i + 1}회: {v.try} - {v.result}</div>
    </li>
  )
}

export default Try;