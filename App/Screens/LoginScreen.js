import { Text, View, Button, TextInput, TouchableOpacity, StatusBar } from 'react-native';

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
                    onChangeText={(phoneNumber) => setEmail(phoneNumber)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Jane' })
                }
            >
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;