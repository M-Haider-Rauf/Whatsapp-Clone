import { 
        View, 
        StyleSheet, 
        Text, 
        TouchableOpacity 
    } from "react-native";
    
import dayjs from "dayjs";
import { Avatar } from "./Avatar";

export function ChatListItem(props) {
    return(
        <TouchableOpacity style={styles.rootContainer} onPress={props.onPress}>
            <View style={styles.avatarContainer}>
                <Avatar size={50} source={props.photo} />
            </View>
            <View style={styles.titleContainer}>
                <Text numberOfLines={1} style={styles.name}>{props.name}</Text>
                <Text numberOfLines={1} style={styles.lastMessage}>{props.lastMessage}</Text>
            </View>
            <View style={styles.timeContainer}>
                <Text style={styles.time}>{props.time}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "row",
        alignItems: "center",
        height: 80,
    },
    avatarContainer: {
        marginHorizontal: 15
    },
    titleContainer: {
        width: "60%",
        paddingVertical: 5,
        height: "100%",
        justifyContent: "space-evenly",
    },
    name: {
        fontWeight: "bold",
        fontSize: 18
    },
    lastMessage: {
        color: "gray",
        fontSize: 14
    },
    timeContainer: {
        position: "relative",
        paddingVertical: 10,
        paddingRight: 10,
        justifyContent: "flex-start",
        alignItems: "flex-end",
        alignSelf: "flex-start",
        flex: 1,
    },
    time: {
        color: "gray",
        fontSize: 12,
    }
});