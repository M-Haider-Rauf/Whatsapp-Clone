import { useState, useRef, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import dayjs from "dayjs";

import { ChatBackground } from "../Components/ChatBackground";
import { MessageList } from "../Components/MessageList";
import { MessageInput } from "../Components/MessageInput";
import { useSelector } from "react-redux";
import { firestore } from "../firebase";
import { useRoute } from "@react-navigation/native";

import { query, doc ,orderBy, onSnapshot } from "firebase/firestore";
import { sendMessageToDB } from "../databaseOperations";

export function ChatScreen() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    const route = useRoute();
    const params = route.params;
    const currentUser = useSelector(state => state.user);

    useEffect(() => {
        const cleanup = onSnapshot(doc(firestore, "chatRooms", params.roomID), (snapshot) => {
            if (snapshot.exists()) {
                setMessages(snapshot.data().messages);
            }
        })

        return cleanup;
    }, [])

    useEffect(() => {
        
    }, [])

    const trimmedMessage = message.trim();

    const listRef = useRef(null);

    const onSend = () => {
        if (trimmedMessage !== "") {
            sendMessageToDB(currentUser, {...params}, message);

            setMessage("");

            if (messages.length > 0) {
                listRef.current.scrollToIndex({index: messages.length - 1});
            }
        }
    }

    return(
        <ChatBackground style={styles.rootContainer}>
            <MessageList messages={messages} ref={listRef} />
            <MessageInput
                onChangeText={(text) => setMessage(text)}
                onSend={onSend}
                voice={trimmedMessage === ""}
                message={message}
            />
        </ChatBackground>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        justifyContent: "center",
    },
    encryptionContainer: {
        color: "#FEEECC",
        width: 70,
        height: 70
    }
});