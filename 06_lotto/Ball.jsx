import React, { memo } from 'react'

const Ball = memo(({num}) => {
  let background;
  if (num <= 10) {
    background = 'red';
  } else if (num <=20) {
    background = 'orange';
  } else if (num <=30) {
    background = 'yellow';
  } else if (num <=40) {
    background = 'blue';
  } else {
    background = 'green';
  }
  return (
    <div className="ball" style={{background}}>{num}</div>
  )
})

export default  Ball;