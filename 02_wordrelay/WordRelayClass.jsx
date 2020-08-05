const React = require('react');
const {Component} = React;

class WordRelay extends Component {
  state = {
    word: '부루부루'
    , value: ''
    , result: ''
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: 'O'
        , word: this.state.value
        , value: ''
      });
      this.input.focus();
    } else {
      this.setState({
        result: 'X'
        , value: ''
      });
      this.input.focus();
    }
  }

  onChangeInput = (e) => {
    this.setState({ value: e.target.value});
  }

  input;
  onRefInput = (c) => {
    this.input = c;
  }

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
          <button>테스트!</button>
        </form>
        <div>{this.state.result}</div>
      </>
    )
  }
}

const { hot } = require('react-hot-loader/root');
const Hot = hot(WordRelay);
module.exports = Hot;
//module.exports = WordRelay;