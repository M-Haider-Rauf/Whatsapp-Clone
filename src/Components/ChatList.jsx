import { StyleSheet, FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";

import { ChatListItem } from "./ChatListItem";

export function ChatList(props) {
    const navigation = useNavigation();

    const renderItem = ({item}) => {
        return(
            <ChatListItem
                name={item.name} 
                lastMessage={item.lastMessage} 
                time={dayjs.unix(item.time).format('h:mm A')} 
                photo={item.photoURL}
                onPress={() => navigation.navigate('ChatScreen', {
                    uid: item.uid,
                    roomID: item.roomID,
                    name: item.name,
                    photoURL: item.photoURL
                })}
            />
        );
    }

    const data = props.chats;


    return(
        <FlatList 
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.uid}
        />
    ); 
}

const styles = StyleSheet.create({
    rootContainer: {
        justifyContent: "center",
        alignItems: "center",
    }
});