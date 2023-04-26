import { StyleSheet } from "react-native";
import { ChatListItem } from "./ChatListItem";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function ChatList(props) {
    const navigation = useNavigation();

    const renderItem = ({item}) => {
        return(
            <ChatListItem
                name={item.name} 
                lastMessage={item.lastMessage} 
                time={item.time} 
                onPress={() => navigation.navigate('ChatScreen')}
            />
        );
    }

    const data = Array(10).fill({
            name: "User 0", 
            lastMessage: "Last sent. Last sent. Last sent. Last sent.", 
            time: "10:00 AM"
    });


    return(
            <FlatList 
                data={data}
                renderItem={renderItem}
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