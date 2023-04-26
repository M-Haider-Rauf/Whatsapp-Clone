import { View, Text, StyleSheet } from "react-native";

export function Message(props){
    const C_USER_MSG = "#E7FFDB";

    const additionalStyles = {};

    if (props.sent) {
        additionalStyles["backgroundColor"] = C_USER_MSG;
        additionalStyles["alignSelf"] = "flex-end";
    }
    else {
        additionalStyles["backgroundColor"] = "white";
        additionalStyles["alignSelf"] = "flex-start";
    }

    return(
        <View style={[styles.rootContainer, additionalStyles]}>
            <Text style={styles.message}>{props.text}</Text>
            <Text style={styles.time}>{props.time}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        maxWidth: "80%",
        minWidth: "30%",
        paddingVertical: 5,
        paddingHorizontal: 7,
        marginHorizontal: 12,
        marginVertical: 2,
        borderRadius: 12,
    },
    message: {
        fontSize: 15
    },
    time: {
        alignSelf: "flex-end",
        color: "gray",
        fontSize: 12
    }
});