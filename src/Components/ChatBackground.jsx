import { ImageBackground, StyleSheet } from "react-native";

export function ChatBackground(props) {
    return(
        <ImageBackground 
            source={require("../../assets/background.png")}
            style={[style.rootContainer, props.style]}
        >
            {props.children}
        </ImageBackground>
    );
}

const style = StyleSheet.create({
    rootContainer: {
        justifyContent: "center"
    }
})