// src/day1/Code03_State.js
import React from 'react'
class MyComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      year: 2016,
      name: 'Naver',
      colors: ['blue']
    }
  }

  updateYear () {
    this.setState({
      year: 2019
    })
  }

  render () {
    return (
      <div>
        <button
          style={{
            color: 'white',
            background: 'blue',
            padding: 100,
            fontSize: 25
          }}
          onClick={() => this.updateYear()}
        >
          The year is : {this.state.year}
        </button>
      </div>
    )
  }
}
export default MyComponent
