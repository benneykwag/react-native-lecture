import React, {Component} from 'react';
import {View, Text, Button} from 'react-native-ui-lib';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation';


class ViewPost extends Component {

  static propTypes = {
    text: PropTypes.string,
    componentId: PropTypes.string
  }

  constructor(props) {
    super(props);

    this.onPostDeletePressed = this.onPostDeletePressed.bind(this);
  }

  onPostDeletePressed() {
    //In here we will request from the server to delete the post
    Navigation.pop(this.props.componentId);
    setTimeout(() => {
      alert('Post deleted');
    }, 1000);
  }

  render() {
    return (
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text style={{
          fontSize: 40
        }}>View Post Screen</Text>
        <Text>{this.props.text}</Text>
        <Button
          label="Delete Post"
          red10
          onPress={this.onPostDeletePressed}
          link
        />
      </View>
    );
  }
}

export default ViewPost;
