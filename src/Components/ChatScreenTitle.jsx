import { Text, View, StyleSheet } from "react-native";

import { Avatar } from "./Avatar";

export function ChatScreenTitle(props) {
    const title = props.title;

    return(
        <View style={styles.rootContainer}>
            <Avatar size={38} source={props.photo} />
            <Text style={styles.text}>
            {title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        right: 32,
        position: "relative",
        flexDirection: "row",
    },
    text: {
        color: "white",
        fontWeight: "600",
        textAlignVertical: "center",
        marginLeft: 10,
        fontSize: 18
    }
})