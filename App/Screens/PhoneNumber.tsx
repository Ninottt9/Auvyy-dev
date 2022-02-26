import React, { useState, useRef } from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import PhoneInput from "react-native-phone-number-input";
import styles from "../config/PhoneNumberStyles.js";

import { sendSmsVerification } from "../api/verify.js";

const PhoneNumber = ({ navigation }) => {
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const phoneInput = useRef<PhoneInput>(null);

    return (
        <>
            <View style={styles.container}>
                <SafeAreaView style={styles.wrapper}>
                    <View style={styles.welcome}>
                        <Text>Welcome!</Text>
                    </View>
                    <PhoneInput
                        ref={phoneInput}
                        defaultValue={value}
                        defaultCode="PL"
                        layout="first"

                        onChangeText={(text) => {
                            if (text.length > 9) {
                                text = text.substring(0, 8);
                            }
                            setValue(text);
                        }}
                        onChangeFormattedText={(text) => {
                            setFormattedValue(text);
                        }}
                        countryPickerProps={{ withAlphaFilter: true }}
                        withShadow
                        autoFocus
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            // TODO - send SMS
                            // navigation.navigate('Main')
                            sendSmsVerification(formattedValue).then((sent) => {
                                console.log("Sent!");
                            });

                        }}
                    >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        </>
    );
};

export default PhoneNumber;