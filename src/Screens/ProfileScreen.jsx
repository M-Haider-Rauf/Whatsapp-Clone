import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import { signOut } from "firebase/auth";
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";

import { Avatar } from "../Components/Avatar";
import { auth } from "./../firebase";
import { Button } from "../Components/Button";


export function ProfileScreen(props) {
    const dispatch = useDispatch();
    const about = useSelector(state => state.user.about);

    return(
        <View style={styles.rootContainer}>
            <View style={styles.avatarContainer}>
                <Avatar source={null} size={150} />
                <TouchableOpacity 
                    style={styles.cameraContainer}
                    onPress={() => alert("Change PFP")}
                >
                    <FontAwesome name="camera" size={20} color="white" />
                </TouchableOpacity>
            </View>

            <Text style={styles.aboutText}>{about}</Text>
            <Button title="Logout" onPress={() => signOut(auth)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    avatarContainer: {

    },
    cameraContainer: {
        position: "absolute",
        left: "29%",
        top: "60%",
        zIndex: 10,
        backgroundColor: "teal",
        width: 45,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100
    },
    aboutText: {
        marginTop: 10
    }
});