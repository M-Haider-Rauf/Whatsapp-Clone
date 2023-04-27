import { View, StyleSheet, TouchableOpacity } from "react-native";

import { FontAwesome } from '@expo/vector-icons';

import { Avatar } from "../Components/Avatar";


export function ProfileScreen(props) {
    return(
        <View style={styles.rootContainer}>
            <Avatar source={null} size={150} />
            <TouchableOpacity 
                style={styles.cameraContainer}
                onPress={() => console.warn("pic change")}
            >
                <FontAwesome name="camera" size={20} color="white" />
            </TouchableOpacity>
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
    },
    cameraContainer: {
        position: "absolute",
        right: "29%",
        top: "54%",
        zIndex: 10,
        backgroundColor: "teal",
        width: 45,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100
    }
});