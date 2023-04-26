import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export function MessageInput(props) {
    return(
        <View style={styles.rootContainer}>
            <View style={styles.inputContainer}>
                <Fontisto name="smiley" size={20} color="gray" />
                <TextInput 
                    value={props.message}
                    style={styles.input}
                    placeholder="Message"
                    placeholderTextColor="darkgray"
                    onChangeText={(text) => props.onChangeText(text)}
                />
                <FontAwesome name="camera" size={22} color="gray" />
                <FontAwesome name="paperclip" size={22} color="gray" />
            </View>
            <TouchableOpacity 
                style={styles.sendContainer}
                onPress={props.onSend}
            >
                {
                    props.voice ?
                    <MaterialIcons name="mic" size={24} color="white" />
                    :
                    <Ionicons name="send" size={24} color="white" />
                }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
        height: 55,
        width: "100%",
        padding: 5,
    },
    inputContainer: {
        alignItems: "center",
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderRadius: 100,
        height: "100%",
    },
    input: {
        width: "65%",
        fontSize: 18,
    },
    sendContainer: {
        backgroundColor: "#00A884",
        borderRadius: 100,
        height: 45,
        width: 45,
        justifyContent: "center",
        alignItems: "center"
    }
})