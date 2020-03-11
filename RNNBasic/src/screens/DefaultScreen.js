import React from 'react'
import {View} from 'react-native'
import Root from '../components/Root'
const Button = require("../components/Button");
const Screens = require("./Screens");
const { Navigation } = require("react-native-navigation");
const { isString, get } = require('lodash');

const compId = (selfOrCompId) => {
  return get(selfOrCompId, 'props.componentId', selfOrCompId);
}


class DefaultScreen extends React.Component {
  static options() {
    return {
      topBar: {
        title: {
          text: "React Native Navigation"
        }
      }
    };
  }

  render() {
    return (
      <Root componentId={this.props.componentId}>
        <Button label="showOverlay(layout = {})" onPress={this.showOverlay} />
        <Button label="dismissOverlay(componentId)" onPress={this.dismissOverlay} />
        <Button label="push(componentId, layout)" onPress={this.push} />
        <Button label="pop(componentId, mergeOptions?)" onPress={this.pop} />
        <Button label="popToRoot(componentId, mergeOptions?)" onPress={this.popToRoot} />
        <Button label="popTo(componentId, mergeOptions?)" onPress={this.popTo} />
        <Button label="setStackRoot(componentId, params)" onPress={this.setStackRoot} />
      </Root>
    );
  }


  showOverlay = () => {
    Navigation.showOverlay({
      component: {
        name: Screens.DefaultScreen,
        options: {
          layout: { componentBackgroundColor: 'red' },
          overlay: {
            interceptTouchOutside: true
          }
        }
      }
    });
  }

  dismissOverlay = () => {
    Navigation.dismissOverlay(this.props.componentId);
  }

  push = () => {
    
    Navigation.push(this.props.componentId, {
      component: {
        name: Screens.DefaultScreen,
        passProps: {
          text: 'Pushed screen'
        },
        options: {
          topBar: {
            title: {
              text: 'Pushed screen title'
            }
          }
        }
      }
    });
  }
  pop = () => {
    Navigation.pop(this.props.componentId);
  }
  popToRoot = () => {
    Navigation.popToRoot(this.props.componentId);
  }

  popTo = () => {
    Navigation.popTo('Component50');
  }

  setStackRoot = () => {
    Navigation.setStackRoot(this.props.componentId, [
      {
      component: {
        name: Screens.DefaultScreen,
            passProps: {
              text: 'Root screen'
            },
            options: {
              animations: {
                setStackRoot: {
                  enabled: true
                }
              }
            }
          }
    }
  ]);
  }
}

export default DefaultScreen;
