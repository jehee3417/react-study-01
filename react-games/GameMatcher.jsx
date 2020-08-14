import React, { Component } from 'react'
import Baseball from '../03_baseball/BaseballClass';
import ResponseCheck from '../04_responsecheck/ResponseCheckClass';
import Lotto from '../06_lotto/LottoClass';

export default class GameMatcher extends Component {
  render() {
    console.log(this.props)
    if (this.props.match.params.name === "Baseball") {
      return <Baseball />
    } else if (this.props.match.params.name === "ResponseCheck") {
      return <ResponseCheck />
    } else if (this.props.match.params.name === "Lotto") {
      return <Lotto />
    }
    return (
      <div>
        No game 
      </div>
    )
  }
}
