import { arrayUnion, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { firestore } from "../firebase";
import { useSelector } from "react-redux";
import { joinUIDs } from "../util";
import { getUserFromDB } from "../databaseOperations";
import dayjs from "dayjs";


export function ContactsScreen (props) {
    const [email, setEmail] = useState("");

    const user = useSelector(state => state.user);

    const currentUserEmail = user.email;
    const currentUserUID = user.uid;

    const searchUser = async () => {
        if (false && email === currentUserEmail) {
            alert("No such user!");
        }

        try {
            const user = await getUserFromDB(email.trim());
            if (user === null) {
                alert("No such user!");
            }
            else {
                const { uid, data } = user;
                const roomID = joinUIDs(currentUserUID, uid);

                await setDoc(doc(firestore, "chats", currentUserUID), { 
                    [roomID]: {
                        roomID: roomID,
                        uid: uid,
                        name: data.name,
                        photoURL: data.photoURL,
                        lastMessage: "",
                        time: dayjs().unix()
                    }
                }, { merge: true });

                alert(`Added ${data.name} to chat!`);
            }
        }
        catch (error) {
            alert(error.toString());
        }
    }

    return (
        <View style={styles.rootContainer}>
            <TextInput
                style={{
                    backgroundColor: "yellow",
                    width: "70%"
                }}
                onChangeText={setEmail}
            />
            <Button 
                title="Add User" 
                onPress={searchUser}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})