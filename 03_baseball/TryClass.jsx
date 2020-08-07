import React, {PureComponent} from 'react';

class Try extends PureComponent {
  render() {
    const {v, i} = this.props;
    return (
      <li>
        <div>{i + 1}회: {v.try} - {v.result}</div>
      </li>
    )
  }
}

export default Try;