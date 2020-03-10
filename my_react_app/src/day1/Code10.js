//src/day1/Code10.js
import React from "react";
class MyComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      first: "Hello",
      last: "Mike"
    };
  }

  updateBook() {
    this.setState({
      first: "안녕하세요",
      last: "마이클"
    });
  }

  render() {
    const { first, last } = this.state;
    return (
      <BookDisplay
        updateBook={() => this.updateBook()}
        first={first}
        last={last}
      />
    );
  }
}
export default MyComponent;

class BookDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: props.first + "-" + props.last
    };
  }
  // or
  //state = {
    //fullName: this.props.first + "-" + this.props.last
  //};

  render() {
    const { fullName } = this.state;
    const { first, last } = this.props;
    return (
      <div>
        <button onClick={this.props.updateBook}>{fullName}</button>
        <h1>=========</h1>
        <h1>
          {first} - {last}
        </h1>
      </div>
    );
  }
}