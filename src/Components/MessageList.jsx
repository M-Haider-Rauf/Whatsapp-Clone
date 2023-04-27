import { forwardRef } from "react";

import { View, FlatList, StyleSheet } from "react-native";

import { Message } from "./Message";

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
                style={{width: "100%"}}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
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
        width: 200,
        height: 50
    }
})

export { MessageList };