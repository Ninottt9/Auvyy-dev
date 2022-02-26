import { Text, View, TextInput, TouchableOpacity, StatusBar, Button } from 'react-native';
import React, { useState } from 'react';

import styles from '../config/LogInStyles';

/*const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Phone number"
                    placeholderTextColor="#003f5c"
                    keyboardType='numeric'
                    maxLength={9}
                // onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                />
            </View>

            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() =>
                    navigation.navigate('Main')
                }
            >
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
};*/

// import auth from '@react-native-firebase/auth';

function HomeScreen() {
    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState(null);

    const [code, setCode] = useState('');

    // Handle the button press
    async function signInWithPhoneNumber(phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
    }

    async function confirmCode() {
        try {
            await confirm.confirm(code);
        } catch (error) {
            console.log('Invalid code.');
        }
    }

    if (!confirm) {
        return (
            <Button
                title="Phone Number Sign In"
                onPress={() => signInWithPhoneNumber('+1 650-555-3434')}
            />
        );
    }

    return (
        <>
            <TextInput value={code} onChangeText={text => setCode(text)} />
            <Button title="Confirm Code" onPress={() => confirmCode()} />
        </>
    );
}

// const [password, setPassword] = useState(null);
// const [phoneNumber, setPhoneNumber] = useState("phone number");

export default HomeScreen;