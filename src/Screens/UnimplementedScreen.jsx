import { View, Text, StyleSheet } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';

export function UnimplementedScreen(props) {
    return (
        <View style={styles.rootContainer}>
            <MaterialIcons name="construction" size={140} color="black" />
            <Text style={styles.text}>screen not implemented{"\n:("}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: "monospace",
        fontSize: 32,
        marginHorizontal: 10,
        textAlign: "center"
    }
})