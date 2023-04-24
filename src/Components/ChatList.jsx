import { View, StyleSheet } from "react-native";
import { ChatListItem } from "./ChatListItem";
import { FlatList } from "react-native";

export function ChatList(props) {



    return(
        <FlatList 
            data={Array(15).fill({name: "User 0", lastMessage: "Last sent. Last sent. Last sent.", time: "10:00 AM"})}
            renderItem={({item}) => <ChatListItem name={item.name} lastMessage={item.lastMessage} time={item.time} /> }
            keyExtractor={(item, index) => index}
        />
    ); 
}

const styles = StyleSheet.create({
    rootContainer: {
        justifyContent: "center",
        alignItems: "center",
    }
});