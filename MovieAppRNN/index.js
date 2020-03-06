import { Navigation } from "react-native-navigation";
import MovieHome from "./src/Screens/MovieHome";
import MovieDetail from "./src/Screens/MovieDetail";
import { registerScreens } from "./src/Screens";
// import App from "./App"

// Navigation.registerComponent(`MovieHome`, () => MovieHome);
// Navigation.registerComponent(`MovieDetail`, () => MovieDetail);
registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "MovieHome"
            }
          }
        ],
        options: {
         
        }
      }
    }
  });
});