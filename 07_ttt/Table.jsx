import React, {memo} from 'react'
import Tr from './Tr'

const Table = memo(({tableData, dispatch}) => {
  return (
    <table>
      <tbody>
        {Array(tableData.length).fill().map((v, i) => (
          <Tr key={'tr' + i} rowIndex={i} rowData={tableData[i]} dispatch={dispatch}/>
        ))}
      </tbody>
    </table>
  )
});

export default Table;
