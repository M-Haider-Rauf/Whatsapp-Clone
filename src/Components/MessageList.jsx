import { forwardRef } from "react";

import { View, FlatList, StyleSheet, Text } from "react-native";

import { Message } from "./Message";

const EncryptionText = () => {
    return (
        <View style={styles.encryptionContainer}>
            <Text style={styles.encryptionText}>
            🔒 Messages and calls are end-to-end encrypted. No one outside of this chat, not even
                WhatsApp, can read or listen to them.{"\n"}
                Tap to learn more.
            </Text>
        </View>
    )
}

const MessageList = forwardRef((props, ref) => {
    const renderItem = ({item}) => {
        return(
            <Message
                text={item.text} 
                sent={item.sent}
                time={item.time} 
            />
        );
    }

    const data = props.messages;

    return(
        <View style={styles.rootContainer}>
            
            <FlatList
                ListHeaderComponent={<EncryptionText />}
                style={{width: "100%"}}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${item.text}${index}`}
                ref={ref}
            />
        </View>
    );
});

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
    },
    encryptionContainer: {
        backgroundColor: "#FEEECC",
        width: "80%",
        height: 70,
        borderRadius: 7,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    encryptionText: {
        textAlign: "center",
        color: "gray",
        fontSize: 13
    }
})

export { MessageList };