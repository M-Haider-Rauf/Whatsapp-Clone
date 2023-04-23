import { NavigationContainer } from "@react-navigation/native";

import { StackNavigator } from "./src/Navigators/StackNavigator";

export default function App() {
  return(
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}