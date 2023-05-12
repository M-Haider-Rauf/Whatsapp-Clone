import { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";
import { StackNavigator } from "./src/Navigators/StackNavigator";
import { Provider, useDispatch } from "react-redux";

import { store } from "./src/redux/store";
import { auth } from './src/firebase';

export default function App() {
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        store.dispatch({type: "user/login", payload: user.uid});
      }
      else {
        store.dispatch({type: "user/logout"});
      }
    });

    return unsub;
  }, []);

  return(
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}