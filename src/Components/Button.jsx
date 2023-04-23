import { 
        TouchableOpacity, 
        StyleSheet, 
        Text 
    } from "react-native";
    
import C_TEAL from "../colors";

export function Button(props) {
    return (
        <TouchableOpacity style={styles.rootContainer} onPress={props.onPress}>
            <Text style={styles.text}>{props.title.toUpperCase()}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: C_TEAL,
        alignItems: 'center',
        justifyContent: 'center',
        width: 270,
        height: 40,
        borderRadius: 5
    },
    text: {
        fontSize: 18,
        color: 'white'
    }
});