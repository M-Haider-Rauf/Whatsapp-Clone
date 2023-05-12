import { useState } from "react";

import { 
        View, 
        StyleSheet, 
        Text,
        TouchableOpacity
    } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Input } from '../Components/Input';
import { Button } from "../Components/Button";
import { Header } from "../Components/Header";

export function LoginScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();
    const dispatch = useDispatch();

    return (
        <View style={styles.rootContainer}>
            <View style={styles.form}>
                <Header />
                <Input
                    icon={<MaterialCommunityIcons name='email' color='black' size={20} />}
                    title="email"
                    onChange={setEmail}
                    keyboardType="email-address"
                />
                <Input
                    icon={<MaterialCommunityIcons name='account-key' color='black' size={20} />}
                    title="password"
                    onChange={setPassword}
                />
                <Button title="Login" onPress={() => {}}/>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{fontSize: 16}}>
                        Have no account? Sign Up!
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    form: {
        height: 400,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});