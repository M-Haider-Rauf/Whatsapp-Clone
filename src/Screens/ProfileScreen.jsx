import { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import { signOut } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome } from '@expo/vector-icons';
import { launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker";

import { uploadToStorage } from "../databaseOperations";
import { Avatar } from "../Components/Avatar";
import { auth, storage, firestore } from "./../firebase";
import { Button } from "../Components/Button";

export function ProfileScreen(props) {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const user = useSelector(state => state.user);
    
    const uid = user.uid;
    const name = user.name;
    const about = user.about;
    const photoURL = user.photoURL;

    const changePhoto = async () => {
        const result = await launchImageLibraryAsync({
            aspect: [1, 1],
            allowsEditing: true,
            mediaTypes: MediaTypeOptions.Images
        })

        if (result.canceled) return;
        
        setLoading(true);

        const url = await uploadToStorage(result.assets[0].uri, "pfps", uid);

        updateDoc(doc(firestore, "users", uid), { photoURL: url })
        .then(value => dispatch({ type: "user/changePhoto", payload: url }));

        setLoading(false)
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
                <Text style={styles.nameText}>{name}</Text>
            </View>
            
            <TouchableOpacity>
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
        alignItems: "center",
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
    nameText: {
        marginTop: 20,
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center"
    },
    aboutText: {
        width: "80%",
        textAlign: "center",
        fontSize: 16,
        fontStyle: "italic"
    }
});