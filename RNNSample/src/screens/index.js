const React = require("react");
const { Navigation } = require("react-native-navigation");
const Screens = require("./Screens");

function registerScreens() {
  Navigation.registerComponent('Test', () => require("./TestScreen"));
  Navigation.registerComponent(Screens.Stack, () => require("./StackScreen"));
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
  Navigation.registerComponent(Screens.Options, () => require('./OptionsScreen'));
  Navigation.registerComponent(Screens.Buttons, () => require('./ButtonsScreen'));
  Navigation.registerComponent(Screens.Orientation, () => require('./OrientationScreen'));
  Navigation.registerComponent(Screens.OrientationDetect, () => require('./OrientationDetectScreen'));
  Navigation.registerComponent(Screens.Overlay, () => require('./OverlayScreen'));
  Navigation.registerComponent(Screens.OverlayAlert, () => require('./OverlayAlert'));
  Navigation.registerComponent(Screens.Pushed, () => require('./PushedScreen'));
  Navigation.registerComponent(Screens.ScrollViewOverlay, () => require('./ScrollViewOverlay'));
  Navigation.registerComponent(Screens.LifecycleButton, () => require('./LifecycleButton'));
  // Navigation.registerComponent(Screens.ReactTitleView, () => require('./CustomTopBar'));
  Navigation.registerComponent(Screens.RoundButton, () => require('./RoundedButton'));
  Navigation.registerComponent(Screens.Navigation, () => require('./NavigationScreen'));
  Navigation.registerComponent(Screens.SetRoot, () => require('./SetRootScreen'))
  Navigation.registerComponent(Screens.Modal, () => require('./ModalScreen'))
  // Navigation.registerComponent(Screens.ScrollViewOverlay, () => require('./ScrollViewOverlay'));
  // Navigation.registerComponent(Screens.RoundButton, () => require('./RoundedButton'));
  // Navigation.registerComponent(Screens.ReactTitleView, () => require('./CustomTopBar'));
  Navigation.registerComponent(Screens.EventsScreen, () => require('./StaticEventsScreen'));
  // Navigation.registerComponent(Screens.EventsOverlay, () => require('./StaticLifecycleOverlay'));
  // Navigation.registerComponent(Screens.SideMenuLeft, () => require('./SideMenuLeftScreen'));
  // Navigation.registerComponent(Screens.SideMenuCenter, () => require('./SideMenuCenterScreen'));
  // Navigation.registerComponent(Screens.SideMenuRight, () => require('./SideMenuRightScreen'));
  // Navigation.registerComponent(Screens.FlatListScreen, () => require('./FlatListScreen'));
  // Navigation.registerComponent(Screens.Alert, () => require('./Alert'));
  Navigation.registerComponent(Screens.Orientation, () => require('./OrientationScreen'));
  // Navigation.registerComponent(Screens.OrientationDetect, () => require('./OrientationDetectScreen'));
  // Navigation.registerComponent(Screens.Search, () => require('./SearchScreen'));
  Navigation.registerComponent(Screens.ExternalComponent, () => require('./ExternalComponentScreen'));

  const { ContextProvider } = require('../context');
  const ContextScreen = require('./ContextScreen');
  Navigation.registerComponent(Screens.ContextScreen, () => (props) =>
    <ContextProvider>
      <ContextScreen {...props} />
    </ContextProvider>,
    () => ContextScreen);

  
}

module.exports = {
  registerScreens
};
