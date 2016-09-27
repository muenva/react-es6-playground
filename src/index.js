import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import example from './example'

class App  extends Component {
  render () {
    return (
      <div>
        <h1>{example}</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
