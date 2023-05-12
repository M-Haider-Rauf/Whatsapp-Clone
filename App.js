import { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";
import { StackNavigator } from "./src/Navigators/StackNavigator";
import { Provider } from "react-redux";

import { store } from "./src/redux/store";
import { auth, firestore } from './src/firebase';
import { doc, getDoc } from "firebase/firestore";

export default function App() {
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        getDoc(doc(firestore, "users", user.uid))
        .then(value => {
          const data = value.data();
          const payload = {
            uid: user.uid,
            ...data
          }
          store.dispatch({type: "user/login", payload: payload});
        })
        .finally(() => {store.dispatch({type: "user/setLoading", payload: false});});
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