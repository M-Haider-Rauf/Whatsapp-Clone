import { 
        View, 
        StyleSheet, 
        Text 
    } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import C_TEAL from '../colors';


export function Header(props) {
    return(
        <View style={styles.rootContainer}>
            <MaterialCommunityIcons name="whatsapp" size={120} color={C_TEAL} />
            <Text style={styles.text}>Welcome to WhatsClone!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: C_TEAL,
        fontWeight: 'bold',
        fontSize: 22
    }
});