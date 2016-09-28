import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import result from './example'

class App  extends Component {
  render () {
    return (
      <div>
        <h1>Remaining Kids ({result.length})</h1>
        {result.map(function (kid, index) {
          return <p key={index}>{kid.name} ({kid.age})</p>
        })}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

/*
<h1>Boys</h1>
<h4>{result.boys.length}</h4>
<p>{result.boys.map(function (currentValue, index, array) {
    return <span key={index}>
      Index: {index} <br></br>
      Name: {currentValue.name}
      <br />
      Array: {array.length}
      <br />
    </span>
})}</p>
<h1>Girls: {result.girls.length}</h1>
*/
