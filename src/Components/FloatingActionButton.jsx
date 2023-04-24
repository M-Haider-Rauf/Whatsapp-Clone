import { StyleSheet, TouchableOpacity } from "react-native";

export function FloatingActionButton(props) {
    return(
        <TouchableOpacity style={[styles.rootContainer, {backgroundColor: props.color}]}>
            {props.icon}
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    rootContainer: {
        zIndex: 100,
        bottom: 20,
        right: 20,
        position: "absolute",
        borderRadius: 100,
        height: 55,
        width: 55,
        justifyContent: "center",
        alignItems: "center"
    }
});