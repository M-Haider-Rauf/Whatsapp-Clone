import { 
        View, 
        StyleSheet, 
        TextInput, 
        Text 
    } from "react-native";
    
export function Input(props) {
    return (
        <View>
            <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>{props.icon}</View>
                <TextInput
                    placeholder={props.title}
                    keyboardType={props.keyboardType}
                    onChangeText={props.onChange}
                    style={styles.input}
                    secureTextEntry={props.hidden}
                />
            </View>
            <Text style={styles.error}>{props.error}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: 270,
        borderWidth: 1,
        borderRadius: 100,
        paddingVertical: 10,
        fontSize: 16
    },
    input: {
        fontSize: 18,
        flex: 1,
    },
    iconContainer: {
        flex: 0,
        paddingHorizontal: 10
    },
    error: {
        color: 'red',
        marginLeft: 10
    }
});