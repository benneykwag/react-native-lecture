//src/day1/Code04_State.js
import React from "react";
class MyComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      year: 2016,
      leapYear: true,
      topics: ["React", "ReactNative", "JavaScript"],
      info: {
        paperback: true,
        length: "335 pages",
        type: "programing"
      }
    };
  }

  render() {
    let leapyear = <h1>This is not a leapyear!</h1>;
    if (this.state.leapYear) {
      leapyear = <h1>This is a leapyear!</h1>;
    }
    return (
      <div>
        <h1>{this.state.year}</h1>
        <h1>{this.state.info.length}</h1>
        <h1>{this.state.info.type}</h1>
        {leapyear}
      </div>
    );
  }
}
export default MyComponent;