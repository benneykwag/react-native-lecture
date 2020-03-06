const React = require('react');
import {View} from 'react-native'
const { Navigation } = require("react-native-navigation");
const Button = require("../components/Button");
const Root = require("../components/Root");
const {
  WELCOME_SCREEN_HEADER,
  STACK_BTN,
  BOTTOM_TABS_BTN,
  BOTTOM_TABS,
  SIDE_MENU_BTN
} = require("../testIDs");
class PushedScreen extends React.Component {
  

  render() {
    return (
      <Root componentId={this.props.componentId}>
      {/* <Button title="Click" onPress={()=>{
          Navigation.showModal('Test');        
      }}/> */}
      <Button label="PushedScreen" testID={STACK_BTN} onPress={this.stack} />
    </Root>
    );
  }

}
module.exports = PushedScreen;