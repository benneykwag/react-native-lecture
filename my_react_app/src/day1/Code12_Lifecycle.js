//src/day1/Code12_Lifecycle.js
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

  render() {
    if (this.state.loading) {
      return <h1>Loading</h1>;
    }
    const { name, age } = this.state.data;
    return (
      <div>
        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
      </div>
    );
  }
}
export default MyComponent;