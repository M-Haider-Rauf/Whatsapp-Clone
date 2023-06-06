import { useState, useRef, useEffect } from "react";
import { StyleSheet } from "react-native";


import { useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";
import { doc, onSnapshot } from "firebase/firestore";

import { firestore } from "../firebase";
import { sendMessageToDB } from "../databaseOperations";
import { ChatBackground } from "../Components/ChatBackground";
import { MessageList } from "../Components/MessageList";
import { MessageInput } from "../Components/MessageInput";

export function ChatScreen() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    const listRef = useRef(null);

    const route = useRoute();
    const params = route.params;
    const currentUser = useSelector(state => state.user);

    useEffect(() => {
        const cleanup = onSnapshot(doc(firestore, "chatRooms", params.roomID), (snapshot) => {
            if (snapshot.exists()) {
                setMessages(snapshot.data().messages.reverse());
            }
        })

        return cleanup;
    }, []);

    useEffect(() => {
        if (messages.length > 0) {
            listRef.current.scrollToIndex({index: 0});
        }
    }, [messages]);

    const trimmedMessage = message.trim();
    

    const onSend = async () => {
        if (trimmedMessage !== "") {
            setMessage("");
            await sendMessageToDB(currentUser, {...params}, message);
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