import { Navigation } from 'react-native-navigation'

import registerScreens from './src/screens'
Navigation.events().registerAppLaunchedListener(() => {
  registerScreens()
  // 1. setRoot
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'DefaultScreen'
                  }
                }
              ],
              options: {
                bottomTab: {
                  text: 'Layouts',
                  icon: require('./img/layouts.png'),
                  selectedIcon: require('./img/layouts_selected.png')
                }
              }
            }
          },
          {
            component: {
              name: 'DefaultScreen',
              passProps: {
                text: 'This is tab 2'
              },
              options: {
                bottomTab: {
                    text: "Layouts",
                    icon: require("./img/layouts.png"),
                    selectedIcon: require("./img/layouts_selected.png"),
                }
              }
            }
          }
        ]
      }
    }
  })
})
