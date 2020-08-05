import React, {Component} from 'react';

class Try extends Component {
  render() {
    return (
      <li>
        <div>{this.props.i + 1}회: {this.props.v.try} - {this.props.v.result}</div>
      </li>
    )
  }
}

export default Try;