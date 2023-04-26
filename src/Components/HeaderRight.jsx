import { View, StyleSheet, TouchableOpacity } from "react-native";

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export function HeaderRight() {
    const navigation = useNavigation();

    return(
        <View style={styles.rootContainer}>
            <TouchableOpacity>
                <MaterialCommunityIcons name="camera-outline" size={26} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialIcons name="search" size={26} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <MaterialCommunityIcons name="dots-vertical" size={26} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "row",
        width: 110,
        justifyContent: "space-between"
    }
});