import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';
import C_TEAL from "../colors";

export function EditableText(props) {
    return (
        <TouchableOpacity 
            style={styles.rootContainer}
            onPress={props.onPress}
        >
            {props.icon}
            <View style={styles.contentContainer}>
                <Text>{props.title}</Text>
            </View>
            <MaterialIcons name="mode-edit" size={24} color={C_TEAL} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    contentContainer: {

    }
})