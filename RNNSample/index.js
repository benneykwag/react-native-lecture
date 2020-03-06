// import { Navigation } from "react-native-navigation";
// import App from "./App";

// Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);

// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       component: {
//         name: "navigation.playground.WelcomeScreen"
//       }
//     }
//   });
// });

// require('./src/index');

const { start } = require("./src/app");
// const { start } = require("./src/samples/basic");

start();
