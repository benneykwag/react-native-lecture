import { Navigation } from "react-native-navigation";
const { setDefaultOptions } = require("~/commons/Options");

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);
Navigation.registerComponent("Test", () => require("~/screens/TestScreen"));
Navigation.registerComponent("Pushed", () =>
  require("~/screens/PushedScreen")
);
Navigation.registerComponent("Layouts", () =>
  require("~/screens/LayoutsScreen")
);
Navigation.registerComponent("Stack", () =>
  require("~/screens/StackScreen")
);


function start() {
    Navigation.events().registerAppLaunchedListener(() => {
        Navigation.setDefaultOptions({
            layout: {
              componentBackgroundColor: '#e8e8e8',
              orientation: ['portrait'],
              direction: 'locale'
            },
            bottomTabs: {
              titleDisplayMode: 'alwaysShow'
            },
            bottomTab: {
              selectedIconColor: '#5847ff',
              selectedTextColor: '#5847ff'
            }
          });
        /***
         * 기본 코드 (stack이 존재하지 않으므로 push등 작동안함.)
         */
        // Navigation.setRoot({
        //   root: {
        //     component: {
        //       // name: "navigation.playground.WelcomeScreen"
        //       // name: 'Layouts'
        //       name: 'Test'
        //     }
        //   }
        // });
        Navigation.setRoot({
          root: {
            bottomTabs: {
              children: [
                {
                  stack: {
                    children: [
                      {
                        component: {
                          name: "Test"
                        }
                      }
                    ],
                    options: {
                      bottomTab: {
                        text: "RNN 샘플"
                        // testID: testIDs.LAYOUTS_TAB
                      }
                    }
                  }
                }
              ]
            }
          }
        });
      });
}

module.exports = {
    start
  };
  