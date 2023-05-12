import { Image, StyleSheet } from "react-native";

export function Avatar(props) {
    const additionalStyles = {
        width: props.size,
        height: props.size,
        tintColor: props.uri ?  undefined : "white"
    }

    return(
        <Image 
            source={props.source ? { uri: props.source}  : require("../../assets/user.png")}
            style={[styles.image, additionalStyles]}
        />
    );
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 100,
        backgroundColor: "lightgray",
    }
});