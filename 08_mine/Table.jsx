import React, { useContext, memo} from 'react';
import Tr from './Tr';
import { TableContext } from './Mine';

const Table = memo(() => {
  const {tableData} = useContext(TableContext);
  console.log("tableData=>" , tableData)
  return (
    <>
      <table>
        <tbody>
          {Array(tableData.length).fill().map((tr, i) => 
            <Tr key={"tr" + i} rowIndex={i}/>
          )}
        </tbody>
      </table>
    </>
  )
});

export default Table;