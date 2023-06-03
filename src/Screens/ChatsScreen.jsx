import { View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { ChatList } from "../Components/ChatList";
import { FloatingActionButton } from "../Components/FloatingActionButton";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { firestore } from "../firebase";
import { useSelector } from "react-redux";

export function ChatsScreen() {
    const [chats, setChats] = useState([]);

    const navigation = useNavigation();
    const currentUser = useSelector(state => state.user);

    useEffect(() => {
        const cleanup = onSnapshot(doc(firestore, "chats", currentUser.uid), (docSnap) => {
            if (docSnap.exists()) {
                const data = docSnap.data();
                const newMessages = [];
                
                Object.values(data).forEach(value => {
                    newMessages.push(value);
                })
                
                console.log(chats);
                setChats(newMessages);
            }
        })

        return cleanup;
    }, []);

    return(
        <View style={{flex: 1}}>
            <ChatList chats={chats}/>
            <FloatingActionButton 
                icon={<MaterialIcons size={24} name="message" color="white" />}
                color="#00A884"
                onPress={() => navigation.navigate("Contacts")}
            />
        </View>
    );
}