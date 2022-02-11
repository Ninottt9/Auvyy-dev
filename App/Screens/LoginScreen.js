import { Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import React, { useState } from 'react';

import styles from '../LogInStyles';

const HomeScreen = ({ navigation }) => {
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

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                // onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>

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
};

// const [password, setPassword] = useState(null);
// const [phoneNumber, setPhoneNumber] = useState("phone number");

export default HomeScreen;