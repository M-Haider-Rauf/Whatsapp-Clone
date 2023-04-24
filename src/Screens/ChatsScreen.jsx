import { View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { ChatList } from "../Components/ChatList";
import { FloatingActionButton } from "../Components/FloatingActionButton";

export function ChatsScreen() {
    return(
        <View>
            <FloatingActionButton 
                icon={<MaterialIcons size={24} name="message" color="white" />}
                color="#00A884"
            />
            <ChatList />
        </View>
    );
}