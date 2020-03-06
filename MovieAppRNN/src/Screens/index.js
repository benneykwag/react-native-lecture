const React = require("react");
const { Navigation } = require("react-native-navigation");
const Screens = require("~/Screens");
import MovieHome from "~/Screens/MovieHome";
import MovieDetail from "~/Screens/MovieDetail";
function registerScreens() {
    Navigation.registerComponent('MovieHome', () => MovieHome);
    Navigation.registerComponent('MovieDetail', () => MovieDetail);
  
}

module.exports = {
  registerScreens
};
