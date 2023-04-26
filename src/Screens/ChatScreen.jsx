import { useState } from "react";

import { StyleSheet } from "react-native";

import { ChatBackground } from "../Components/ChatBackground";
import { MessageList } from "../Components/MessageList";
import { MessageInput } from "../Components/MessageInput";

export function ChatScreen() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    const onSend = () => {
        if (message.trim() === "") return;

        const newMessages = messages.slice();
        newMessages.push({
            text: message,
            time: "12:00 AM",
            sent: Math.floor((Math.random() * 2.0))
        })

        setMessages(newMessages);
        setMessage("");
    }

    return(
        <ChatBackground style={styles.rootContainer}>
            <MessageList messages={messages} />
            <MessageInput
                onChangeText={(text) => setMessage(text)}
                onSend={onSend}
                voice={message.trim() === ""}
                message={message}
            />
        </ChatBackground>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
    },
});