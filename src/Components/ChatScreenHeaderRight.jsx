import { View, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons';

export function ChatScreenHeaderRight(props) {
    return(
        <View style={styles.rootContainer}>
            <MaterialCommunityIcons name="video" size={26} color="white" />
            <MaterialCommunityIcons name="phone" size={26} color="white" />
            <MaterialCommunityIcons name="dots-vertical" size={26} color="white" />
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 120,
    }
});