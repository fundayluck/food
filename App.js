import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import DetailShowScreen from "./src/screens/DetailShowScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Detail: DetailShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
