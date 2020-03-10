//src/day1/Code05_Props.js
import React from "react";
class MyComponent extends React.Component {
  render() {
    return <BookDisplay book="React Native " />;
  }
}
export default MyComponent;

class BookDisplay extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.book}</h1>
      </div>
    );
  }
}