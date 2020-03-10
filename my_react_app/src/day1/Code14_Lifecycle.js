//src/day1/Code14_Lifecycle.js
import React from "react";
class MyComponent extends React.Component {
  constructor() {
    super();
    this.state = { loading: true, data: {} };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
        data: { name: "Nader Dabit", age: 22 }
      });
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevState", prevState, this.state);
    if (this.state.data.age == 22) {
      this.setState({
        data: {
          message: "Age is " + this.state.data.age
        }
      });
    }
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading</h1>;
    }
    const { name, age, message } = this.state.data;
    return (
      <div>
        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
        <h1>Msg: {message}</h1>
      </div>
    );
  }
}
export default MyComponent;