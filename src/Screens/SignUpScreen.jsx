import { 
    View, 
    StyleSheet, 
    Text,
    TouchableOpacity
} from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Input } from '../Components/Input';
import { useState } from "react";
import { Button } from "../Components/Button";
import { Header } from "../Components/Header";
import { useNavigation } from "@react-navigation/native";


export function SignUpScreen(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    return (
        <View style={styles.rootContainer}>
            <View style={styles.form}>
                <Header />
                <Input
                    icon={<MaterialCommunityIcons name='account' color='black' size={20} />}
                    title="name"
                    onChange={setEmail}
                    keyboardType="email-address"
                />
                <Input
                    icon={<MaterialCommunityIcons name='email' color='black' size={20} />}
                    title="email"
                    onChange={setEmail}
                    keyboardType="email-address"
                />
                <Input
                    icon={<MaterialCommunityIcons name='account-key' color='black' size={20} />}
                    title="password"
                    onChange={setEmail}
                />
                <Button title="Signup"/>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{fontSize: 16}}>
                        Already have an account? Log in!
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
    height: 450,
    justifyContent: 'space-between',
    alignItems: 'center',
},
});