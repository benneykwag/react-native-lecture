//src/day1/Code11_Lifecycle.js
import React from "react";
class MyComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      userLoggedIn: true,
      user: {
        authenticated: false
      }
    };
  }

  updateBook() {
    this.setState({
      user: { authenticated: true }
    });
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextState.user.authenticated) {
      return {
        userLoggedIn: false
      };
    }
    return null;
  }

  render() {
    return (
      <div>
        {this.state.userLoggedIn && (
          <AuthenticatedComponent updateBook={() => this.updateBook()} />
        )}
      </div>
    );
  }
}
export default MyComponent;

const AuthenticatedComponent = props => {
  return <button style={{
    color: 'white',
    background: 'blue',
    padding: 100,
    fontSize: 25
  }}
  onClick={props.updateBook}>props.userLoggedIn</button>;
};
// or
// class AuthenticatedComponent extends React.Component {
//   render() {
//     return <Text onPress={this.props.updateBook}>props.userLoggedIn</Text>;
//   }
// }