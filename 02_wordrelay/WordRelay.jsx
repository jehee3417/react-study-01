const React = require('react');
const {useState, useRef} = React;

const WordRelay = () => {
  const [word, setWord]  = useState('폴라리움');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult('O');
      setWord(value);
      setValue('');
      inputRef.current.focus();
    } else {
      setResult('X');
      setValue('');
      inputRef.current.focus();
    }
  }

  onChangeInput = (e) => {
    setValue(e.target.value);
  }
  
  return (
    <>  
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
      <label for ="wordInput">글자입력</label>
        <input id="wordInput" ref={inputRef} value={value} onChange={onChangeInput} />
        <button className="btnCls">실행</button>
      </form>
      <div>{result}</div>
    </>
  );
}

const { hot } = require('react-hot-loader/root');
const Hot = hot(WordRelay);
module.exports = Hot;
//module.exports = WordRelay;