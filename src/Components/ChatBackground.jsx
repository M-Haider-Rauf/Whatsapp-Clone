import { View, Image, StyleSheet, Dimensions } from "react-native";

export function ChatBackground(props) {
    return(
        <View style={[styles.rootContainer, props.style]}>
            {props.children}
            <Image
                style={styles.image}
                source={require("../../assets/background.png")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1
    },
    image: {
        top: 0,
        right: 0,
        position: "absolute",
        zIndex: -10,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    }
})