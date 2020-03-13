// src/day1/Code6_Props.js
import React from 'react'
class MyComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      book: 'React Native'
    }
  }
  render () {
    return <BookDisplay book={this.state.book} />;
  }
}
export default MyComponent

class BookDisplay extends React.Component {
  render () {
    return (
      <div>
        <h1>
          {this.props.book}
        </h1>
      </div>
    )
  }
}
