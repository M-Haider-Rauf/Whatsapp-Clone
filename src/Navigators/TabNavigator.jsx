import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { ChatsScreen } from "../Screens/ChatsScreen";
import { UnimplementedScreen } from "../Screens/UnimplementedScreen";

import C_TEAL from "../colors";

const Tab = createMaterialTopTabNavigator();

export function TabNavigator() {
    return(
        <Tab.Navigator 
            screenOptions={{
                tabBarIndicatorStyle: {
                    backgroundColor: "white",
                    shadowColor: "black"
                },
                tabBarLabelStyle: {
                    color: "white",
                    textTransform: "capitalize",
                    fontWeight: "500",
                    fontSize: 16
                },
                tabBarStyle: {
                    backgroundColor: C_TEAL
                }
            }}
            initialRouteName="Chats"
        >   
            <Tab.Screen component={ChatsScreen} name="Chats" />
            <Tab.Screen component={UnimplementedScreen} name="Status" />
            <Tab.Screen component={UnimplementedScreen} name="Calls" />
        </Tab.Navigator>
    );
}