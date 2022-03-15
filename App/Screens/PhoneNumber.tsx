import React, { useState, useRef } from "react";
import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import styles from "../config/PhoneNumberStyles.js";

// import { SMS } from 'expo-sms'
// import { sendSmsVerification } from "../api/verify.js";



const PhoneNumber = ({ navigation }) => {
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const phoneInput = useRef<PhoneInput>(null);

    // const onPressContinue = () => {

    // }
    // const [phoneNumberm, setPhoneNumber] = useState();
    // const [focusInput, setFocusInput] = useState(true);
    // const onChangePhone = (number) => {
    //     setPhoneNumber(number)
    // }


    // onPress = async () => {
    //     const status = await SMS.sendSMSAsync(
    //         '+48730989791',
    //         'Here is your athantivation code'
    //     );
    //     console.log(status);
    // };

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


                        placeholder="902 291 011"
                        // value={phoneNumber}

                        onChangeText={(text) => {
                            // if (text.length > 9) {
                            //     text = text.substring(0, 8);
                            // }
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
                    // onPress={this.onPress}
                    // TODO - send SMS
                    // navigation.navigate('Main')

                    >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        </>
    );
};

export default PhoneNumber;