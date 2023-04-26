import { View, StyleSheet } from "react-native";

import { Avatar } from "../Components/Avatar";

export function ProfileScreen(props) {
    return(
        <View style={styles.rootContainer}>
            <Avatar source={null} size={100} />
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 120,
        height: 120,
        backgroundColor: "lightgray",
        borderRadius: 100,
        tintColor: "white"
    }
});