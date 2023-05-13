import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import { signOut } from "firebase/auth";
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { Avatar } from "../Components/Avatar";
import { auth, storage, firestore } from "./../firebase";
import { Button } from "../Components/Button";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";

export function ProfileScreen(props) {
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();

    const uid = useSelector(state => state.user.uid);
    const about = useSelector(state => state.user.about);
    const photoURL = useSelector(state => state.user.photoURL);

    const changePhoto = () => {
        launchImageLibraryAsync({
            aspect: [1, 1],
            allowsEditing: true,
            mediaTypes: MediaTypeOptions.Images
        })
        .then(result => {
            return fetch(result.assets[0].uri);
        })
        .then(body => body.blob())
        .then(blob => {
            const path = ref(storage, `pfps/${uid}`);
            return uploadBytes(path, blob);
        })
        .then(result => {
            return getDownloadURL(result.ref);
        })
        .then(url => {
            updateDoc(doc(firestore, "users", uid), { photoURL: url })
            .then(value => dispatch({ type: "user/changePhoto", payload: url }));
        })
        .catch(error => alert(error.toString()));
    }

    return(
        <View style={styles.rootContainer}>
            <View style={styles.avatarContainer}>
                <Avatar source={photoURL} size={150} />
                <TouchableOpacity 
                    style={styles.cameraContainer}
                    onPress={changePhoto}
                >
                    <FontAwesome name="camera" size={20} color="white" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => setVisible(true)}>
                <Text style={styles.aboutText}>{about}</Text>
            </TouchableOpacity>
            <Button title="Logout" onPress={() => signOut(auth)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "space-evenly",
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
        marginTop: 10,
        width: "80%",
        textAlign: "center",
        fontSize: 16,
        fontFamily: "monospace"
    }
});