import React, {PureComponent} from 'react';
import Try from './TryClass';

function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i )), 1)[0];
    array.push(chosen);
  }
  console.log(array)
  return array;
}

class Baseball extends PureComponent {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: []
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.value == this.state.answer.join('')) {
      this.setState({
        result: 'H!',
      })
      this.setState({
        value: ''
        , answer: getNumbers()
        , tries: []
      })
    } else {
      const answerArray = this.state.value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (this.state.tries.length >= 9) {
        this.setState({
          result: `10 time Fail, Restart(answer: ${this.state.answer.join(',')})`
        });
        this.setState({
          value: ''
          , answer: getNumbers()
          , tries: []
        })
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === this.state.answer[i]) {
            strike++;
          } else if (this.state.answer.includes(answerArray[i])) {
            ball++;
          }
        }
        this.setState((prevState) => {
          return {
            tries: [...prevState.tries, {try: this.state.value, result: `S: ${strike}, B: ${ball}`}],
            value: ''
          }
        })
      }

    }
  }
  
  onChangeInput = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <>
        <h3>{this.state.result}</h3>
        <form onSubmit={this.onSubmitForm}>
          <input ref={this.onRefInput} maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
          {/* <button type="submit">comfirm</button> */}
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {this.state.tries.map((v, i) => {
            return (
              <Try v={v} i={i} key={v + i}/>
            )
          })}
        </ul>
      </>
    )
  }

}

import { hot } from 'react-hot-loader/root';
export default hot(Baseball);
 
