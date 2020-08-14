import React, { useState, useContext, useCallback, memo} from 'react';
import {START_GAME, TableContext} from './Mine'

const Form = memo(() => {
  const [row, setRow] = useState(9);
  const [cell, setCell] = useState(9);
  const [mine, setMine] = useState(10);
  const { dispatch } = useContext(TableContext);

  const onChangeRow = useCallback((e) => {
    setRow(e.target.value);
  }, [])
  const onChangeCell = useCallback((e) => {
    setCell(e.target.value);
  }, [])
  const onChangeMine = useCallback((e) => {
    setMine(e.target.value);
  }, [])

  const onClickBtn = useCallback(() => {
    dispatch({type: START_GAME, row, cell, mine})
  }, [row, cell, mine])

  return (
    <>
      <input type="number" placeholder="세로" value={row} onChange={onChangeRow} />
      <input type="number" placeholder="가로" value={cell} onChange={onChangeCell} />
      <input type="number" placeholder="지뢰" value={mine} onChange={onChangeMine} />
      <button onClick={onClickBtn}>START!!</button>
    </>
  )
})

export default Form;
