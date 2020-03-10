// src/day1/Code07_Props.js
import React from 'react'
class MyComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      book: 'React Native..'
    }
  }

  updateBook () {
    this.setState({
      book: 'Hello React'
    })
  }

  render () {
    return (
      <BookDisplay
        updateBook={() => this.updateBook()}
        book={this.state.book}
      />
    )
  }
}
export default MyComponent

class BookDisplay extends React.Component {
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
          onClick={this.props.updateBook}
        >
          {this.props.book}
        </button>
      </div>
    )
  }
}
