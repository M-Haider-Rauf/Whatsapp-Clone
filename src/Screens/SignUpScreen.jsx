import { useState } from "react";
import { 
    View, 
    StyleSheet, 
    Text,
    TouchableOpacity
} from "react-native";

import { auth, firestore } from "../firebase";
import { Input } from '../Components/Input';
import { Button } from "../Components/Button";
import { Header } from "../Components/Header";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function SignUpScreen(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();


    const signUp = () => {
        setLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
        .then(userCred => {
            const uid = userCred.user.uid;

            return setDoc(doc(firestore, "users", uid), {
                name: name,
                photoURL: null,
                about: "Can't talk, WhatsClone only"
            });
        })
        .finally(() => setLoading(false));
    }

    return (
        <View style={styles.rootContainer}>
            <View style={styles.form}>
                <Header />
                <Input
                    icon={<MaterialCommunityIcons name='account' color='black' size={20} />}
                    title="name"
                    onChange={setName}
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
                    onChange={setPassword}
                />
                <Button title="Signup" onPress={signUp} loading={loading} />
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