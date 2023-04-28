import { NavigationContainer } from "@react-navigation/native";

import { StackNavigator } from "./src/Navigators/StackNavigator";
import { Provider } from "react-redux";

import { store } from "./src/redux/store";

export default function App() {
  return(
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}