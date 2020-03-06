const React = require("react");
const { Navigation } = require("react-native-navigation");
const Screens = require("./Screens");

function registerScreens() {
  Navigation.registerComponent('Test', () => require("./TestScreen"));
  Navigation.registerComponent(Screens.Stack, () => require("./StackScreen"));
  Navigation.registerComponent(Screens.Pushed, () => require("./StackScreen"));
  Navigation.registerComponent(Screens.Lifecycle, () => require("./LifecycleScreen"));
  Navigation.registerComponent(Screens.FirstBottomTabsScreen, () => require("./FirstBottomTabScreen"));
  Navigation.registerComponent(Screens.SecondBottomTabsScreen, () => require("./SecondBottomTabScreen"));
  Navigation.registerComponent(Screens.SideMenuLeft, () => require("./SideMenuLeftScreen"));
  Navigation.registerComponent(Screens.SideMenuCenter, () => require("./SideMenuCenterScreen"));
  Navigation.registerComponent(Screens.SideMenuRight, () => require("./SideMenuRightScreen"));
  Navigation.registerComponent(Screens.Search, () => require("./SearchScreen"));
  
  Navigation.registerComponent(Screens.Layouts, () =>
    require("./LayoutsScreen")
  );
  Navigation.registerComponent(Screens.Alert, () => require("./Alert"));
}

module.exports = {
  registerScreens
};
