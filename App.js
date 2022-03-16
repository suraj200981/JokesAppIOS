import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Joke App v1",
      //change title color
      headerStyle: {
        backgroundColor: "#C70E4F",
      },
      //change title text color
      headerTintColor: "white",
      //change title fontSize
      headerTitleStyle: {
        fontWeight: "200",
        fontSize:40,
        //change font family to playful
        fontFamily: "Chalkduster",
      },      
    },
  }
  
);
//change background color


export default createAppContainer(navigator);
