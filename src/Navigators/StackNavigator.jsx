import { View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import { LoginScreen } from "../Screens/LoginScreen";
import { SignUpScreen } from "../Screens/SignUpScreen";
import { HeaderRight } from "../Components/HeaderRight";
import { TabNavigator } from "./TabNavigator";
import { ProfileScreen } from "../Screens/ProfileScreen";
import { UnimplementedScreen } from "../Screens/UnimplementedScreen";
import { ChatScreen } from "../Screens/ChatScreen";
import { ContactsScreen } from "../Screens/ContactsScreen";
import { ChatScreenTitle } from "../Components/ChatScreenTitle";
import { ChatScreenHeaderRight } from "../Components/ChatScreenHeaderRight";
import C_TEAL from "../colors";

const Stack = createNativeStackNavigator();

export function StackNavigator() {
    const loggedIn = useSelector(state => state.user.uid) !== null;

    const options = {
        headerShown: true,
        headerTitle: "WhatsClone",
        statusBarColor: C_TEAL,
        headerBackground: () => <View style={{backgroundColor: C_TEAL, flex: 1}} />,
        headerTitleStyle: {
            color: "white"
        },
        headerSearchBarOptions: {
            inputType: "text"
        },
        headerRight: () => <HeaderRight />,
    }

    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            { loggedIn ? 
                <Stack.Group>
                    <Stack.Screen 
                        component={TabNavigator} 
                        name="Home" 
                        options={options}
                    />
                    <Stack.Screen 
                        component={ChatScreen}
                        name="ChatScreen"
                        options={(args) => {
                                const params = args.route.params;
                                const name = params.name;
                                const photoURL = params.photoURL;

                                return {
                                    statusBarColor: C_TEAL,
                                    headerShown: true,
                                    headerBackground: () => <View style={{backgroundColor: C_TEAL, flex: 1}} />,
                                    headerTintColor: "white",
                                    title: name,
                                    headerTitle: (props) => <ChatScreenTitle title={props.children} photo={photoURL} />,
                                    headerRight: (props) => <ChatScreenHeaderRight />
                                };
                            }
                        }
                    />
                    <Stack.Screen
                         component={ProfileScreen} 
                         name="Profile"
                         options={{
                            statusBarColor: C_TEAL,
                            headerShown: true,
                            headerBackground: () => <View style={{backgroundColor: C_TEAL, flex: 1}} />,
                            headerTintColor: "white"
                        }}
                    />
                    <Stack.Screen 
                        component={ ContactsScreen }
                        name="Contacts"
                    />
                </Stack.Group>
                :
                <Stack.Group>
                    <Stack.Screen component={LoginScreen} name="Login" />
                    <Stack.Screen component={SignUpScreen} name="SignUp"/>
                </Stack.Group>
            }
        </Stack.Navigator>
    );
}